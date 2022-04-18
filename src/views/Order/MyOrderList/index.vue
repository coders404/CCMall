<template>
  <div class="box">
    <!-- 订单信息区域 -->
    <div class="container">
      <div class="myOrder clearfix">
        <!-- 左侧订单总览 -->
        <div class="myOrder-left">
          <div class="myOrder-left-item">
            <h4><i>•</i>订单中心</h4>
            <ul>
              <li @click="goMyOrder">我的订单</li>
              <li @click="goGroupOrder">团购订单</li>
              <li>本地生活订单</li>
              <li>我的预售</li>
              <li>评价晒单</li>
              <li>取消订单记录</li>
            </ul>
          </div>
          <div class="myOrder-left-item">
            <h4><i>•</i>关注中心</h4>
            <ul>
              <li>关注的商品</li>
              <li>关注的店铺</li>
              <li>关注的专辑</li>
              <li>关注的品牌</li>
              <li>关注的活动</li>
              <li>浏览历史</li>
            </ul>
          </div>
          <div class="myOrder-left-item">
            <h4><i>•</i>特色业务</h4>
            <ul>
              <li>我的营业厅</li>
              <li>LiLi通信</li>
              <li>定期送</li>
              <li>LiLi下单</li>
              <li>我的回收站</li>
              <li>节能补贴</li>
              <li>医药服务</li>
              <li>流量加油站</li>
              <li>黄金托管</li>
            </ul>
          </div>
          <div class="myOrder-left-item">
            <h4><i>•</i>客户服务</h4>
            <ul>
              <li>返修退换货</li>
              <li>价格保护</li>
              <li>意见建议</li>
              <li>购买咨询</li>
              <li>交易纠纷</li>
              <li>我的发票</li>
            </ul>
          </div>
          <div class="myOrder-left-item">
            <h4><i>•</i>设置</h4>
            <ul>
              <li>个人信息</li>
              <li>收货地址</li>
            </ul>
          </div>
        </div>

        <!-- 右侧订单信息 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyOrderList",
  methods: {
    goMyOrder() {
      this.$router.push({ name: "MyOrder" });
    },
    goGroupOrder() {
      this.$router.push({ name: "GroupOrder" });
    },
  },
};
</script>

<style lang="less">
.myOrder {
  width: 100%;
  margin: 20px 0 10px 0;
  .myOrder-left {
    float: left;
    width: 200px;
    margin-right: 20px;
    margin-bottom: 10px;
    .myOrder-left-item {
      margin-bottom: 15px;
      h4 {
        padding: 5px;
        width: 197px;
        height: 38px;
        i {
          color: rgb(115, 185, 9);
          margin-right: 5px;
        }
      }
      ul {
        li {
          width: 197px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          border-bottom: 1px solid rgb(233, 233, 233);
        }
      }
    }
  }
  .myOrder-right {
    float: left;
    .myOrderDetail {
      width: 970px;
      .myOrder-title {
        width: 100%;
        height: 44px;
        border: 1px solid #ccc;
        background-color: rgb(241, 239, 239);
        font-size: 15px;
        font-weight: 700;
        line-height: 44px;
        padding-left: 8px;
        margin-bottom: 20px;
      }
      .myOrder-goods {
        width: 100%;
        height: 33px;
        border: 1px solid #ccc;
        background-color: rgb(241, 239, 239);
        margin-bottom: 15px;
        ul {
          padding: 0 8px;
          li {
            float: left;
            line-height: 33px;
            font-weight: 700;
            &:nth-child(1) {
              margin-right: 230px;
            }
            &:nth-child(2) {
              margin-right: 290px;
            }
            &:nth-child(3) {
              margin-right: 70px;
            }
            &:nth-child(4) {
              margin-right: 80px;
            }
            &:nth-child(5) {
              margin-right: 70px;
            }
          }
        }
      }
      .myOrder-table {
        table {
          border: 1px solid #ccc;
          border-collapse: collapse;
          width: 100%;
          margin-bottom: 15px;
          thead {
            tr {
              th {
                height: 33px;
                background-color: rgb(241, 239, 239);
                line-height: 33px;
                padding: 0 5px;
                span {
                  float: left;
                }
                i {
                  float: right;
                  img {
                    vertical-align: middle;
                  }
                }
              }
            }
          }
          tbody {
            tr {
              height: 95px;
              td {
                border: 1px solid #ccc;
                padding: 0 5px;
                .goods-img {
                  width: 82px;
                  height: 82px;
                  float: left;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
                p {
                  float: left;
                  color: red;
                  width: 250px;
                  margin: 0 20px;
                }
                span {
                  float: left;
                  margin: 0 20px;
                }
                i {
                  float: left;
                  margin: 0 20px;
                }
                .totalMoney,
                .payType {
                  text-align: center;
                }
              }
            }
          }
        }
      }
      .guessLike {
        width: 100%;
        height: 280px;
        border: 1px solid #ccc;
        h3 {
          height: 45px;
          line-height: 45px;
          padding-left: 15px;
          background-color: rgb(241, 239, 239);
          border-bottom: 1px solid #ccc;
        }
        .likeDetail {
          padding: 10px 20px;
          ul {
            li {
              float: left;
              width: 25%;
              img {
                width: 167px;
                height: 123px;
              }
              p {
                width: 195px;
                padding-left: 15px;
              }
              h2 {
                color: red;
                margin-bottom: 20px;
                padding-left: 15px;
              }
              span {
                padding-left: 15px;
              }
            }
          }
        }
      }
    }
  }
}
</style>