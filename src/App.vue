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
    <ToTop />
  </div>
</template>

<script>
import Layout from '@/components/Layout'
import Side from '@/components/SiteAside'
import ToTop from "@/components/ToTop"

export default {
  components: {
    Layout,
    Side,
    ToTop
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
