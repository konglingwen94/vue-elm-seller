<template>
  <span  ref="outer"  class="ball-outer">
    <span ref="inner" class="ball-inner"></span>
  </span>
</template>

<script>
export default {
   
};
</script>

<style scoped lang="less">
.ball-outer {
  position: fixed;
   
  width: 40px;
  height: 40px;
  z-index: 10000;
}
.ball-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: lightblue;
  position: absolute;
  
}
</style>
