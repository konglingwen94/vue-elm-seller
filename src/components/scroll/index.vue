<template>
  <div id="scroll-wrapper" >
    <slot></slot>
  </div>
</template>
<script>
import BetterScroll from 'better-scroll'

export default {
  name: "scroll",
  mounted() {
    this.scroll=  new BetterScroll('#scroll-wrapper')
  },
};
</script>
<style scoped>
#scroll-wrapper{
    overflow:hidden;
}
</style>