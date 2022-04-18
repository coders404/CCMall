<template>
  <div class="box">
    <!-- 订单信息区域 -->
    <div class="container">
      <div class="tradeInfo">
        <h3>填写并核对订单信息</h3>
        <div class="tradeInfos">
          <div class="infoItem">
            <h4>收件人信息</h4>
            <ul class="clearfix">
              <li
                class="clearfix"
                v-for="i in addressList"
                :key="i.id"
                @click="changeDefault(i)"
              >
                <span>{{ i.consignee }}</span>
                <p>{{ i.fullAddress }} {{ i.phoneNum }}</p>
                <i v-if="i.isDefault == 1">默认地址</i>
              </li>
            </ul>
          </div>
          <div class="infoItem">
            <h4>支付方式</h4>
            <ul class="clearfix">
              <li class="clearfix">
                <span>在线支付</span>
                <span>货到付款</span>
              </li>
            </ul>
          </div>
          <div class="infoItem">
            <h4>送货清单</h4>
            <div class="gettype">
              <div class="top">配送方式</div>
              <div class="body clearfix">
                <div class="type">天天快递</div>
                <p>配送时间：预计8月10日（周三）09:00-15:00送达</p>
              </div>
            </div>
            <div class="goodslists">
              <h4>商品清单</h4>
              <table>
                <tr v-for="i in tradeGoodsInfo.detailArrayList" :key="i.skuId">
                  <td width="13%">
                    <img :src="i.imgUrl" alt="" />
                  </td>
                  <td width="50%">
                    <p>
                      {{ i.skuName }}
                    </p>
                    <span>7天无理由退货</span>
                  </td>
                  <td width="17%">
                    <h2>￥{{ i.orderPrice }}.00</h2>
                  </td>
                  <td width="10%">
                    <em>×{{ i.skuNum }}</em>
                  </td>
                  <td width="10%">
                    <em>有货</em>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="infoItem">
            <h4>买家留言</h4>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="建议留言前先于商家沟通确认"
              v-model="msg"
            ></textarea>
          </div>
          <div class="infoItem">
            <h4>发票信息：</h4>
            <div class="fapiao">普通发票（电子） 个人 明细</div>
          </div>
          <div class="infoItem">
            <h4>使用优惠/抵用</h4>
          </div>
        </div>
        <div class="totalgoods clearfix">
          <div class="totallist">
            <div class="row clearfix">
              <div class="col1">{{ totalNum }}件商品，总商品金额</div>
              <div class="col2">¥{{ tradeGoodsInfo.totalAmount }}.00</div>
            </div>
            <div class="row clearfix">
              <div class="col1">返现：</div>
              <div class="col2">0.00</div>
            </div>
            <div class="row clearfix">
              <div class="col1">运费：</div>
              <div class="col2">0.00</div>
            </div>
          </div>
        </div>
        <div class="totalMoney clearfix">
          <div class="moneyandAddress clearfix">
            <div class="row1 clearfix">
              <span>应付金额：</span>
              <i>¥{{ tradeGoodsInfo.totalAmount }}.00</i>
            </div>
            <div class="row2">
              寄送至: {{ defaultAddress.fullAddress }} 收货人：{{
                defaultAddress.consignee
              }}
              {{ defaultAddress.phoneNum }}
            </div>
          </div>
        </div>
        <div class="submit" @click="submitOrder">提交订单</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "GetOrderTradeInfo",
  data() {
    return {
      msg: "",
    };
  },
  computed: {
    ...mapState({
      addressList(state) {
        return state.User.addressList;
      },
      tradeGoodsInfo(state) {
        return state.User.tradeGoodsInfo || {};
      },
    }),
    ...mapGetters(["totalNum"]),
    defaultAddress() {
      return this.addressList.filter((item) => item.isDefault == "1")[0];
    },
  },
  mounted() {
    this.$store.dispatch("getOrderTradeInfo");
    this.$store.dispatch("getTrade");
  },
  methods: {
    changeDefault(item) {
      this.addressList.forEach((element) => {
        element.isDefault = "0";
      });
      item.isDefault = "1";
    },
    async submitOrder() {
      let data = {
        consignee: this.defaultAddress.consignee,
        consigneeTel: this.defaultAddress.phoneNum,
        deliveryAddress: this.defaultAddress.fullAddress,
        paymentWay: "ONLINE",
        orderComment: this.msg,
        orderDetailList: this.tradeGoodsInfo.detailArrayList,
      };
      try {
        let result = await this.$API.reqSubmitOrder(
          this.tradeGoodsInfo.tradeNo,
          data
        );

        this.$router.push({
          name: "SubmitOrder",
          query: { orderId: result.data },
        });
      } catch (error) {
        console.log(reeor.message);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.tradeInfo {
  padding: 10px 0 80px 0;
  position: relative;
  .tradeInfos {
    margin-top: 10px;
    border: 1px solid #ccc;
    padding: 60px 30px 10px 30px;
    .infoItem {
      margin-bottom: 25px;
      border-bottom: 1px solid #ccc;
      &:nth-of-type(3) {
        border-bottom: 0;
      }
      &:nth-of-type(5) {
        border-bottom: 0;
      }
      &:nth-of-type(6) {
        border-bottom: 0;
      }
      h4 {
        margin-bottom: 25px;
      }
      ul {
        padding: 0 10px;
        li {
          margin-bottom: 20px;
          span {
            float: left;
            padding: 7px 40px;
            border: 1px solid red;
            margin-right: 15px;
            position: relative;
            &:nth-child(1)::after {
              content: "";
              position: absolute;
              bottom: 0;
              right: 0;
              width: 13px;
              height: 13px;
              background: url("./images/choosed.png") no-repeat 0 0;
            }
            &:nth-child(2) {
              border: 1px solid #ccc;
            }
          }
          p {
            float: left;
            line-height: 32px;
            margin-right: 15px;
          }
          i {
            float: left;
            padding: 5px;
            color: #fff;
            margin-top: 2px;
            border: 1px solid #ccc;
            background-color: rgb(172, 171, 171);
          }
        }
      }
      .gettype {
        padding: 30px 20px;
        margin-bottom: 4px;
        background-color: rgb(238, 237, 237);
        .top {
          font-weight: 700;
          margin-bottom: 30px;
        }
        .body {
          .type {
            float: left;
            padding: 10px 30px;
            border: 1px solid #ccc;
            margin-right: 15px;
          }
          p {
            float: left;
            line-height: 35px;
          }
        }
      }
      .goodslists {
        padding: 30px 20px;
        background-color: #feedef;
        table {
          width: 100%;
          tr {
            height: 90px;

            td {
              img {
                width: 100px;
                height: 100px;
              }
              p {
                padding-bottom: 40px;
              }
              span {
                color: #c81623;
              }
              h2 {
                color: #c81623;
              }
            }
          }
        }
      }
      textarea {
        resize: none;
        width: 100%;
        height: 46px;
        border: 1px solid #ccc;
        margin-bottom: 10px;
      }
      .fapiao {
        padding-left: 10px;
      }
    }
  }
  .totallist {
    float: right;
    padding: 30px 0;
    .row {
      width: 220px;
      margin-bottom: 15px;
      .col1 {
        float: left;
      }
      .col2 {
        float: right;
      }
    }
  }
  .totalMoney {
    width: 100%;
    padding: 20px 10px;
    background-color: rgb(238, 237, 237);
    .moneyandAddress {
      float: right;
      text-align: right;
      .row1 {
        margin-bottom: 10px;
        i {
          font-size: 15px;
          font-weight: 700;
          color: #c81623;
        }
      }
      .row2 {
        color: #999;
      }
    }
  }
  .submit {
    width: 164px;
    height: 56px;
    line-height: 56px;
    font-size: 20px;
    background-color: red;
    text-align: center;
    color: #e1251b;
    color: #fff;
    font-weight: 700;
    position: absolute;
    bottom: 12px;
    right: 0;
  }
}
</style>