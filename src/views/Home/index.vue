<template>
  <div class="box">
    <!-- 下拉导航区域 -->
    <Subnav />
    <!-- 轮播图及精灵图区域 -->
        <div class="swiperarticle">
            <div class="container">
                <!-- 轮播图区域 -->
                <!-- <div class="swiper">
                    <img src="./images/product1.png" alt="">
                </div> -->
                <el-carousel trigger="click" height="461px">
      <el-carousel-item v-for="item in pics" :key="item.id">
        <img :src="item.src">
      </el-carousel-item>
    </el-carousel>
                <!-- 右侧文章区域 -->
                <div class="artical">
                    <div class="artical-top">
                        <h3>CC快报</h3>
                        <span>更多 &gt;</span>
                    </div>
                    <ul class="artical-contain">
                        <li>
                            <a href="#">
                                <h4>[特惠]</h4>
                                <p>备战暑假季 全民半价购数码</p>
                            </a>
                        </li>
                        <li><a href="#">
                                <h4>[特惠]</h4>
                                <p>备战暑假季 全民半价购数码</p>
                            </a></li>
                        <li><a href="#">
                                <h4>[特惠]</h4>
                                <p>备战暑假季 全民半价购数码</p>
                            </a></li>
                        <li><a href="#">
                                <h4>[特惠]</h4>
                                <p>备战暑假季 全民半价购数码</p>
                            </a></li>
                        <li><a href="#">
                                <h4>[特惠]</h4>
                                <p>备战暑假季 全民半价购数码</p>
                            </a></li>
                    </ul>
                    <div class="smallpics">
                        <ul>
                            <li>
                                <i></i>
                                <span>话费</span>
                            </li>
                            <li>
                                <i></i>
                                <span>机票</span>
                            </li>
                            <li>
                                <i></i>
                                <span>电影票</span>
                            </li>
                            <li>
                                <i></i>
                                <span>游戏</span>
                            </li>
                            <li>
                                <i></i>
                                <span>彩票</span>
                            </li>
                            <li>
                                <i></i>
                                <span>加油站</span>
                            </li>
                            <li>
                                <i></i>
                                <span>酒店</span>
                            </li>
                            <li>
                                <i></i>
                                <span>火车票</span>
                            </li>
                            <li>
                                <i></i>
                                <span>众筹</span>
                            </li>
                            <li>
                                <i></i>
                                <span>理财</span>
                            </li>
                            <li>
                                <i></i>
                                <span>礼品卡</span>
                            </li>
                            <li>
                                <i></i>
                                <span>白条</span>
                            </li>
                        </ul>
                        <div class="artical-ad">
                            <img src="./images/ad1.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 今日推荐区域 -->
        <div class="command">
            <div class="container">
                <div class="today-command">
                    <div class="command-img">
                        <img src="./images/clock.png" alt="">
                    </div>
                    <h3>今日推荐</h3>
                </div>
                <div class="command-item">
                    <h3>优质好货</h3>
                    <h4>满300减100</h4>
                    <span>满500减200</span>
                    <img src="./images/a1.png" alt="">
                </div>
                <div class="command-item">
                    <h3>优质好货</h3>
                    <h4>满300减100</h4>
                    <span>满500减200</span>
                    <img src="./images/a2.png" alt="">
                </div>
                <div class="command-item">
                    <h3>优质好货</h3>
                    <h4>满300减100</h4>
                    <span>满500减200</span>
                    <img src="./images/a3.png" alt="">
                </div>
                <div class="command-item">
                    <h3>优质好货</h3>
                    <h4>满300减100</h4>
                    <span>满500减200</span>
                    <img src="./images/a4.png" alt="">
                </div>
            </div>
        </div>
        <!-- 精选 -->
        <div class="choose clearfix">
            <div class="container">
                <div class="choose-top clearfix">
                    <div class="choose-top-item">
                        <p>精选</p>
                        <span>个性美妆</span>
                    </div>
                    <div class="choose-top-item">
                        <p>智能先锋</p>
                        <span>大电器城</span>
                    </div>
                    <div class="choose-top-item">
                        <p>居家优品</p>
                        <span>品质生活</span>
                    </div>
                    <div class="choose-top-item">
                        <p>超市百货</p>
                        <span>百货生鲜</span></span>
                    </div>
                </div>
                <ul class="choose-contain">
                    <li>
                        <img src="./images/choose1.jpg" alt="">
                        <p>肉类零食 白芝麻猪肉脯 香辣味</p>
                        <h3>￥ 36.00</h3>
                    </li>
                    <li>
                        <img src="./images/choose2.jpg" alt="">
                        <p>【保税发货】NYX 焕彩16色眼影盘 朱</p>
                        <h3>￥ 36.00</h3>
                    </li>
                    <li>
                        <img src="./images/choose3.jpg" alt="">
                        <p>肉类零食 白芝麻猪肉脯 香辣味</p>
                        <h3>￥ 36.00</h3>
                    </li>
                    <li>
                        <img src="./images/choose4.jpg" alt="">
                        <p>肉类零食 白芝麻猪肉脯 香辣味</p>
                        <h3>￥ 36.00</h3>
                    </li>
                    <li>
                        <img src="./images/choose5.jpg" alt="">
                        <p>肉类零食 白芝麻猪肉脯 香辣味</p>
                        <h3>￥ 36.00</h3>
                    </li>
                    <li>
                        <img src="./images/choose6.jpg" alt="">
                        <p>肉类零食 白芝麻猪肉脯 香辣味</p>
                        <h3>￥ 36.00</h3>
                    </li>
                    <li>
                        <img src="./images/choose7.jpg" alt="">
                        <p>肉类零食 白芝麻猪肉脯 香辣味</p>
                        <h3>￥ 36.00</h3>
                    </li>
                    <li>
                        <img src="./images/choose8.jpg" alt="">
                        <p>肉类零食 白芝麻猪肉脯 香辣味</p>
                        <h3>￥ 36.00</h3>
                    </li>
                    <li>
                        <img src="./images/choose9.jpg" alt="">
                        <p>肉类零食 白芝麻猪肉脯 香辣味</p>
                        <h3>￥ 36.00</h3>
                    </li>
                    <li>
                        <img src="./images/choose10.jpg" alt="">
                        <p>肉类零食 白芝麻猪肉脯 香辣味</p>
                        <h3>￥ 36.00</h3>
                    </li>
                </ul>

            </div>
        </div>
        <!-- 一元抢 -->
        <div class="oneget">
            <div class="container">
                <div class="oneget-title">
                    <ul>
                        <li>
                            <i></i>
                            <span>秒杀排行</span>
                        </li>
                        <li>
                            <i></i>
                            <span>热卖排行</span>
                        </li>
                        <li>
                            <i></i>
                            <span>新品排行</span>
                        </li>
                    </ul>
                </div>
                <div class="oneget-contain">
                    <div class="oneget-left">
                        <h3>
                            低价秒杀
                        </h3>
                    </div>
                    <div class="oneget-right">
                        <ul class="oneget-right-row1">
                            <li>
                                <img src="./images/1.png" alt="">
                            </li>
                            <li>
                                <img src="./images/2.png" alt="">
                            </li>
                            <li>
                                <img src="./images/3.png" alt="">
                            </li>
                            <li>
                                <img src="./images/4.png" alt="">
                            </li>
                            <li>
                                <img src="./images/5.png" alt="">
                            </li>
                        </ul>
                        <ul class="oneget-right-row2">
                            <li>
                                <img src="./images/6.png" alt="">
                            </li>
                            <li>
                                <img src="./images/7.png" alt="">
                            </li>
                            <li>
                                <img src="./images/8.png" alt="">
                            </li>
                            <li>
                                <img src="./images/9.png" alt="">
                            </li>

                        </ul>

                    </div>
                </div>
            </div>
        </div>
        <!-- 楼层：家用电器 -->
        <div class="floor">
            <div class="container">
                <div class="floor-top">
                    <h3>家用电器</h3>
                    <ul>
                        <li>
                            <a href="#">热门</a>
                        </li>
                        <li>
                            <a href="#">大家电</a>
                        </li>
                        <li>
                            <a href="#">生活电器</a>
                        </li>
                        <li>
                            <a href="#">厨房电器</a>
                        </li>
                        <li>
                            <a href="#">应季电器</a>
                        </li>
                        <li>
                            <a href="#">空气/净水</a>
                        </li>
                        <li>
                            <a href="#">高端电器</a>
                        </li>
                    </ul>
                </div>
                <div class="floor-contain">
                    <div class="floor-contain-left">
                        <ul class="floor-contain-list">
                            <li>
                                <a href="#">节能补贴</a>
                            </li>
                            <li>
                                <a href="#">4k电视</a>
                            </li>
                            <li>
                                <a href="#">电热水器</a>
                            </li>
                            <li>
                                <a href="#">空气净化器</a>
                            </li>
                            <li>
                                <a href="#">电饭煲</a>
                            </li>
                            <li>
                                <a href="#">滚筒洗衣机</a>
                            </li>
                        </ul>
                        <img src="./images/floor-1-1.png" alt="">
                    </div>
                    <div class="floor-contain-swiper">
                        <img src="./images/floor-1-b01.png" alt="">
                    </div>
                    <div class="floor-contain-pics">
                        <img src="./images/floor-1-2.png" alt="">
                        <img src="./images/floor-1-3.png" alt="">
                    </div>
                    <div class="floor-contain-pic">
                        <img src="./images/floor-1-4.png" alt="">
                    </div>
                    <div class="floor-contain-pics">
                        <img src="./images/floor-1-5.png" alt="">
                        <img src="./images/floor-1-6.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- 楼层：家用电器 -->
        <div class="floor">
            <div class="container">
                <div class="floor-top">
                    <h3>家用电器</h3>
                    <ul>
                        <li>
                            <a href="#">热门</a>
                        </li>
                        <li>
                            <a href="#">大家电</a>
                        </li>
                        <li>
                            <a href="#">生活电器</a>
                        </li>
                        <li>
                            <a href="#">厨房电器</a>
                        </li>
                        <li>
                            <a href="#">应季电器</a>
                        </li>
                        <li>
                            <a href="#">空气/净水</a>
                        </li>
                        <li>
                            <a href="#">高端电器</a>
                        </li>
                    </ul>
                </div>
                <div class="floor-contain">
                    <div class="floor-contain-left">
                        <ul class="floor-contain-list">
                            <li>
                                <a href="#">节能补贴</a>
                            </li>
                            <li>
                                <a href="#">4k电视</a>
                            </li>
                            <li>
                                <a href="#">电热水器</a>
                            </li>
                            <li>
                                <a href="#">空气净化器</a>
                            </li>
                            <li>
                                <a href="#">电饭煲</a>
                            </li>
                            <li>
                                <a href="#">滚筒洗衣机</a>
                            </li>
                        </ul>
                        <img src="./images/floor-1-1.png" alt="">
                    </div>
                    <div class="floor-contain-swiper">
                        <img src="./images/floor-1-b01.png" alt="">
                    </div>
                    <div class="floor-contain-pics">
                        <img src="./images/floor-1-2.png" alt="">
                        <img src="./images/floor-1-3.png" alt="">
                    </div>
                    <div class="floor-contain-pic">
                        <img src="./images/floor-1-4.png" alt="">
                    </div>
                    <div class="floor-contain-pics">
                        <img src="./images/floor-1-5.png" alt="">
                        <img src="./images/floor-1-6.png" alt="">
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      pics: [
        { id: 1, src: require("./images/product1.png") },
        { id: 2, src: require("./images/product2.png") },
        { id: 3, src: require("./images/product3.png") },
      ],
    };
  },
  mounted() {
    this.$store.dispatch("getUserInfo");
  },
};
</script>

