<template>
  <div class="box">
    <!-- 导航区域 -->
    <Subnav />
    <!-- 商品详情页面 -->
    <div class="container">
      <div class="goodsDetail">
        <div class="goodsDetail-top clearfix">
          <div class="goodsDetail-top-title clearfix">
            <ul>
              <li>
                <a href="#">{{ goodsDetail.categoryView.category1Name }} / </a>
              </li>
              <li>
                <a href="#">{{ goodsDetail.categoryView.category2Name }} / </a>
              </li>
              <li>
                <a href="#">{{ goodsDetail.categoryView.category3Name }} </a>
              </li>
            </ul>
          </div>
          <div class="goodsDetail-top-left">
            <div class="goodsDetail-bigImg">
              <img :src="goodsDetail.skuInfo.skuDefaultImg" alt="" />
              <div class="smallBox"></div>
              <div class="bigBox">
                <img
                  :src="goodsDetail.skuInfo.skuDefaultImg"
                  alt=""
                  class="bigbox"
                />
              </div>
            </div>
            <div class="goodsDetail-swiper">
              <div class="toLeftorRight">&lt;</div>
              <div class="swiperListBox">
                <ul>
                  <li v-for="i in goodsDetail.skuInfo.skuImageList" :key="i.id">
                    <img :src="i.imgUrl" alt="" />
                  </li>
                </ul>
              </div>
              <div class="toLeftorRight">&gt;</div>
            </div>
          </div>
          <div class="goodsDetail-top-right">
            <h2>{{ goodsDetail.skuInfo.skuName }}</h2>
            <div class="subtitle">
              推荐选择下方[移动优惠购],手机套餐齐搞定,不用换号,每月还有花费返
            </div>
            <div class="veryCommand">
              <ul>
                <li>
                  <div class="veryCommand-left">
                    <span>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格：</span>
                    <i>￥</i><strong>{{ goodsDetail.price }}</strong
                    ><em>降价通知</em>
                  </div>
                  <div class="veryCommand-right">累计评价 65545</div>
                </li>
                <li>
                  <div class="veryCommand-left">
                    <span>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销：</span>
                    <ins
                      ><span>加购价</span
                      >满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品</ins
                    >
                  </div>
                </li>
              </ul>
            </div>
            <div class="goods-list-item">
              <span>支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持:</span>
              <i>以旧换新，闲置手机回收 4G套餐超值抢 礼品购</i>
            </div>
            <div class="goods-list-item bott">
              <span>配&nbsp;送&nbsp;至:</span>
              <i>广东省 深圳市 宝安区</i>
            </div>
            <ul class="attrs">
              <li v-for="i in goodsDetail.spuSaleAttrList" :key="i.id">
                <span>{{ i.saleAttrName }}:</span>
                <ol ref="OL">
                  <li
                    v-for="i2 in i.spuSaleAttrValueList"
                    :key="i2.id"
                    :class="{ active: i2.isChecked == 1 }"
                    @click="changeColor(i2, i.spuSaleAttrValueList)"
                  >
                    {{ i2.saleAttrValueName }}
                  </li>
                </ol>
              </li>
            </ul>
            <div class="addNumCart">
              <div class="cartNum">
                <input type="text" v-model="count" @change="upadateCount" />
                <i @click="addOne">+</i>
                <i @click="minusOne">-</i>
              </div>
              <div class="cart" @click="goAddCartSuccess">加入购物车</div>
            </div>
          </div>
        </div>
        <div class="goodsDetail-contain clearfix">
          <div class="goodsDetail-contain-left">
            <div class="goodsDetail-contain-left-title">
              <span>相关分类</span>
              <span>推荐品牌</span>
            </div>
            <ul class="goodsDetail-contain-left-attrslist">
              <li>手机</li>
              <li>手机壳</li>
              <li>内存卡</li>
              <li>Iphone配件</li>
              <li>贴膜</li>
              <li>手机耳机</li>
              <li>移动电源</li>
              <li>平板电脑</li>
            </ul>
            <ul class="goodsDetail-contain-left-goodslist">
              <li>
                <img src="./images/part01.png" alt="" />
                <p>Apple苹果iPhone 6s (A1699)</p>
                <h2>¥ 6088.00</h2>
                <div class="add">加入购物车</div>
              </li>
              <li>
                <img src="./images/part02.png" alt="" />
                <p>Apple苹果iPhone 6s (A1699)</p>
                <h2>¥ 6088.00</h2>
                <div class="add">加入购物车</div>
              </li>
              <li>
                <img src="./images/part03.png" alt="" />
                <p>Apple苹果iPhone 6s (A1699)</p>
                <h2>¥ 6088.00</h2>
                <div class="add">加入购物车</div>
              </li>
              <li>
                <img src="./images/part01.png" alt="" />
                <p>Apple苹果iPhone 6s (A1699)</p>
                <h2>¥ 6088.00</h2>
                <div class="add">加入购物车</div>
              </li>
              <li>
                <img src="./images/part02.png" alt="" />
                <p>Apple苹果iPhone 6s (A1699)</p>
                <h2>¥ 6088.00</h2>
                <div class="add">加入购物车</div>
              </li>
              <li>
                <img src="./images/part03.png" alt="" />
                <p>Apple苹果iPhone 6s (A1699)</p>
                <h2>¥ 6088.00</h2>
                <div class="add">加入购物车</div>
              </li>
            </ul>
          </div>
          <div class="goodsDetail-contain-right">
            <div class="goodsDetail-contain-right-top">
              <div class="title">选择搭配</div>
              <div class="body clearfix">
                <div class="goods">
                  <div class="item">
                    <img src="./images/l-m01.png" alt="" />
                    <h2>￥5299</h2>
                  </div>
                </div>
                <span>+</span>
                <ul>
                  <li>
                    <img src="./images/dp01.png" alt="" />
                    <p>Feless费勒斯VR</p>
                    <input type="checkbox" name="" id="" /> 39
                  </li>
                  <li>
                    <img src="./images/dp02.png" alt="" />
                    <p>Feless费勒斯VR</p>
                    <input type="checkbox" name="" id="" /> 39
                  </li>
                  <li>
                    <img src="./images/dp03.png" alt="" />
                    <p>Feless费勒斯VR</p>
                    <input type="checkbox" name="" id="" /> 39
                  </li>
                  <li>
                    <img src="./images/dp04.png" alt="" />
                    <p>Feless费勒斯VR</p>
                    <input type="checkbox" name="" id="" /> 39
                  </li>
                  <li>
                    <h3>已选购0件商品</h3>
                    <h4>套餐价</h4>
                    <h2>￥5299</h2>
                    <div class="add">加入购物车</div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="goodsDetail-contain-right-body">
              <div class="header">
                <ul>
                  <li>商品介绍</li>
                  <li>规格与包装</li>
                  <li>售后保障</li>
                  <li>商品评价</li>
                  <li>手机社区</li>
                </ul>
              </div>
              <div class="body">
                <ul>
                  <li>分辨率：1920*1080(FHD)</li>
                  <li>后置摄像头：1200万像素</li>
                  <li>前置摄像头：500万像素</li>
                  <li>核 数：其他</li>
                  <li>频 率：以官网信息为准</li>
                  <li>品牌： Apple</li>
                  <li>商品名称：APPLEiPhone 6s Plus</li>
                  <li>商品编号：1861098</li>
                  <li>商品毛重：0.51kg</li>
                  <li>商品产地：中国大陆</li>
                  <li>热点：指纹识别，Apple Pay，金属机身，拍照神器</li>
                  <li>系统：苹果（IOS）</li>
                  <li>像素：1000-1600万</li>
                  <li>机身内存：64GB</li>
                </ul>
                <ol>
                  <li>
                    <img src="./images/intro01.png" alt="" />
                  </li>
                  <li>
                    <img src="./images/intro02.png" alt="" />
                  </li>
                  <li>
                    <img src="./images/intro03.png" alt="" />
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Detail",
  data() {
    return {
      count: 1,
    };
  },
  computed: {
    ...mapState({
      goodsDetail(state) {
        return state.Detail.goodsDetail || {};
      },
    }),
  },
  mounted() {
    this.$store.dispatch("getGoodsDetail", this.$route.query);
  },
  methods: {
    addOne() {
      this.count++;
    },
    minusOne() {
      if (this.count >= 2) {
        this.count--;
      } else {
        this.count = 1;
      }
    },
    changeColor(item, list) {
      list.forEach((element) => {
        element.isChecked = 0;
      });
      item.isChecked = 1;
    },
    upadateCount(e) {
      if (isNaN(e.target.value) || e.target.value <= 0) {
        this.count = 1;
      } else {
        this.count = Math.floor(e.target.value);
      }
    },
    goAddCartSuccess() {
      let arr = [];
      this.goodsDetail.spuSaleAttrList.forEach((element) => {
        const fil = element.spuSaleAttrValueList.filter((i) => {
          return i.isChecked == 1;
        });
        if (fil[0]) {
          arr.push(fil[0]);
        } else {
          return;
        }
      });
      if (arr.length < this.goodsDetail.spuSaleAttrList.length)
        return alert("请选择您想要的商品属性！");
      try {
        this.$store.dispatch("addCart", {
          skuID: this.goodsDetail.skuInfo.id,
          skuNum: this.count,
        });
        sessionStorage.setItem("skuInfo", JSON.stringify(this.goodsDetail));
        console.log("success！");
        this.$router.push({
          name: "AddCartSuccess",
          query: { skuNum: this.count },
        });
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.goodsDetail {
  margin: 20px 0;
  .goodsDetail-top {
    .goodsDetail-top-title {
      margin: 10px 0;
      ul {
        li {
          float: left;
        }
      }
    }
    .goodsDetail-top-left {
      float: left;
      width: 400px;
      margin-right: 100px;
      .goodsDetail-bigImg {
        width: 400px;
        height: 400px;
        border: 1px solid #ccc;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        .smallBox {
          width: 200px;
          height: 200px;
          border: 1px solid #ccc;
          display: none;
          position: absolute;
          left: 0;
          top: 0;
          background-color: #fff;
          opacity: 0.5;
        }
        .bigBox {
          width: 400px;
          height: 400px;
          border: 1px solid #ccc;
          position: absolute;
          top: 0;
          left: 420px;
          display: none;
          overflow: hidden;
          img {
            width: 200%;
            height: 200%;
            position: absolute;
          }
        }
      }
      .goodsDetail-swiper {
        margin-top: 5px;
        .toLeftorRight {
          float: left;
          width: 12px;
          height: 56px;
          background-color: rgb(231, 231, 231);
          line-height: 56px;
          text-align: center;
        }
        .swiperListBox {
          float: left;
          width: 376px;
          overflow: hidden;
          ul {
            padding: 0 5px;
            width: 3000px;
            li {
              float: left;
              width: 56px;
              height: 56px;
              border: 1px solid #ccc;
              margin-right: 20px;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
    .goodsDetail-top-right {
      float: left;
      width: 700px;
      h2 {
        margin: 10px 0;
      }
      .subtitle {
        color: red;
      }
      .veryCommand {
        width: 700px;
        padding: 35px 10px;
        background-color: #fee9eb;
        margin: 15px 0;
        ul {
          li {
            &:nth-child(2) {
              span {
                float: left;
                margin-right: 10px;
              }
            }
            height: 33px;
            line-height: 33px;

            margin-bottom: 10px;
            .veryCommand-left {
              float: left;
              i {
                color: red;
                font-weight: 700;
                font-size: 16px;
              }
              strong {
                font-size: 26px;
                font-weight: 700;
                color: red;
                margin-right: 10px;
              }
              em {
                color: red;
              }

              ins {
                text-decoration: none;
                color: #999;
                display: inline-block;
                width: 500px;
                float: left;
                span {
                  width: 42px;
                  height: 22px;
                  background-color: red;
                  line-height: 22px;
                  text-align: center;
                  color: #fff;
                  margin-top: 5px;
                  margin-right: 5px;
                }
              }
            }
            .veryCommand-right {
              float: right;
            }
          }
        }
      }
      .goods-list-item {
        padding: 0 10px;
        margin-bottom: 20px;
        span {
          margin-right: 18px;
        }
        i {
          color: #999;
        }
      }
      .bott {
        border-bottom: 1px solid #ccc;
        padding-bottom: 10px;
      }
      .attrs {
        padding: 0 10px;
        li {
          height: 30px;
          line-height: 30px;
          margin-bottom: 15px;
          span {
            float: left;
            margin-right: 16px;
          }
          ol {
            float: left;
            li {
              float: left;
              padding: 0 15px;
              height: 30px;
              border: 1px solid #ccc;
              text-align: center;
              margin-right: 5px;
              // &:nth-child(1) {
              //   color: red;
              // }
            }
            .active {
              color: red;
            }
          }
        }
      }
      .addNumCart {
        position: relative;
        .cartNum {
          margin-left: 10px;
          position: relative;
          input {
            display: inline-block;
            width: 38px;
            height: 38px;
            line-height: 38px;
            text-align: center;
            border: 1px solid #ccc;
            border-right: none;
            outline: none;
          }
          i {
            width: 19px;
            height: 19px;
            line-height: 19px;
            text-align: center;
            display: inline-block;
            border: 1px solid #ccc;
            background-color: #f1f1f1;
            position: absolute;
            top: 0;
            left: 38px;
            &:nth-of-type(2) {
              top: 19px;
              left: 38px;
              border-top: none;
            }
          }
        }
        .cart {
          width: 130px;
          height: 38px;
          line-height: 38px;
          text-align: center;
          font-size: 16px;
          color: #fff;
          background-color: red;
          position: absolute;
          top: 0;
          left: 75px;
        }
      }
    }
  }
  .goodsDetail-contain {
    margin: 20px 0;
    .goodsDetail-contain-left {
      float: left;
      width: 210px;
      border: 1px solid #ccc;
      margin-right: 10px;
      .goodsDetail-contain-left-title {
        span {
          display: inline-block;
          float: left;
          width: 50%;
          text-align: center;
          height: 40px;
          line-height: 40px;
        }
      }
      .goodsDetail-contain-left-attrslist {
        padding: 10px;
        li {
          float: left;
          width: 50%;
          text-align: center;
          line-height: 30px;
          border-bottom: 1px dotted #ccc;
        }
      }
      .goodsDetail-contain-left-goodslist {
        li {
          text-align: center;
          margin: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid #ccc;
          img {
            width: 152px;
            height: 104px;
          }
          p {
            text-align: left;
          }
          h2 {
            text-align: left;
            font-weight: normal;
            color: #c81623;
            margin: 5px 0;
          }
          .add {
            display: inline-block;
            width: 90px;
            height: 24px;
            border: 1px solid #ccc;
            line-height: 24px;
            text-align: center;
          }
        }
      }
    }
    .goodsDetail-contain-right {
      float: left;
      width: 978px;
      .goodsDetail-contain-right-top {
        .title {
          width: 100%;
          height: 27px;
          line-height: 27px;
          padding-left: 10px;
          font-weight: 700;
          border: 1px solid #ccc;
          border-bottom: none;
          background-color: rgb(240, 239, 239);
        }
        .body {
          width: 100%;
          height: 190px;
          border: 1px solid #ccc;
          .goods {
            float: left;
            padding: 20px;
            .item {
              img {
                width: 87px;
                height: 128px;
              }
              h2 {
                color: #c81623;
                padding-left: 10px;
              }
            }
          }
          span {
            float: left;
            line-height: 180px;
            font-size: 18px;
          }
          ul {
            li {
              width: 167px;
              text-align: center;
              float: left;
              padding: 20px;
              padding-bottom: 0;
              img {
                width: 120px;
                height: 130px;
              }
              input {
                vertical-align: middle;
              }
              &:nth-child(5) {
                height: 175px;
                margin: 10px 0;
                border-left: 1px solid #ccc;
                text-align: left;
                h3 {
                  font-weight: normal;
                  margin-bottom: 10px;
                }
                h4 {
                  margin-bottom: 10px;
                }
                h2 {
                  font-weight: normal;
                  color: #c81623;
                  margin-bottom: 10px;
                }
                .add {
                  width: 130px;
                  height: 38px;
                  line-height: 38px;
                  text-align: center;
                  font-size: 16px;
                  color: #fff;
                  background-color: red;
                }
              }
            }
          }
        }
      }
      .goodsDetail-contain-right-body {
        margin: 15px 0;
        width: 980px;
        .header {
          width: 100%;
          height: 42px;
          background-color: rgb(241, 241, 241);
          ul {
            li {
              float: left;
              padding: 0 15px;
              height: 42px;
              line-height: 42px;
              text-align: center;
              border: 1px solid #ccc;
              border-right: 0;
              background-color: rgb(250, 249, 249);
              &:nth-child(5) {
                border-right: 1px solid #ccc;
              }
              &:nth-child(1) {
                background-color: #c81623;
                color: #fff;
              }
            }
          }
        }
        .body {
          ul {
            padding: 10px;
            li {
              padding: 5px 0;
            }
          }
          ol {
            li {
              width: 980px;
              img {
                vertical-align: middle;
              }
            }
          }
        }
      }
    }
  }
}
</style>