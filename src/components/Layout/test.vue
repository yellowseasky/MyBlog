<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">左</div>
      </template>
      <div class="main">
        主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏
      </div>
      <template #right>
        <div class="right">右</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from './'
export default {
  components: {Layout}
}
</script>

<style scoped lang="less">
.test-container {
  width: 1000px;
  height: 600px;
  border: 1px solid;
  margin: 0 auto;
  .left {
    width: 300px;
    background: blueviolet;
    height: 100%;
  }
  .main {
    width: 100%;
    height: 100%;
    background: rgb(255, 0, 0);
  }
  .right {
    width: 200px;
    background: rgb(43, 226, 119);
    height: 100%;
  }
}
</style>