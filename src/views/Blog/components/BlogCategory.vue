<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="list" @select="handleClick "/>
  </div>
</template>

<script>
import RightList from './RightList'
import { getCategoryId } from '@/api/blog'
import fetchData from '@/mixins/fetchData'
export default {
  components: {RightList},
  mixins: [fetchData([])],
  computed: {
    getCategoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      // 计算全部的文章总数
      const totalArticleCount = this.data.reduce((a, b) =>
        a + b.articleCount
      , 0)
      // 把全部的属性添加到数据
      const result = [
        {name: '全部', id : -1, articleCount: totalArticleCount},
        ...this.data
      ]
      // 在原来的数据上加上isSelect和aside属性
      return result.map(item => ({
        ...item,
        'isSelect': item.id === this.getCategoryId,
        'aside': `${item.articleCount}篇`,
      }))
    }
  },
  methods: {
    async fetchData() {
      return await getCategoryId()
    },
    // 文章分类点击事件
    handleClick(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      // 跳转到 当前的分类id  当前的页容量  newPage的页码
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    }
  }
}
</script>

<style scoped lang="less">
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1.5em;
    margin: 0;
  }
}
</style>