<template>
  <div class="box">
    <!-- 支付区域 -->
    <div class="container">
      <div class="pay">
        <div class="pay-header clearfix">
          <i></i>
          <h3>订单提交成功，请您及时付款，以便尽快为您发货~~</h3>
          <div class="pay-row2">
            <span
              >请您在提交订单<em>4小时</em>之内完成支付，超时订单会自动取消。订单号：{{
                orderId
              }}</span
            >
            <div class="paymoney">
              <strong>应付金额：</strong>
              <strong>￥{{ tradeGoodsInfo.totalAmount }}</strong>
            </div>
          </div>
        </div>
        <div class="pay-discrib">
          <div class="pay-discrib-row">
            <h3>重要说明</h3>
            <ol>
              <li>尚品汇商城支付平台目前支持<span>支付宝</span>支付方式。</li>
              <li>其它支付渠道正在调试中，敬请期待。</li>
              <li>为了保证您的购物支付流程顺利完成，请保存以下支付宝信息。</li>
            </ol>
          </div>
          <div class="pay-discrib-row">
            <h3>支付宝账户信息：（很重要，请保存！！！）</h3>
            <ul>
              <li>支付帐号：11111111</li>
              <li>密码：111111</li>
              <li>支付密码：111111</li>
            </ul>
          </div>
        </div>
        <div class="paytype">
          <div class="paytype-row clearfix">
            <h4>支付平台</h4>
            <ul>
              <li>
                <img src="./images/pay2.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay3.jpg" alt="" />
              </li>
            </ul>
          </div>
          <div class="paytype-row clearfix">
            <h4>支付网银</h4>
            <ul>
              <li>
                <img src="./images/pay10.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay11.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay12.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay13.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay14.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay15.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay16.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay17.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay18.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay19.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay20.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay21.jpg" alt="" />
              </li>
              <li>
                <img src="./images/pay22.jpg" alt="" />
              </li>
            </ul>
          </div>
          <div class="paynow" @click="open">立即支付</div>
          <div class="paytype-row2 clearfix">
            <h4>其他支付方式</h4>
            <ul>
              <li>微信支付</li>
              <li>中国银联</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import QRCode from "qrcode";
export default {
  name: "SubmitOrder",
  data() {
    return {
      payInfo: {},
      orderId: this.$route.query.orderId,
      timer: null,
      code: "",
    };
  },
  computed: {
    ...mapState({
      tradeGoodsInfo(state) {
        return state.User.tradeGoodsInfo || {};
      },
    }),
  },
  methods: {
    async goPay() {
      try {
        let result = await this.$API.reqOrderPayInfo(this.$route.query.orderId);
        console.log(result, "ppp");
        this.payInfo = result.data;
      } catch (error) {
        console.log(error.message);
      }
    },
    async open() {
      let url = await QRCode.toDataURL(this.payInfo.codeUrl);
      this.$alert(`<img src=${url}></img>`, "请微信支付", {
        dangerouslyUseHTMLString: true,
        center: true,
        showClose: false,
        showCancelButton: true,
        cancelButtonText: "支付遇到问题",
        confirmButtonText: "已支付成功",
        beforeClose: (action, instance, done) => {
          if (action == "cancel") {
            alert("请联系管理员解决支付问题！");
            clearInterval(this.timer);
            this.timer = null;
            done();
          }
          if (action == "confirm") {
            console.log(this.code);
            if (this.code == "205") {
              clearInterval(this.timer);
              this.timer = null;
              alert("支付成功！");
              this.$router.push({ name: "PaySuccess" });
              done();
            } else {
              alert("订单尚未支付，请支付！");
            }
          }
        },
      });
      if (!this.timer) {
        this.timer = setInterval(async () => {
          let res = await this.$API.reqPayResult(this.orderId);
          console.log(res, "000");
          if (res.code == "205") {
            clearInterval(this.timer);

            this.timer = null;
            this.$msgbox.close();
            this.code = res.code;
            this.$router.push({ name: "PaySuccess" });
          }
        }, 1000);
      }
    },
  },
  mounted() {
    this.goPay();
  },
};
</script>

<style lang="less" scoped>
// 支付区域
.pay {
  position: relative;
  .pay-header {
    i {
      display: inline-block;
      width: 30px;
      height: 30px;
      background: url(./images/icon.png) no-repeat 0 0;
      float: left;
      margin-right: 10px;
    }
    h3 {
      line-height: 30px;
    }
    .pay-row2 {
      float: left;
      width: 1200px;
      span {
        float: left;
        margin: 15px 0 15px 40px;
        em {
          color: red;
        }
      }
      .paymoney {
        float: right;
        margin: 10px 0;
        strong {
          float: left;
          font-size: 17px;
          &:nth-child(2) {
            font-size: 18px;
            color: red;
          }
        }
      }
    }
  }
  .pay-discrib {
    width: 100%;
    height: 240px;
    border: 2px solid red;
    margin-bottom: 10px;
    padding: 10px 20px;
    .pay-discrib-row {
      margin-bottom: 20px;
      font-size: 14px;
      h3 {
        color: red;
        margin-bottom: 8px;
      }
      ul {
        li {
          margin-left: 20px;
          // 设置li的圆点
          list-style-type: disc;
          padding: 2px 0;
        }
      }
      ol {
        li {
          margin-left: 20px;
          // 设置li的序号
          list-style-type: decimal;
          padding: 2px 0;
        }
      }
    }
  }
  .paytype {
    width: 1200px;
    height: 585px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    padding: 20px;
    .paytype-row {
      padding: 20px 0;
      border-bottom: 1px solid #ccc;
      ul {
        padding: 20px;
        li {
          position: relative;
          float: left;
          margin: 2px;
          width: 166px;
          height: 46px;
          border: 1px solid #ccc;
          img {
            //    display: table-cell;
            //    vertical-align: middle;
            //    text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }
  }
  .paynow {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    background-color: red;
    width: 150px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    margin-bottom: 10px;
    position: absolute;
    left: 50%;
    bottom: 137px;
    transform: translateX(-50%);
  }
  .paytype-row2 {
    margin-top: 90px;
    h4 {
      margin-bottom: 20px;
    }
    ul {
      padding: 10px 20px;
      li {
        float: left;
        margin: 2px;
      }
    }
  }
}
</style>