<template>
  <div class="wrapper" :style="style">
    <div class="brand" v-if="name === 'brand'">
      <img class="brand" src="./brand@2x.png" width="100% " height="100% " v-if="ratio === 2" />
      <img class="brand" src="./brand@3x.png" width="100%" height="100%" v-else-if="ratio === 3" />
    </div>
    <!-- <div class="decrease" v-else-if="name === 'decrease'"></div>
    <img class="decrease" :style="style" />-->
  </div>
</template>
<script>
const dpr = window.devicePixelRatio;
export default {
  name: "icon",
  data() {
    return {
      ratio: dpr
    };
  },
  props: {
    src: String,
    width: String,
    height: String,
    name: String
  },
  computed: {
    style() {
      return {
        width: `${(this.width / 2) * dpr}px`,
        height: `${(this.height / 2) * dpr}px`
      };
    }
  }
};
</script>
<style scoped>
.wrapper {
  /* display: inline-block; */
  /* vertical-align: middle; */
}
div{
  font-size: 0;
  display:inline-block;
}
.wrapper > div {
  height: 100%;
}
.img {
  display: inline-block;
  display: inline-block;
  vertical-align: top;
}
</style>
