<template>
  <div class="carousel-item-container">
    <div class="carousel-img">
      <ImageLoader :src="carousel.bigImg" :placeholder="carousel.midImg" @load="imgLoad"/>
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader'
export default {
  data() {
    return {
      titleWidth: 0,
      descWidth: 0
    }
  },
  components: {ImageLoader},
  props: ["carousel"],
  created() {

  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
  },
  methods: {
    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      // 强制让浏览器渲染一次
      this.$refs.title.clientWidth; // reflow
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      // 强制让浏览器渲染一次
      this.$refs.desc.clientWidth; // reflow
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    // 图片已加载完成
    imgLoad() {
      this.showWords()
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.carousel-item-container {
  background: @dark;
  width: 100%;
  height: 100%;
  position: relative;
  .carousel-img {
    width: 100%;
    height: 100%;
  }

  .title, .desc {
    position: absolute;
    left: 30px;
    color: #fff;
    letter-spacing: 3px;
    overflow: hidden;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
      white-space: nowrap;
      opacity: 0;
  }
  .title {
    top: calc(50% - 40px);
    font-size: 2em;
  }
  .desc {
    top: calc(50% + 20px);
    font-size: 1.3em;
  }
}
</style>