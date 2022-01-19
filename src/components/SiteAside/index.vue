<template>
  <div class="site-aside-container">
    <Avatar src="http://mdrs.yuanjin.tech/img/20201031141350.jpg"/>
    <h1 class="title">龙傲天的小窝</h1>
    <Menu />
    <Contact />
    <p class="footer">
      黑ICP备17001719号
    </p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar"
import Menu from './Menu/index'
import Contact from './Contact'
export default {
  components: {
    Avatar,
    Menu,
    Contact
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container {
  height: 100%;
  width: 100%;
  background-color: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  // 设置头像组件的位置
  .avatar-container {
    margin: 0 auto;
  }
  .title {
    text-align: center;
    color: #fff;
  }
  .footer {
    text-align: center;
    color: @words;
  }
}

</style>