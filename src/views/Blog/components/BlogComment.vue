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
import { getComments } from "@/api/blog"
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
    handleSubmit() {

    }
  }
}
</script>

<style scoped lang="less">
.blog-comment-container {
  margin: 30px 0;
}
</style>