<template>
  <div class="box">
    <!-- 导航区域 -->
    <nav class="nav">
      <div class="container">
        <div class="type-all" @mouseenter="changeShow" @mouseleave="ShowOff">
          <h3>全部商品分类</h3>
          <!-- dropdown区域 -->
          <ul class="item-list" v-show="isShow">
            <li class="item" v-for="item in subnavList" :key="item.categoryId">
              <a href="#" class="item-title">{{ item.categoryName }}</a>
              <div class="classitemList">
                <dl
                  class="classitem clearfix"
                  v-for="item2 in item.categoryChild"
                  :key="item2.categoryId"
                >
                  <dt>{{ item2.categoryName }}</dt>
                  <dd
                    v-for="item3 in item2.categoryChild"
                    :key="item3.categoryId"
                    @click="goSearch(item, item2, item3)"
                  >
                    <a href="#">{{ item3.categoryName }}</a>
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
        </div>
        <ul class="type-list">
          <li><a href="#">CC服饰</a></li>
          <li><a href="#">会馆</a></li>
          <li><a href="#">CC超市</a></li>
          <li><a href="#">CC好物</a></li>
          <li><a href="#">极速达</a></li>
          <li><a href="#">拼单购</a></li>
          <li><a href="#">玩具城</a></li>
          <li><a href="#">一元抢</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Subnav",
  data() {
    return {
      isShow: true,
    };
  },
  computed: {
    ...mapState({
      subnavList: (state) => {
        return state.Home.subnavList;
      },
    }),
  },
  mounted() {
    if (this.$route.path != "/home") {
      this.isShow = false;
    }
  },
  methods: {
    changeShow() {
      this.isShow = true;
    },
    ShowOff() {
      if (this.$route.path != "/home") {
        this.isShow = false;
      }
    },
    goSearch(item, item2, item3) {
      let query = {
        category1Id: item.categoryId,
        category2Id: item2.categoryId,
        category3Id: item3.categoryId,
        categoryName: item3.categoryName,
      };
      let location = {
        name: "Search",
        query,
      };
      // if (this.$route.params) {
      //   location.params = this.$route.params;
      // }

      this.$router.push(location);
      this.isShow = false;
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  background-color: #f8f8f9;
  .container {
    width: 1200px;
    margin: 0 auto;
  }
  // 导航区域
  .nav {
    height: 45px;
    line-height: 45px;
    border-bottom: 2px solid #6c9eff;
    .container {
      .type-all {
        width: 210px;
        height: 45px;
        background-color: #4B4453;
        text-align: center;
        float: left;
        position: relative;
        h3 {
          color: #fff;
          font-weight: 700;
        }
        .item-list {
          height: 461px;
          background-color: #6e6568;
          z-index: 999;
          position: relative;
          .item {
            .item-title {
              display: block;
              line-height: 27px;
              font-size: 14px;
              color: #fff;
              text-align: left;
              padding-left: 15px;
            }
            .classitemList {
              width: 734px;
              height: 461px;
              background-color: rgb(231, 228, 228);
              position: absolute;
              top: 0;
              left: 210px;
              display: none;
              z-index: 99;
              dl {
                border-bottom: 1px solid #f8f8f9;
                line-height: 30px;
                dt {
                  float: left;
                  font-weight: 700;
                  width: 70px;
                  text-align: right;
                  margin-right: 5px;
                }
                dd {
                  float: left;
                  a {
                    padding: 0 10px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
            &:hover {
              background-color: #b6b4b5;
              .classitemList {
                display: block;
              }
            }
          }
        }
      }
      .type-list {
        float: left;
        height: 45px;
        li {
          float: left;
          padding: 0 10px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>