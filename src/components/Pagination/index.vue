<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="getNum(pageNo - 1)">上一页</button>
    <!-- 上部分 -->
    <button v-show="startNumAndEndNum.start > 1" @click="getNum('1')">1</button>
    <button v-show="startNumAndEndNum.start > 2">···</button>
    <!-- 中间部分:连续页码部分 -->
    <button
      v-for="(page, index) in startNumAndEndNum.end"
      :key="index"
      :class="{ active: pageNo == page }"
      v-show="page >= startNumAndEndNum.start"
      @click="getNum(page)"
    >
      {{ page }}
    </button>

    <!-- 下部分 -->
    <button v-show="startNumAndEndNum.end < totalPage - 1">···</button>
    <button
      v-show="startNumAndEndNum.end < totalPage"
      @click="getNum(totalPage)"
    >
      {{ totalPage }}
    </button>
    <button :disabled="pageNo == totalPage" @click="getNum(pageNo + 1)">
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startNumAndEndNum() {
      const { pageNo, continues, totalPage } = this;
      let start = 0;
      let end = 0;
      if (continues > totalPage) {
        start = 1;
        end = totalPage;
      } else {
        //正常情况下
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        //当start出现负数时要纠正start/end的值
        if (start < 1) {
          start = 1;
          end = continues;
        }
        //当end超过总页码时要纠正start、end的值
        if (end > totalPage) {
          start = totalPage - continues + 1;
          end = totalPage;
        }
      }
      return { start, end };
    },
  },
  methods: {
    getNum(page) {
      this.$emit("getNum", page);
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  margin-bottom: 15px;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
