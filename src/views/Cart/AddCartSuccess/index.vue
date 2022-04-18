<template>
  <div class="box">
    <!-- 加入购物车区域 -->

    <div class="add-cart">
      <div class="container">
        <div class="add-cart-success"><i>√</i>商品已成功加入购物车！</div>
        <div class="add-cart-detail clearfix">
          <img :src="goodsDetail.skuInfo.skuDefaultImg" alt="" />
          <div class="goodsintro">
            <h3>
              {{ goodsDetail.skuInfo.skuName }}
            </h3>
            <p>
              <span v-for="i in goodsDetail.spuSaleAttrList" :key="i.id"
                >{{ i.saleAttrName }}：{{
                  i.spuSaleAttrValueList.filter(
                    (item) => item.isChecked == 1
                  )[0].saleAttrValueName || ""
                }}
              </span>
              数量：{{ $route.query.skuNum }}
            </p>
          </div>
          <div class="addChoose">
            <span @click="goDeatail">查看商品详情</span>
            <span @click="goShopCart">去购物车结算 &gt;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddCartSuccess",
  computed: {
    goodsDetail() {
      return JSON.parse(sessionStorage.getItem("skuInfo"));
    },
  },
  methods: {
    goDeatail() {
      this.$router.push({
        name: "Detail",
        query: {
          skuID: this.goodsDetail.skuInfo.id,
        },
      });
    },
    goShopCart() {
      this.$router.push({ name: "ShopCart" });
    },
  },
};
</script>

<style lang="less" scoped>
.add-cart {
  width: 100%;
  background-color: rgb(245, 245, 245);
  .container {
    padding: 20px 0;
    .add-cart-success {
      font-size: 18px;
      margin-bottom: 25px;
      color: #6aaf04;
      i {
        display: inline-block;
        width: 24px;
        height: 24px;
        border: 2px solid #6aaf04;
        line-height: 24px;
        text-align: center;
        border-radius: 50%;
        float: left;
        margin-right: 10px;
        font-weight: 700;
      }
    }
    .add-cart-detail {
      img {
        float: left;
        width: 60px;
        height: 60px;
        margin-right: 10px;
      }
      .goodsintro {
        padding: 5px 0;
        float: left;
        h3 {
          font-weight: normal;
          margin-bottom: 5px;
        }
        p {
          color: rgb(192, 191, 191);
        }
      }
      .addChoose {
        float: right;
        span {
          padding: 8px 35px;
          font-size: 16px;
          text-align: center;
          border: 1px solid #ccc;
          background-color: rgb(235, 233, 233);
          &:nth-child(2) {
            color: #fff;
            background-color: #e1251b;
          }
        }
      }
    }
  }
}
</style>