<template>
  <div class="blog-comment-container">
    <MessageArea
      :list="data.rows"
      title="评论列表"
      :subTitle="data.total"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea"
import fetchData from "@/mixins/fetchData"
import { getComments, postComment } from "@/api/blog"
export default {
  mixins: [fetchData({})],
  components: {
    MessageArea
  },
  data() {
    return {
      page: 1,
      limit: 10
    }
  },
  methods: {
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit)
    },
    handleSubmit(formData, callback) {
      postComment({
        id: this.$route.params.id,
        ...formData
      }).then(res => {
        this.data.rows.unshift(res)
        this.data.total++;
        callback("评论成功"); // 去执行子组件
      })
    }
  }
}
</script>

<style scoped lang="less">
.blog-comment-container {
  margin: 30px 0;
}
</style>