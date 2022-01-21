<template>
  <nav class="menu-container">
    <!-- active-class修改vue点击对应菜单栏的类; exact为true意思为精确匹配路由,false为模糊匹配; :to="{name: item.name}"为命名路由,对应路由的命名-->
    <RouterLink
      :exact="item.exact"
      v-for="item in menuList"
      :key="item.link"
      :to="{name: item.name}"
      active-class = "active"
    >
      <div class="icon">
        <Icon :type="item.type"/>
      </div>
      <span>{{item.text}}</span>
    </RouterLink>
  </nav>
</template>

<script>
import Icon from '../../Icon/index'
export default {
  components: {Icon},
  data() {
    return {
      menuList: [
        {
          name: 'Home', // 使用了命名路由
          link: "/",
          type: 'home',
          text: '首页',
          exact: true
        },
        {
          name: 'Blog',
          link: "/blog",
          type: 'blog',
          text: '文章',
          exact: false
        },
        {
          name: 'About',
          link: "/about",
          type: 'info',
          text: '关于我',
          exact: true
        },
        {
          name: 'Project',
          link: "/project",
          type: 'code',
          text: '项目&效果',
          exact: true
        },
        {
          name: 'Message',
          link: "/message",
          type: 'chat',
          text: '留言板',
          exact: true
        }
      ]
    }
  },
  methods: {
    isSelected(item) {
      var link = item.link.toLowerCase(); // 菜单的链接地址
      var curPathname = location.pathname.toLowerCase(); // 当前浏览器的访问路径
      // 路劲匹配到文章,路劲匹配到/blog开头就可以
      if (item.startWith) {
        return curPathname.startsWith(link);
      }
      return curPathname === link;
    }
  }
}
</script>

<style scoped lang="less">
@import '~@/styles/var.less';
.menu-container {
  width: 100%;
  color: @gray;
  margin: 24px 0;
  a {
    &.active {
      background: darken(@words, 3%); // 元素加深
    }
    height: 45px;
    display: flex;
    align-items: center;
    padding: 0 50px;
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff
    }
  }
}
</style>