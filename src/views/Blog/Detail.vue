<template>
  <Layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data"/>
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data"/>
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData"
import { getBlog } from "@/api/blog"
import Layout from "@/components/Layout"
import BlogDetail from "./components/BlogDetail"
import BlogTOC from "./components/BlogTOC"
import BlogComment from "./components/BlogComment"

export default {
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment
  },
  mixins: [fetchData(null)],
  mounted() {
    this.$bus.$on("setMainScroll", this.handleMainScroll)
    this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$bus.$emit("mainScroll")
    this.$bus.$off("setMainScroll", this.handleMainScroll)
    this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);
  },
  updated() {
    // 页面刷新后会根据路由滑动对应的地方
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id)
    },
    handleScroll() {
      this.$bus.$emit("mainScroll", this.$refs.mainContainer)
    },
    handleMainScroll(val) {
      this.$refs.mainContainer.scrollTop = val
    }
  }
}
</script>

<style scoped lang="less">
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
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