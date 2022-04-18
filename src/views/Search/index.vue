<template>
  <div class="box">
    <!-- 导航栏区域 -->
    <Subnav />
    <!-- 面包屑区域 -->
    <div class="bread clearfix">
      <div class="container">
        <p>全部结果</p>
        <ul>
          <!-- 关键字的面包屑 -->
          <li v-show="searchParams.keyword">
            <a href="#"
              >{{ searchParams.keyword }} <i @click="removeKeyword">×</i></a
            >
          </li>
          <!-- 分类的面包屑 -->
          <li v-show="searchParams.categoryName">
            <a href="#"
              >{{ searchParams.categoryName }}
              <i @click="removeCategoryName">×</i></a
            >
          </li>
          <!-- 品牌的面包屑 -->
          <li v-show="searchParams.trademark">
            <a href="#"
              >{{ searchParams.trademark.split(":")[1] }}
              <i @click="removeTrademark">×</i></a
            >
          </li>
          <!-- 属性的面包屑 -->
          <li v-for="(item, index) in searchParams.props" :key="index">
            <a href="#"
              >{{ item.split(":")[1] }} <i @click="removeAttrs(index)">×</i></a
            >
          </li>
        </ul>
      </div>
    </div>
    <!-- table区域 -->
    <div class="container table clearfix">
      <div class="table-row">
        <div class="table-row-left">品牌</div>
        <div class="table-row-right">
          <ul>
            <li
              v-for="item in searchList.trademarkList"
              :key="item.tmId"
              @click="getTradmark(item)"
            >
              {{ item.tmName }}
            </li>
          </ul>
        </div>
      </div>
      <div
        class="table-row"
        v-for="item in searchList.attrsList"
        :key="item.attrId"
      >
        <div class="table-row-left">{{ item.attrName }}</div>
        <div class="table-row-list">
          <ul>
            <li
              v-for="(item2, index) in item.attrValueList"
              :key="index"
              @click="getAttrs(item, item2)"
            >
              {{ item2 }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 排序区域 -->
    <div class="container">
      <div class="rank">
        <ul>
          <li
            @click="changeRank(1)"
            :class="{ active: isZongDesc || isZongAsc }"
          >
            综合 <i v-show="isZongAsc">↑</i><i v-show="isZongDesc">↓</i>
          </li>
          <li
            @click="changeRank(2)"
            :class="{ active: isPriceDesc || isPriceAsc }"
          >
            价格 <i v-show="isPriceAsc">↑</i><i v-show="isPriceDesc">↓</i>
          </li>
        </ul>
      </div>
    </div>
    <!-- 商品列表 -->
    <div class="container goods-list clearfix">
      <ul>
        <li
          v-for="item in searchList.goodsList"
          :key="item.id"
          @click="goDetail(item.id)"
        >
          <img :src="item.defaultImg" alt="" />
          <h1>￥{{ item.price }}</h1>
          <p>{{ item.title }}</p>
          <p>已有<span>2000</span>人评价</p>
          <div class="addcart">加入购物车</div>
          <div class="heart">收藏</div>
        </li>
      </ul>
    </div>
    <!-- 分页器区域 -->
    <Pagination
      :pageNo="searchParams.pageNo"
      :pageSize="searchParams.pageSize"
      :total="searchList.total"
      :continues="5"
      @getNum="changePage"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      isShow: false,
      searchParams: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
        categoryName: "",
        keyword: "",
        order: "1:desc",
        pageNo: 1,
        pageSize: 10,
        props: [],
        trademark: "",
      },
    };
  },
  computed: {
    ...mapState({
      searchList(state) {
        return state.Search.searchList;
      },
    }),
    isZongDesc() {
      return (
        this.searchParams.order.indexOf("desc") != -1 &&
        this.searchParams.order.indexOf("1") != -1
      );
    },
    isZongAsc() {
      return (
        this.searchParams.order.indexOf("asc") != -1 &&
        this.searchParams.order.indexOf("1") != -1
      );
    },
    isPriceDesc() {
      return (
        this.searchParams.order.indexOf("desc") != -1 &&
        this.searchParams.order.indexOf("2") != -1
      );
    },
    isPriceAsc() {
      return (
        this.searchParams.order.indexOf("asc") != -1 &&
        this.searchParams.order.indexOf("2") != -1
      );
    },
  },
  mounted() {
    // this.searchParams.keyword = this.$route.params.keyword;
    // this.searchParams.category1Id = this.$route.query.category1Id;
    // this.searchParams.category2Id = this.$route.query.category2Id;
    // this.searchParams.category3Id = this.$route.query.category3Id;
    // this.searchParams.categoryName = this.$route.query.categoryName;
    Object.assign(this.searchParams, this.$route.query, this.$route.params);
    this.getSearchList();
  },
  watch: {
    $route(newValue, oldValue) {
      Object.assign(this.searchParams, this.$route.query, this.$route.params);
      this.getSearchList();
    },
  },
  methods: {
    getSearchList() {
      this.$store.dispatch("getSearchList", this.searchParams);
    },
    changePage(page) {
      this.searchParams.pageNo = page;
      this.getSearchList();
    },
    removeKeyword() {
      this.searchParams.keyword = "";
      this.getSearchList();
    },
    removeCategoryName() {
      this.searchParams.category1Id = "";
      this.searchParams.category2Id = "";
      this.searchParams.category3Id = "";
      this.searchParams.categoryName = "";
      this.getSearchList();
    },
    getTradmark(trademark) {
      this.searchParams.trademark = `${trademark.tmId}:${trademark.tmName}`;
      this.getSearchList();
    },
    removeTrademark() {
      this.searchParams.trademark = "";
      this.getSearchList();
    },
    getAttrs(attr, value) {
      this.searchParams.props.push(`${attr.attrId}:${value}:${attr.attrName}`);
      this.getSearchList();
    },
    removeAttrs(i) {
      this.searchParams.props.splice(i, 1);
      this.getSearchList();
    },
    changeRank(n) {
      if (n == 1) {
        if (this.searchParams.order.indexOf("1") != -1) {
          this.searchParams.order =
            this.searchParams.order == "1:desc" ? "1:asc" : "1:desc";
        } else {
          this.searchParams.order = "1:desc";
        }
      }
      if (n == 2) {
        if (this.searchParams.order.indexOf("2") != -1) {
          this.searchParams.order =
            this.searchParams.order == "2:desc" ? "2:asc" : "2:desc";
        } else {
          this.searchParams.order = "2:desc";
        }
      }
      this.getSearchList();
    },
    goDetail(skuId) {
      this.$router.push({ name: "Detail", query: skuId });
    },
  },
};
</script>

