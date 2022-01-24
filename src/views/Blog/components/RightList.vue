<template>
  <ul class="right-list-comtainer">
    <li v-for="(item, i) in list" :key="i" >
      <span :class="{ active: item.isSelect }" @click="handleClick(item)">{{item.name}}</span>
      <!-- 显示当前组件 -->
      <RightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>

export default {
  name: 'RightList',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClick(item) {
      this.$emit("select", item)
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.right-list-comtainer {
  list-style: none;
  padding: 0;
  .right-list-comtainer {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    .active {
      color: @warn;
      font-weight: bold;
    }
  }
}
</style>