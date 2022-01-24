<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <!-- 缩略图 -->
        <div class="thumb" v-if="item.thumb">
          <a href="">
            <img :src="item.thumb" alt="你好" title="带我弟啊">
          </a>
        </div>
        <div class="main">
          <a href="">
            <h2>{{ item.title }}</h2>
          </a>
          <div class="aside">
            <span>日期: {{ formatDate(item.createDate) }}</span>
            <span>浏览: {{ item.scanNumber }}</span>
            <span>评论: {{ item.commentNumber }}</span>
            <a href="" class="">{{ item.category.name }}</a>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li> 
    </ul>
    <!-- 分页 -->
    <Pager :current="routeInfo.page" :total="data.total" :limit="routeInfo.limit" @changePage="changePage"/>
  </div>  
</template>

<script>
import Pager from '@/components/Pager'
import fetchData from '@/mixins/fetchData.js'
import { getBlogs } from '@/api/blog.js';
import { formatDate } from "@/utils";

export default {
  components: {
    Pager
  },
  mixins: [fetchData({})],
  computed: {
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit
      }
    }
  },
  watch: {
    async $route() {
      this.isLoading = true;
      this.data = await this.fetchData();
      this.$refs.container.scrollTop = 0;
      this.isLoading = false;
    }
  },
  methods: {
    async fetchData() {
      return await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
    },
    formatDate,
    changePage(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit
      }
      // 当前没有分类
      // /article?page=${newPage}&limit=${this.routeInfo.limit}
      if(this.routeInfo.categoryId === -1) {
        this.$router.push({
          name: "Blog",
          query
        })
      } else {
        // /article/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: this.routeInfo.categoryId
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ul {
    margin: 0;
  }
}

li {
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid @gray;
    .thumb {
      flex: 0 0 auto;
      margin-right: 15px;
      img {
        display: block;
        max-width: 200px;
        border-radius: 5px;
      }
    }
    .main {
      display: 1 1 auto;
      h2 {
        margin: 0;
      }
      .aside {
        font-size: 12px;
        color: @gray;
        span {
          margin-right: 15px;
        }
      }
      .desc {
        margin: 15px 0;
        font-size: 14px;
      }
    }
  }
</style>