<style lang="less" scoped>
// 面包屑区域
.bread {
  .container {
    p {
      float: left;
      margin: 13px 8px;
    }
    ul {
      float: left;
      li {
        float: left;
        padding: 2px 5px;
        margin: 10px 5px;
        border: 1px solid #ccc;
        background-color: rgb(243, 241, 241);
      }
    }
  }
}
// table区域
.table {
  .table-row {
    width: 1200px;
    height: 123px;
    border: 1px solid #ccc;
    border-bottom: none;

    .table-row-left {
      float: left;
      width: 125px;
      height: 100%;
      line-height: 123px;
      text-align: right;
      padding-right: 5px;
      font-size: 12px;
      background-color: rgb(221, 219, 219);
    }
    .table-row-right {
      float: left;
      width: 963px;
      height: 108px;
      margin: 6px 20px;
      ul {
        li {
          float: left;
          width: 11.1%;
          height: 54px;
          line-height: 54px;
          text-align: center;
          font-size: 14px;
          font-weight: 700;
          color: red;
          border: 1px solid #ccc;
        }
      }
    }
    &:nth-child(n + 2) {
      height: 36px;
      line-height: 36px;
      .table-row-left {
        line-height: 36px;
      }
    }
    .table-row-list {
      float: left;
      margin-left: 20px;
      ul {
        li {
          float: left;
          margin-right: 30px;
        }
      }
    }
    &:nth-child(6) {
      border-bottom: 1px solid #ccc;
    }
  }
}
// 排序区域
.rank {
  margin: 10px 0;
  width: 100%;
  height: 36px;
  background-color: rgb(243, 241, 241);
  border: 1px solid rgb(238, 238, 238);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  ul {
    li {
      float: left;
      width: 54px;
      height: 36px;
      line-height: 36px;
      // margin-right: 5px;
      text-align: center;
      // &:nth-child(1) {
      //   background-color: red;
      //   color: #fff;
      // }
    }
    .active {
      background-color: red;
      color: #fff;
    }
  }
}
// 商品列表区域
.goods-list {
  margin-bottom: 15px;
  ul {
    li {
      float: left;
      width: 240px;
      height: 408px;
      padding: 10px;
      img {
        margin-bottom: 10px;
        width: 214px;
        height: 242px;
      }
      h1 {
        color: red;
        margin-bottom: 10px;
      }
      p {
        margin-bottom: 10px;
        height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        &:nth-of-type(2) {
          color: #ccc;
        }
        span {
          color: rgb(94, 94, 218);
          font-weight: 700;
        }
      }
      .addcart {
        float: left;
        padding: 5px 10px;
        min-width: 85px;
        text-align: center;
        margin-right: 40px;
        border: 1px solid red;
        color: red;
      }
      .heart {
        float: left;
        min-width: 85px;
        padding: 5px 10px;
        border: 1px solid #ccc;
        color: #ccc;
        text-align: center;
      }
    }
  }
}
</style>