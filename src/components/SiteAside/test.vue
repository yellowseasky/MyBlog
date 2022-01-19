<template>
  <div class="test-container">
    <Aside />
  </div>
</template>

<script>
import Aside from './index'
import '@/styles/global.less'
export default {
  components: {Aside}
}
</script>

<style>
.test-container {
  width: 250px;
  height: 600px;
  border: 2px solid;
  margin: 0 auto;
  
}
</style>