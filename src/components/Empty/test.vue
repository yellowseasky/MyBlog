<template>
  <div class='test-container'>
    <Empty :text="text" />
  </div>
</template>

<script>
import Empty from "./";
export default {
  data() {
    return {
      text: 'yellow'
    }
  },
  components: {Empty}
}
</script>
<style>
.test-container {
  width: 500px;
  height: 400px;
  border: 2px solid;
  margin: 0 auto;
  position: relative;
}
</style>
