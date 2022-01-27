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
  computed: {
    hasMore() {
      return this.data.total > this.data.rows.length;
    }
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    // 处理下载加载更多
    handleScroll(dom) {
      // 防止拼命加载
      if(this.isLoading || !dom) {
        return ;
      }
      const rang = 100; // 顶一个可接受的范围，在这个范围内都算达到了底部
      const move = Math.abs(dom.clientHeight + dom.scrollTop - dom.scrollHeight);
      if(move <= rang) {
        this.fetchMore()
      }
    },
    // 加载下一页
    async fetchMore() {
      if(!this.hasMore) {
        // 没有数据了
        return;
      }
      this.isLoading = true
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit)
    },
    // 处理发表评论事件
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
  position: relative;
  margin: 30px 0;
}
</style>