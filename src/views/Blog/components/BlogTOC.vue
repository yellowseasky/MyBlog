<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="handleSelect"/>
  </div>
</template>

<script>
import RightList from "./RightList"
import { debounce } from "@/utils"
export default {
  components: {RightList},
  props: {
    toc: {
      type: Array
    }
  },
  data() {
    return {
      activeAnchor: null
    }
  },
  computed: {
    // 根据toc属性以及activeAnchor得到带有isSelect属性的toc数组
    tocWithSelect() {
      const getTOC = (toc=[]) => {
        return toc.map(t=> ({
          ...t,
          "isSelect": t.anchor === this.activeAnchor,
          "children": getTOC(t.children)
        }))
      }
      return getTOC(this.toc)
    },
    // 根据toc得到它们对应的元素数组
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if(t.children&&t.children.length) {
            addToDoms(t.children)
          }
        }
      }
      addToDoms(this.toc)
      return doms
    }
  },
  created() {
    this.setSelectBounce = debounce(this.setSelect, 50)
    this.$bus.$on("mainScroll", this.setSelectBounce);
  },
  beforeDestroy() {
    this.$bus.$off("mainScroll", this.setSelectBounce);
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    // 设置activeAnchor为正确的值
    setSelect() {
      this.activeAnchor = ""; // 由于后续要重新设置，先清空之前的状态
      const range = 200
      for (const dom of this.doms) {
        // 看一下当前这个dom元素是不是应该被选中
        if(!dom) {
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        if(top <= range && top >= 0) {
          // 在规定的范围内
          this.activeAnchor = dom.id;
          return
        } else if(top > range) {
          // 在规定范围上方
          return;
        } else {
          // 规定范围下面
          this.activeAnchor = dom.id;
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>