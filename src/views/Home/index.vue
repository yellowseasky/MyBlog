<template>
  <div v-loading="isLoading" class="home-container" ref="container" @wheel="handleWheel">
    <!-- 轮播 -->
    <ul class="carousel-container"  :style="{marginTop}" @transitionend="handleTransitionEnd">
      <li v-for="item in data" :key="item.id">
        <CarouselItem :carousel="item"/>
      </li>
    </ul>

    <!-- 上下箭头 -->
    <div class="icon icon-up" v-show="index >= 1" @click="switchTo(index - 1)">
      <Icon type="arrowUp"/>
    </div>
    <div class="icon icon-down" v-show="index < data.length - 1" @click="switchTo(index + 1)">
      <Icon type="arrowDown"/>
    </div>

    <!-- 圆点 -->
    <ul class="indicator">
      <li v-for="(item, i) in data" :key="item.id" :class="{active: i === index}" @click="switchTo(i)"></li>
    </ul>

  </div>

</template>

<script>
import CarouselItem from './Carouselitem';
import Icon from '@/components/Icon'
import { getBanners } from '@/api/bannerApi';
import fetchData from '@/mixins/fetchData'

export default {
  mixins: [fetchData([])],
  data() {
    return {
      index: 0, // 当前显示第几张图片
      containerHeight: 0, // 整个容器的高度
      switching: false, // 是否正在切换中
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

  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    // 创建混入函数获取数据
    fetchData() {
      return getBanners()
    },
    // 切换轮播图
    switchTo(i) {
      this.index = i;
    },
    // 鼠标滚轮
    handleWheel(e) {
      // 防止连续滚动
      if(this.switching) {
        return
      }

      if(e.deltaY === -200 && this.index > 0){
        // 向上滚动
        this.index --;
        this.switching = true
      }else if(e.deltaY === 200 && this.index < this.data.length - 1) {
        // 向下滚动
        this.index ++;
        this.switching = true
      }

    },
    // 滚动动画结束后才能进行下一次滚动
    handleTransitionEnd() {
      this.switching = false
    },
    // 页面大小改变
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
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