<style lang="less" scoped>
.el-carousel {
  width: 730px;
  height: 461px;
  position: absolute;
  top: 0;
  left: 210px;

  img {
    width: 100%;
    height: 100%;
  }
}
.el-carousel__item h3 {
  color: red;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

// .el-carousel__item:nth-child(n) {
//   background-image: url(./images/product3.png);
//   background-size: 100% 100%;
// }

// .el-carousel__item:nth-child(2n) {
//   background-image: url(./images/product2.png);
//   background-size: 100% 100%;
// }
// .el-carousel__item:nth-child(3n) {
//   background-image: url(./images/product1.png);
//   background-size: 100% 100%;
// }
.box {
  width: 100%;
  background-color: #f8f8f9;
  .container {
    width: 1200px;
    margin: 0 auto;
  }
  // 轮播图及精灵图区域
  .swiperarticle {
    height: 461px;
    .container {
      position: relative;
      .swiper {
        width: 730px;
        height: 461px;
        position: absolute;
        top: 0;
        left: 210px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .artical {
        position: absolute;
        top: 0;
        left: 940px;
        width: 260px;
        height: 461px;
        // background-color: pink;
        border: 1px solid #ccc;
        .artical-top {
          height: 33px;
          line-height: 33px;
          border-bottom: 1px solid #ccc;
          h3 {
            float: left;
            padding-left: 10px;
          }
          span {
            float: right;
            padding-right: 10px;
          }
        }
        .artical-contain {
          height: 140px;
          border-bottom: 1px solid #ccc;
          li {
            height: 26px;
            line-height: 26px;
            padding-left: 10px;
            a {
              display: block;
              width: 100%;
              height: 100%;
              h4 {
                // margin-top:10px;
                float: left;
              }
              p {
                float: left;
              }
            }
          }
        }
        .smallpics {
          height: 195px;
          width: 100%;
          // background-color: red;
          ul {
            li {
              float: left;
              width: 25%;
              height: 65px;
              border-right: 1px solid #ccc;
              border-bottom: 1px solid #ccc;
              text-align: center;
              padding: 5px 0;
              i {
                width: 26px;
                height: 26px;
                background-image: url(./images/icons.png);
                display: inline-block;
              }
              &:nth-child(1) {
                i {
                  background-position: -16px -16px;
                }
              }
              &:nth-child(2) {
                i {
                  background-position: -77px -16px;
                }
              }
              &:nth-child(3) {
                i {
                  background-position: -140px -16px;
                }
              }
              &:nth-child(4) {
                border-right: none;
                i {
                  background-position: -205px -16px;
                }
              }
              &:nth-child(5) {
                i {
                  background-position: -16px -87px;
                }
              }
              &:nth-child(6) {
                i {
                  background-position: -77px -87px;
                }
              }
              &:nth-child(7) {
                i {
                  background-position: -140px -87px;
                }
              }
              &:nth-child(8) {
                border-right: none;
                i {
                  background-position: -205px -75px;
                }
              }
              &:nth-child(9) {
                i {
                  background-position: -16px -158px;
                }
              }
              &:nth-child(10) {
                i {
                  background-position: -77px -158px;
                }
              }
              &:nth-child(11) {
                i {
                  background-position: -141px -158px;
                }
              }
              &:nth-child(12) {
                border-right: none;
                i {
                  background-position: -205px -158px;
                }
              }
              span {
                display: block;
                padding-top: 5px;
              }
            }
          }
          .artical-ad {
            width: 260px;
            height: 81px;
            img {
              width: 100%;
              height: 100%;
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
  // 今日推荐区域
  .command {
    height: 165px;
    margin-top: 10px;
    .container {
      height: 100%;
      .today-command {
        width: 210px;
        height: 100%;
        background-color: #6e6568;
        text-align: center;
        padding: 30px 0;
        float: left;
        .command-img {
          display: inline-block;
          width: 57px;
          height: 57px;
          img {
            height: 100%;
            width: 100%;
          }
        }
        h3 {
          color: #fff;
          margin-top: 15px;
          font-size: 18px;
        }
      }
      .command-item {
        width: 242px;
        height: 100%;
        background-image: linear-gradient(
          to right,
          rgb(93, 64, 193),
          rgb(140, 95, 219)
        );
        float: left;
        margin-left: 5px;
        padding: 10px 10px;
        color: #fff;
        position: relative;
        h3 {
          font-size: 16px;
          margin-bottom: 10px;
        }
        h4 {
          font-size: 14px;
          margin-bottom: 10px;
        }
        span {
          font-size: 14px;
          font-weight: 700;
        }
        img {
          width: 120px;
          height: 120px;
          position: absolute;
          right: 0;
          bottom: 0;
        }
        &:nth-of-type(2) {
          background-image: linear-gradient(
            to right,
            rgb(50, 91, 180),
            rgb(76, 154, 254)
          );
        }
        &:nth-of-type(3) {
          background-image: linear-gradient(
            to right,
            rgb(28, 157, 175),
            rgb(64, 205, 167)
          );
        }
        &:nth-of-type(4) {
          background-image: linear-gradient(
            to right,
            rgb(209, 56, 55),
            rgb(223, 109, 79)
          );
        }
      }
    }
  }
  //    精选区域
  .choose {
    margin: 10px 0;
    .container {
      .choose-top {
        padding-left: 366px;
        margin-bottom: 10px;
        .choose-top-item {
          width: 139px;
          float: left;
          p {
            font-size: 16px;
            width: 80px;
            height: 24px;
            line-height: 24px;
            text-align: center;
            font-weight: 700;
          }
          span {
            display: inline-block;
            width: 80px;
            text-align: center;
            font-size: 16px;
            color: #ccc;
          }
          &:hover {
            p {
              background-color: red;
              border-radius: 12px;
              color: #fff;
            }
            span {
              color: red;
            }
          }
        }
      }
      .choose-contain {
        li {
          width: 232px;
          height: 294px;
          background-color: #fff;
          float: left;
          margin-right: 10px;
          margin-bottom: 5px;
          padding-left: 10px;
          &:nth-child(5n) {
            margin-right: 0;
          }
          img {
            width: 210px;
            height: 210px;
            margin: 11px 11px 11px 0;
          }
          p {
            margin-bottom: 10px;
          }
          h3 {
            color: red;
          }
        }
      }
    }
  }
  // 一元抢
  .oneget {
    margin-bottom: 20px;
    .container {
      // background-color: #6c9eff;
      height: 440px;
      .oneget-title {
        height: 80px;
        width: 100%;
        ul {
          padding: 0 480px;
          li {
            float: left;
            margin-right: 20px;
            i {
              display: block;
              width: 35px;
              height: 35px;
              background-color: pink;
              margin-bottom: 10px;
              background: url(./images/bg0.png) no-repeat -34px 0;
            }
            &:nth-child(n + 2) {
              i {
                background: url(./images/bg0.png) no-repeat 0 0;
              }
            }
            span {
              font-size: 14px;
            }
          }
        }
      }
      .oneget-contain {
        background-color: #4B4453;
        height: 370px;
        .oneget-left {
          width: 200px;
          height: 370px;
          padding: 65px 75px;
          float: left;
          text-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
          h3 {
            width: 50px;
            font-size: 50px;
            color: #fff;
          }
        }
        .oneget-right {
          float: left;

          .oneget-right-row1 {
            li {
              float: left;
              margin: 15px 10px 15px 0;
              img {
                vertical-align: middle;
              }
              &:hover {
                img {
                  transform: scale(1.05, 1.05);
                  transition: all 0.2s linear;
                  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
                }
              }
            }
          }
          .oneget-right-row2 {
            li {
              float: left;
              margin-right: 10px;
              margin-bottom: 15px;
              &:hover {
                img {
                  transform: scale(1.05, 1.05);
                  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
                  transition: all 0.2s linear;
                }
              }
            }
          }
        }
      }
    }
  }
  // 楼层区域
  .floor {
    margin-bottom: 10px;
    .container {
      .floor-top {
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding-left: 15px;
        background-color: #4B4453;
        h3 {
          font-weight: 700;
          color: #fff;
          font-size: 18px;
          float: left;
        }
        ul {
          float: right;
          li {
            float: left;
            a {
              padding: 0 10px;
              color: #fff;
              border-right: 1px solid #ccc;
              &:hover {
                color: red;
                font-weight: 700;
              }
            }
            &:nth-child(7) {
              a {
                border-right: none;
              }
            }
          }
        }
      }
      .floor-contain {
        height: 360px;
        position: relative;
        .floor-contain-left {
          float: left;
          width: 210px;
          padding: 10px 10px;
          .floor-contain-list {
            width: 100%;
            li {
              width: 48%;
              float: left;
              margin-right: 3px;
              a {
                display: block;
                width: 100%;
                text-align: center;
                padding: 10px 0;
                border-bottom: 1px solid #ccc;
              }
            }
          }
          img {
            position: absolute;
            bottom: 0;
            left: 10px;
            vertical-align: middle;
          }
        }
        .floor-contain-swiper {
          width: 330px;
          height: 100%;
          float: left;
        }
        .floor-contain-pics {
          width: 220px;
          height: 100%;
          float: left;
          img {
            width: 100%;
            height: 50%;
            vertical-align: middle;
            border: 1px solid #ccc;
          }
        }
        .floor-contain-pic {
          float: left;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>