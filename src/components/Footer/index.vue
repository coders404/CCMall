<template>
  <div class="box">
    <!-- 帮助中心 -->
    <div class="help">
      <div class="container">
        <dl>
          <dt>购物指南</dt>
          <dd>购物流程</dd>
          <dd>会员介绍</dd>
          <dd>生活旅游/团购</dd>
          <dd>常见问题</dd>
          <dd>购物指南</dd>
        </dl>
        <dl>
          <dt>配送方式</dt>
          <dd>上门自提</dd>
          <dd>211限时达</dd>
          <dd>配送服务查询</dd>
          <dd>配送费收取标准</dd>
          <dd>海外配送</dd>
        </dl>
        <dl>
          <dt>支付方式</dt>
          <dd>货到付款</dd>
          <dd>在线支付</dd>
          <dd>分期付款</dd>
          <dd>邮局付款</dd>
          <dd>公司转账</dd>
        </dl>
        <dl>
          <dt>售后服务</dt>
          <dd>售后政策</dd>
          <dd>价格保护</dd>
          <dd>退款说明</dd>
          <dd>返修/退换货</dd>
          <dd>取消订单</dd>
        </dl>
        <dl>
          <dt>特色服务</dt>
          <dd>夺宝岛</dd>
          <dd>DIY装机</dd>
          <dd>延保服务</dd>
          <dd>LiLiE卡</dd>
          <dd>LiLi通信</dd>
        </dl>
        <dl>
          <dt>帮助中心</dt>
          <dd>联系客服</dd>
          <dd>微信</dd>
          <dd>QQ</dd>
          <dd>钉钉</dd>
          <dd>热线</dd>
        </dl>
      </div>
    </div>
    <!-- footer -->
    <div class="footer">
      <div class="container">
        <ul class="clearfix">
          <li>
            <a href="#">关于我们</a>
          </li>
          <li>
            <a href="#">联系我们</a>
          </li>
          <li>
            <a href="#">加入我们</a>
          </li>
          <li>
            <a href="#">商业合作</a>
          </li>
          <li>
            <a href="#">关于我们</a>
          </li>
          <li>
            <a href="#">联系我们</a>
          </li>
          <li>
            <a href="#">加入我们</a>
          </li>
          <li>
            <a href="#">商业合作</a>
          </li>
          <li>
            <a href="#">友情链接</a>
          </li>
          <li>
            <a href="#">商业合作</a>
          </li>
        </ul>
        <p>地址：北京市顺义区宏斗泰科技8层</p>
        <span>京ICP备190064390号</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less">
// 帮助中心
.help {
  height: 150px;
  background-color: rgb(241, 239, 239);
  .container {
    dl {
      float: left;
      padding: 20px 67px;
      dt {
        font-size: 14px;
        font-weight: 700;
      }
      dd {
        font-size: 12px;
      }
    }
  }
}
// footer
.footer {
  height: 116px;
  padding: 20px;
  background-color: rgb(241, 239, 239);
  height: 116px;
  .container {
    ul {
      border-top: 1px solid rgb(230, 230, 230);
      padding: 10px 255px;
      li {
        float: left;
        a {
          padding: 0 10px;
          border-right: 1px solid #ccc;
        }
        &:nth-child(10) {
          a {
            border-right: none;
          }
        }
      }
    }
    p {
      padding: 0 488px;
      margin-bottom: 8px;
    }
    span {
      padding: 10px 542px;
    }
  }
}
</style>