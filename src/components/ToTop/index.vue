<template>
  <div v-show="show" @click="clickHandle" class="to-top-container">
    Top
  </div>
</template>

<script>
import { debounce } from "@/utils"
export default {
  data() {
    return {
      show: false
    }
  },
  created() {
    this.setSelectBounce = debounce(this.handleScroll, 200)
    this.$bus.$on("mainScroll", this.setSelectBounce)
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setSelectBounce);
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.show = false;
        return;
      }
      this.show = dom.scrollTop > 500;
    },
    clickHandle() {
      this.$bus.$emit("setMainScroll", 0)
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.to-top-container {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
  color: #fff;
  background-color: @primary;
  position: fixed;
  right: 35px;
  bottom: 35px;
  cursor: pointer;
}
</style>