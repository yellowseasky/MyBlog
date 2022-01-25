<template>
  <div class="message-area-container">
    <div class="data-from-container">
      <DataFrom v-on="$listeners" />
    </div>
    <h3>
      {{title}}
      <span>{{subTitle}}</span>
    </h3>
    <DataList :list="list" v-loading="isListLoading"/>
  </div>
</template>

<script>
import DataFrom from "./components/DataFrom"
import DataList from "./components/DataList"
export default {
  components: {
    DataFrom,
    DataList
  },
  props: {
    title: {
      type: String
    },
    list: {
      type: Array,
      default: () => []
    },
    subTitle: {
      type: Number
    },
    isListLoading: {
      type: Boolean
    }
  }
}
</script>

<style scoped lang="less">
.loading {
  position: relative;
  height: 100px;
}
</style>