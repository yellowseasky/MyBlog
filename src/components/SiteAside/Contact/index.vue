<template>
  <ul class="content-container">
    <li>
      <a href="">
        <div class="icon">
          <Icon type="github"/>
        </div>
        <span>DuYi-Edu</span>
      </a>
    </li>
    <li>
      <a href="mailto:1352906014@qq.com">
        <div class="icon">
          <Icon type="mail"/>
        </div>
        <span>1352906014@qq.com</span>
      </a>
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon type="qq"/>
        </div>
        <span>1352906014</span>
      </a>
      <div class="pop">
        <img src="https://login.weixin.qq.com/qrcode/oeCwavQQJQ==" alt="">
      </div>
    </li>
    <li>
      <a href="">
        <div class="icon weixin">
          <Icon type="weixin"/>
        </div>
        <span>sky</span>
      </a>
      <div class="pop">
        <img src="https://login.weixin.qq.com/qrcode/oeCwavQQJQ==" alt="">
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from '../../Icon'
export default {
  components: {Icon}
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.content-container {
  color: @lightWords;
  list-style: none;
  padding: 20px;
  margin: 0;
  @itemHeight: 30px;

  li {  
    height: @itemHeight;
    line-height: @itemHeight;
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
    a {
      cursor: pointer;
      display: flex;
      align-items: center;
      font-size: 14px; 

    }
    .icon {
      font-size: 26px;
      width: 36px;
      &.weixin {
        font-size: 32px;
        text-indent: -3px;
      }
    }
    .pop {
      position: absolute;
      left: 0;
      bottom: @itemHeight + 5px;
      padding: 10px 15px;
      background: #fff;
      border-radius: 5px;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s;
      img {
        width: 150px;
        height: 150px;
      }
      &::after { // 小方块
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        width: 8px;
        height: 8px;
        background: #fff;
        bottom: -4px;
      }
    }
  }
}

</style>