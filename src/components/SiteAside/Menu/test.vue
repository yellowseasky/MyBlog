<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from './index'
import '@/styles/global.less'
export default {
  components: {Menu}
}
</script>

<style>
.test-container {
  width: 400px;
  height: 500px;
  margin: 0 auto;
  border: 1px solid;
  background-color: black;
}
</style>