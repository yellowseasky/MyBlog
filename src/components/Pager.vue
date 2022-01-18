<template>
  <!-- 总页数大于1才显示分页,否则不显示 -->
  <div class="pager-container" v-if="pageNumber > 1">
    <a :class="{disabled: current === 1}" @click="changePage(1)">|&lt;&lt;</a>
    <a :class="{disabled: current === 1}" @click="changePage(1)">&lt;&lt;</a>
    <a v-for="(v,i) in numbers" :key="i" :class="{active: v === current}" @click="changePage(v)">{{v}}</a>
    <a :class="{disabled: current === pageNumber}" @click="changePage(pageNumber)">&gt;&gt;</a>
    <a :class="{disabled: current === pageNumber}" @click="changePage(pageNumber)">&gt;&gt;|</a>
  </div>
</template>

<script>

export default {
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 10
    },
    visibleNumber: {
      type: Number,
      default: 10
    }
  },
  computed: {
    // 总页数
    pageNumber() {
        return Math.ceil(this.total/this.limit);
    },
    //得到显示的最小数字
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if(min < 1) {
        min = 1;
      }
      return min
    },
    //得到显示的最大数字
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if(max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max
    },
    // 中间的页数
    numbers() {
      let nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    }
  },
  methods: {
    changePage(page) {
      // 向父组件发送事件
      if(page < 0) page = 0
      if(page > this.pageNumber) page = this.pageNumber
      if(page === this.current) return; // 重复点击则不抛出事件
      this.$emit('changePage', page);
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
  .pager-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a {
      color: @primary;
      margin: 0 6px;
      cursor: pointer;
      &.disabled {
        color: @lightWords;
        cursor: not-allowed;
      }
      &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
    }
  }
</style>
