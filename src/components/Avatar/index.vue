<template>
  <img 
    class="avatar-container"
    :src="url"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  >
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 150
    }
  }
}
</script>

<style scoped>
/* 带有作用域的样式 */
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>