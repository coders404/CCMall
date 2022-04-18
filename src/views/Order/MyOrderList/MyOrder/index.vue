<template>
  <div class="box">
    <!-- 右侧订单信息 -->
    <div class="myOrder-right">
      <div class="myOrderDetail">
        <div class="myOrder-title">我的订单</div>
        <div class="myOrder-goods">
          <ul>
            <li>商品</li>
            <li>订单详情</li>
            <li>收货人</li>
            <li>金额</li>
            <li>状态</li>
            <li>操作</li>
          </ul>
        </div>
        <!-- 订单详情区域 -->
        <div class="myOrder-table">
          <table v-for="i in orderList" :key="i.id">
            <thead>
              <tr>
                <th colspan="5">
                  <span>{{ i.createTime }}　订单编号：{{ i.outTradeNo }}</span>
                  <i>
                    <img src="./images/delete.png" alt="" />
                  </i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(i2, index) in i.orderDetailList" :key="i2.id">
                <td width="60%">
                  <div class="goods-img">
                    <img :src="i2.imgUrl" alt="" />
                  </div>
                  <p>
                    {{ i2.skuName }}
                  </p>
                  <span>×{{ i2.skuNum }}</span>
                  <i>售后申请</i>
                </td>
                <td
                  width="8%"
                  :rowspan="i.orderDetailList.length"
                  v-if="index == 0"
                >
                  {{ i.consignee }}
                </td>
                <td
                  width="13%"
                  :rowspan="i.orderDetailList.length"
                  v-if="index == 0"
                >
                  <div class="totalMoney">
                    总支付金额:￥{{ i.totalAmount }}.00
                  </div>
                  <div class="payType">在线支付</div>
                </td>
                <td
                  width="8%"
                  :rowspan="i.orderDetailList.length"
                  v-if="index == 0"
                >
                  {{ i.orderStatusName }}
                </td>
                <td
                  width="13%"
                  :rowspan="i.orderDetailList.length"
                  v-if="index == 0"
                >
                  评价/晒单
                </td>
              </tr>
              <!-- <tr>
                    <td width="60%">
                      <div class="goods-img">
                        <img src="./images/goods.png" alt="" />
                      </div>
                      <p>
                        包邮 正品玛姬儿压缩面膜无纺布纸膜100粒 送泡瓶面膜刷喷瓶
                        新款
                      </p>
                      <span>×1</span>
                      <i>售后申请</i>
                    </td>
                  </tr> -->
            </tbody>
          </table>
        </div>
        <!-- 分页区域 -->
        <Pagination
          :pageNo="page"
          :pageSize="limit"
          :total="total"
          :continues="5"
          @getNum="getNum"
        />
        <!-- 猜你喜欢区域 -->
        <div class="guessLike">
          <h3>猜你喜欢</h3>
          <div class="likeDetail">
            <ul>
              <li>
                <a href="#">
                  <img src="./images/itemlike01.png" alt="" />
                  <p>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</p>
                  <h2>¥ 3699.00</h2>
                  <span>已有6人评价</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./images/itemlike02.png" alt="" />
                  <p>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</p>
                  <h2>¥ 3699.00</h2>
                  <span>已有6人评价</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./images/itemlike03.png" alt="" />
                  <p>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</p>
                  <h2>¥ 3699.00</h2>
                  <span>已有6人评价</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./images/itemlike04.png" alt="" />
                  <p>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</p>
                  <h2>¥ 3699.00</h2>
                  <span>已有6人评价</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyOrder",
  data() {
    return {
      page: 1,
      limit: 2,
      total: 99,
      orderList: [],
    };
  },
  methods: {
    async getMyOrderList() {
      try {
        const result = await this.$API.reqMyOrderList(this.page, this.limit);
        console.log(result);
        this.total = result.data.total;
        this.orderList = result.data.records;
      } catch (error) {
        console.log(error.message);
      }
    },
    getNum(page) {
      this.page = page;
      this.getMyOrderList();
    },
  },
  mounted() {
    this.getMyOrderList();
  },
};
</script>

<style>
</style>