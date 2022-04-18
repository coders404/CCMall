<template>
  <div class="box">
    <!-- 支付成功区域 -->
    <div class="container">
      <div class="paysuccess">
        <div class="paysuccess-contain clearfix">
          <img src="./images/right.png" />
          <h3>恭喜您！支付成功啦！</h3>
        </div>
        <div class="paysuccess-btn">
          <router-link to="/myorderlist">查看订单</router-link>
          <p @click="goHome">继续购物</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaySuccess",
  methods: {
    goHome() {
      this.$router.push({ name: "Home" });
    },
    // goMyOrderList() {
    //   this.$router.push({ name: "MyOrderList" });
    // },
  },
};
</script>

<style lang="less" scoped>
.paysuccess {
  width: 1200;
  height: 212px;
  border: 1px solid #ccc;
  margin: 20px 0;
  .paysuccess-contain {
    margin-left: 435px;
    margin-top: 50px;
    img {
      width: 48px;
      height: 48px;
      float: left;
    }
    h3 {
      font-size: 20px;
      float: left;
      height: 48px;
      line-height: 48px;
      margin-left: 10px;
    }
  }
  .paysuccess-btn {
    height: 32px;
    margin-left: 380px;
    p {
      width: 114px;
      height: 32px;
      background-color: red;
      color: #fff;
      line-height: 32px;
      text-align: center;
      float: left;
      margin: 30px -30px 10px 60px;
      font-size: 18px;
      &:nth-child(2) {
        background-color: rgb(235, 232, 232);
        color: black;
      }
    }
    a {
      width: 114px;
      height: 32px;
      background-color: red;
      color: #fff;
      line-height: 32px;
      text-align: center;
      float: left;
      margin: 30px -30px 10px 60px;
      font-size: 18px;
      display: inline-block;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>