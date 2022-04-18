<template>
  <div class="box">
    <!-- 头部区域 -->
    <div class="header-area" v-show="$route.meta.Show">
      <!-- 头部大图 -->
      <div class="container">
        <img src="../../assets/title.jpeg" alt="" class="header-img" />
        <span class="close">×</span>
      </div>
    </div>
    <!-- 头部注册登录区 -->
    <div class="header-login">
      <div class="container">
        <div class="header-left">
          <h2>LiLi Shop欢迎您！</h2>
          <section v-if="!userInfo.name">
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register">免费注册</router-link>
          </section>
          <div class="user" v-else>
            <span>{{ userInfo.name }}</span>
            <a @click="logout">退出登录</a>
          </div>
        </div>
        <div class="header-right">
          <ul>
            <li>
              <router-link to="/myorderlist">我的订单</router-link>
            </li>
            <li>
              <router-link to="/shopcart">我的购物车</router-link>
            </li>
            <li>
              <a href="#">我的LiLi</a>
            </li>
            <li>
              <a href="#">LiLi会员</a>
            </li>
            <li>
              <a href="#">企业采购</a>
            </li>
            <li>
              <a href="#">关注LiLi</a>
            </li>
            <li>
              <a href="#">合作招商</a>
            </li>
            <li>
              <a href="#">商家后台</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- logo和搜索区域 -->
    <div class="logoSearch">
      <div class="container">
        <div class="logo">
          <router-link :to="{ path: '/home' }"
            ><img src="../../assets/logo2.png" alt=""
          /></router-link>
        </div>
        <div class="search">
          <input type="text" v-model="keyword" />
          <button @click="goSearch">搜索</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      keyword: "",
    };
  },
  computed: {
    ...mapState({
      userInfo(state) {
        return state.User.userInfo || {};
      },
    }),
  },
  methods: {
    goSearch() {
      let location = {
        name: "Search",
        params: { keyword: this.keyword || undefined },
      };
      // if (this.$route.query.category1Id) {
      //   location.query = {
      //     category1Id: this.$route.query.category1Id,
      //     category2Id: this.$route.query.category2Id,
      //     category3Id: this.$route.query.category3Id,
      //     categoryName: this.$route.query.categoryName,
      //   };
      // }
      this.$router.push(location);
    },
    async logout() {
      try {
        await this.$store.dispatch("logout");
        alert("退出登录");
      } catch (error) {
        alert("退出登陆失败");
      }
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
  // 头部大图区域及登陆注册区域
  .header-area {
    height: 80px;
    background-color: #377cfa;
    position: relative;

    .header-img {
      width: 100%;
      height: 80px;
      vertical-align: middle;
    }
    .close {
      width: 20px;
      height: 20px;
      display: block;
      position: absolute;
      top: 10px;
      right: 170px;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      text-align: center;
      line-height: 20px;
      color: #fff;
      font-weight: 700;
    }
  }

  .header-login {
    height: 30px;
    background-color: #fff;
    line-height: 30px;
    .header-left {
      // height: 30px;
      h2 {
        font-weight: normal;
        font-size: 12px;
        float: left;
      }
      section {
        float: left;
        &:nth-of-type(2) {
          a {
            &:nth-of-type(1) {
              border-right: none;
              border-left: 1px solid #ccc;
            }
          }
        }
        span {
          font-weight: normal;
          font-size: 12px;
          float: left;
          margin-right: 5px;
        }
        a {
          padding: 0 5px;
          border-right: 1px solid #b3aeae;
          &:nth-of-type(2) {
            border-right: none;
          }
        }
      }
      .user {
        float: left;
        span {
          font-weight: normal;
          font-size: 12px;
          float: left;
          margin-right: 5px;
        }
        a {
          padding: 0 5px;
          border-left: 1px solid #b3aeae;
        }
      }
    }
    .header-right {
      float: right;
      ul {
        li {
          float: left;
          a {
            padding: 0 10px;
            border-right: 1px solid #b3aeae;
          }
          &:nth-child(8) a {
            border-right: none;
          }
        }
      }
    }
  }

  // logo和搜索区域
  .logoSearch {
    height: 100px;
    .logo {
      padding: 20px 10px;
      float: left;
      img {
        height: 56px;
      }
    }
    .search {
      float: right;
      height: 32px;
      margin-top: 30px;
      border: 2px solid red;
      position: relative;
      input {
        width: 490px;
        height: 100%;
        border: none;
        // margin-top: 30px;
        &:focus {
          outline: none;
        }
      }
      button {
        height: 31px;
        width: 68px;
        background-color: red;
        border: none;
        color: #fff;
        position: absolute;
        top: -1px;
        right: -1px;
      }
    }
  }
}
</style>