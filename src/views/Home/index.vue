<template>
  <div class="home-container" ref="container">
    <!-- 轮播 -->
    <ul class="carousel-container"  :style="{marginTop}">
      <li v-for="item in banners" :key="item.id">
        <CarouselItem />
      </li>
    </ul>

    <!-- 上下箭头 -->
    <div class="icon icon-up" v-show="index >= 1" @click="switchTo(index - 1)">
      <Icon type="arrowUp"/>
    </div>
    <div class="icon icon-down" v-show="index < banners.length - 1" @click="switchTo(index + 1)">
      <Icon type="arrowDown"/>
    </div>

    <!-- 圆点 -->
    <ul class="indicator">
      <li v-for="(item, i) in banners" :key="item.id" :class="{active: i === index}" @click="switchTo(i)">
        
      </li>
    </ul>

  </div>

</template>

<script>
import CarouselItem from './Carouselitem';
import Icon from '@/components/Icon'
import { getBanners } from '@/api/bannerApi';

export default {
  data() {
    return {
      banners: [],
      index: 0, // 当前显示第几张图片
      containerHeight: 0 // 整个容器的高度
    }
  },
  components: {
    CarouselItem,
    Icon
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    }
  },
  async created() {
    this.banners = await getBanners();
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
  },
  methods: {
    // 切换轮播图
    switchTo(i) {
      this.index = i;
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .carousel-container {
    margin: 0;
    width: 100%;
    height: 100%;
    transition: 500ms;
    li {
      width: 100%;
      height: 100%;
    }
  }

}

.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  cursor: pointer;
  transform: translate(-50%, -50%);
  transform: translateX(-50%);
  font-size: 30px;
  color: @gray;
  @gap: 25px;
  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 5s infinite;
  }
  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }

  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}

.indicator {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  li {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    cursor: pointer;
    background-color: @words;
    border: 1px solid #fff;
    box-sizing: border-box;
    margin-bottom: 10px;
    &.active {
      background: #fff;
    }
  }
}
</style>