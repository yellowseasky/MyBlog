<template>
  <div class="blog-detail-container" v-loading="isLoading">
    <Layout v-if="data">
      <div class="main-contaienr">
        <BlogDetail :blog="data" />
      </div>
      <template #right>
        <div class="right-container">
          <BlogTOC :blog="data.toc"/>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData"
import { getBlog } from "@/api/blog"
import Layout from "@/components/Layout"
import BlogDetail from "./components/BlogDetail"
import BlogTOC from "./components/BlogTOC"

export default {
  components: {
    Layout,
    BlogDetail,
    BlogTOC
  },
  mixins: [fetchData(null)],
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id)
    }
  }
}
</script>

<style scoped lang="less">
.main-contaienr {
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  scroll-behavior: smooth;
  overflow-x: hidden;
  overflow-y: scroll;
}

.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>