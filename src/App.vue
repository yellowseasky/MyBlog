<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
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
  },
}
</script>

<style lang='less' scoped>
@import "~@/styles/mixin.less";
.app-container {
  .self-fill(fixed);
  .aside {
    width: 250px;
    height: 100%;
  }
}
</style>
