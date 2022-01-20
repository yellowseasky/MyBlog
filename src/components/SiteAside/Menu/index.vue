<template>
  <nav class="menu-container">
    <a
      v-for="item in menuList"
      :key="item.link"
      :href="item.link"
      :class="{
        selected: isSelected(item),
      }"
    >
      <div class="icon">
        <Icon :type="item.type"/>
      </div>
      <span>{{item.text}}</span>
    </a>
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
          link: "/",
          type: 'home',
          text: '首页'
        },
        {
          link: "/blog",
          type: 'blog',
          text: '文章',
          startWith: true, // 只要当前路径以link开头，当前菜单就是选中的
        },
        {
          link: "/about",
          type: 'info',
          text: '关于我'
        },
        {
          link: "/project",
          type: 'code',
          text: '项目&效果'
        },
        {
          link: "/message",
          type: 'chat',
          text: '留言板'
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
    &.selected {
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