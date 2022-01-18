<template>
  <div>
    <Pager
      :current = "current"
      :visibleNumber = "visibleNumber"
      :total = "total"
      @changePage="changePage"
    />
  </div>
</template>

<script>
import Pager from './components/Pager'

export default {
  components: {Pager},
  data() {
    return {
      current: 1,
      visibleNumber: 8,
      total: 100
    }
  },
  methods: {
    changePage(val) {
      this.current = val;
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
