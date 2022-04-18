<template>
  <div class="box">
    <Subnav />
    <!-- 全部商品区域 -->
    <div class="container">
      <div class="allGoods">
        <h3>全部商品分类</h3>
        <table>
          <thead>
            <tr>
              <th width="25%">全部</th>
              <th width="25%">商品</th>
              <th width="12.5%">单价（元）</th>
              <th width="12.5%">数量</th>
              <th width="12.5%">小计（元）</th>
              <th width="12.5%">操作</th>
            </tr>
          </thead>
        </table>
        <table>
          <tbody>
            <tr v-for="i in shopcartList" :key="i.id">
              <td width="4.2%">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  :checked="i.isChecked"
                  @change="changeChecked(i)"
                />
              </td>
              <td width="25%">
                <img :src="i.imgUrl" alt="" />
                <p>
                  {{ i.skuName }}
                </p>
              </td>
              <td width="21%">语音升级款</td>
              <td width="12.5%">{{ i.skuPrice }}.00</td>
              <td width="12.5%">
                <!-- <em @click="i.skuNum > 1 ? i.skuNum-- : ''">-</em> -->
                <em @click="changeNum('minus', i, -1)">-</em>
                <input
                  type="text"
                  :value="i.skuNum"
                  class="ipt"
                  @change="changeNum('change', i, $event.target.value * 1)"
                />
                <!-- <em @click="i.skuNum++">+</em> -->
                <em @click="changeNum('add', i, 1)">+</em>
              </td>
              <td width="12.5%">{{ i.skuPrice * i.skuNum }}.00</td>
              <td>
                <span>
                  <a @click="deleteGoods(i)">删除</a>
                </span>
                <span>
                  <a>移到收藏</a>
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="allcheck">
          <ul>
            <li>
              <input
                type="checkbox"
                name=""
                id=""
                :checked="isAllChecked"
                @change="isAllCheck"
              />
              全选
            </li>
            <li @click="deleteCheckedGoods">删除选中的商品</li>
            <li>移到我的关注</li>
            <li>清除下架商品</li>
            <li>
              已选择<span>{{ chooseGoodsList.length }}</span
              >件商品
            </li>
            <li>
              总价（不含运费）：<i>{{ totalMoney }}</i>
            </li>
          </ul>
          <div class="settle" @click="goTrade">结算</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import throttle from "lodash/throttle";
export default {
  name: "ShopCart",
  data() {
    return {
      num: 0,
    };
  },
  computed: {
    ...mapState({
      shopcartList(state) {
        return state.Cart.shopcartList;
      },
    }),
    ...mapGetters(["chooseGoodsList"]),
    totalMoney() {
      return this.chooseGoodsList.reduce((total, item) => {
        return (total += item.skuNum * item.skuPrice);
      }, 0);
    },
    isAllChecked() {
      return this.shopcartList.every((item) => item.isChecked == 1);
    },
  },
  methods: {
    changeChecked(item) {
      item.isChecked = item.isChecked ? 0 : 1;
      this.$store.dispatch("changeGoodsChecked", {
        skuID: item.skuId,
        isChecked: item.isChecked,
      });
    },
    getShopCartList() {
      this.$store.dispatch("getShopCartList");
    },
    async isAllCheck(e) {
      let isChecked = e.target.checked ? 1 : 0;
      try {
        await this.$store.dispatch("checkAllGoodsStatus", isChecked);
        this.getShopCartList();
      } catch (error) {
        console.log(error.message);
      }
    },
    async deleteGoods(item) {
      try {
        await this.$store.dispatch("deleteGoods", item.skuId);
        this.getShopCartList();
      } catch (error) {
        alert("删除商品失败！");
      }
    },
    async deleteCheckedGoods() {
      try {
        await this.$store.dispatch("deleteCheckedGoods");
        this.getShopCartList();
      } catch (error) {
        console.log(error.message);
      }
    },
    goTrade() {
      this.$router.push({ name: "GetOrderTradeInfo" });
    },
    changeNum: throttle(async function (type, item, n) {
      switch (type) {
        case "add":
          n = 1;
          break;
        case "minus":
          n = item.skuNum > 1 ? -1 : 0;
          break;
        case "change":
          if (isNaN(n) || n <= 0) {
            n = 0;
          } else {
            n = parseInt(n) - item.skuNum;
          }
          break;
      }
      try {
        await this.$store.dispatch("addCart", { skuID: item.skuId, skuNum: n });
        this.getShopCartList();
      } catch (error) {
        console.log(error.message);
      }
    }, 1000),
  },
  mounted() {
    this.getShopCartList();
  },
};
</script>

<style lang="less" scoped>
.allGoods {
  margin: 10px 0;
  h3 {
    margin: 10px 0;
  }
  table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    width: 100%;
    thead {
      tr {
        th {
          height: 38px;
          background-color: rgb(240, 240, 240);
          text-align: left;
          padding-left: 10px;
        }
      }
    }
    tbody {
      tr {
        border-bottom: 1px solid #ccc;
        td {
          height: 103px;
          img {
            width: 82px;
            height: 82px;
            float: left;
          }
          p {
            float: left;
            width: 150px;
            padding: 0 5px;
          }
          span {
            display: block;
          }
          &:nth-child(6) {
            font-size: 16px;
          }
          em,
          .ipt {
            display: inline-block;
          }
          .ipt {
            width: 40px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border: none;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            float: left;
            outline: none;
            margin-left: 0 !important;
          }
          em {
            width: 20px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border: 1px solid #ccc;
            float: left;
          }
          input {
            margin-left: 10px;
          }
        }
      }
    }
  }
  .allcheck {
    position: relative;
    margin-top: 20px;
    height: 54px;
    width: 100%;
    border: 1px solid #ccc;
    ul {
      li {
        height: 100%;
        line-height: 54px;
        float: left;
        margin-right: 20px;
        input {
          margin-left: 10px;
          vertical-align: middle;
        }
        i {
          font-size: 16px;
          font-weight: 700;
          color: red;
        }
        &:nth-child(4) {
          margin-right: 400px;
        }
      }
    }
    .settle {
      width: 96px;
      height: 52px;
      line-height: 54px;
      text-align: center;
      font-size: 18px;
      color: #fff;
      background-color: red;
      position: absolute;
      top: 0;
      right: -1px;
    }
  }
}
</style>