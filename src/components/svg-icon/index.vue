<template>
  <div  class="wrapper">
    <img width="100%" height="100%" :src="src" alt />
  </div>
</template>
<script>
export default {
  name: "svg-icon",
  props: {
    src: String,
    width: String,
    height: String
  }
};
</script>
<style scoped>
.wrapper {
}
</style>