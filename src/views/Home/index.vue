<template>
  <div class="home-container" ref="container">
    <h1>主页</h1>
      <button @click="handleClick">Click</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$message({
        content: '评论成功',
        type: 'success',
        container : this.$refs.container,
        callback: function () {
          console.log('评论成功');
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.home-container {
  width: 400px;
  height: 400px;
  border: 1px solid;
}
</style>