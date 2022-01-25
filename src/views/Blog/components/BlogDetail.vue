<template>
  <div class="blog-detail-container" v-if="blog">
    <h2>
      {{blog.title}}
    </h2>
    <div class="aside">
      <span>时间: {{formatData(blog.createDate)}}</span>
      <span>浏览: {{ blog.scanNumber }}</span>
      <a href="">评论数: {{ blog.commentNumber }}</a>
      <a href="">{{ blog.category.name }}</a>
    </div>
    <div class="markdown-body" v-html="blog.htmlContent"></div>
  </div>
</template>

<script>
import formatData from "@/utils/formatData"
import "highlight.js/styles/github.css";

import "@/styles/markdown.css";

export default {
  props: {
    blog: {
      type: Object
    }
  },
  methods: {
    formatData
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.aside {
  font-size: 12px;
  color: @gray;
  span,
  a {
    margin-right: 15px;
  }
}
</style>