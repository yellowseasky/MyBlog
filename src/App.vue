<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="left">
          <Side />
        </div>
      </template>
      <template #default>
        <RouterView />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout'
import Side from '@/components/SiteAside'
export default {
  components: {
    Layout,
    Side
  }
}
</script>

<style lang='less' scoped>
@import "~@/styles/mixin.less";
.app-container {
  .self-fill(fixed);
  .left {
    width: 300px;
    height: 100%;
  }
}
</style>
