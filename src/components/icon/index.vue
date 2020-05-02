<template>
  <div class="wrapper" :style="style">
    <div class="brand" v-if="name === 'brand'">
      <img class="brand" src="./brand@2x.png" width="100% " height="100% " v-if="ratio === 2" />
      <img class="brand" src="./brand@3x.png" width="100%" height="100%" v-else-if="ratio === 3" />
    </div>
    <div class="discount" v-else-if="name === 'discount'">
      <img class="discount" src="./discount_1@2x.png" width="100% " height="100% " v-if="ratio === 2" />
      <img class="discount" src="./discount_1@3x.png" width="100%" height="100%" v-else-if="ratio === 3" />
    </div>
    <div class="decrease" v-else-if="name === 'decrease'">
      <img class="decrease" src="./decrease_1@2x.png" width="100% " height="100% " v-if="ratio === 2" />
      <img class="decrease" src="./decrease_1@3x.png" width="100%" height="100%" v-else-if="ratio === 3" />
    </div>
    <div class="guarantee" v-else-if="name === 'guarantee'">
      <img class="guarantee" src="./guarantee_1@2x.png" width="100% " height="100% " v-if="ratio === 2" />
      <img class="guarantee" src="./guarantee_1@3x.png" width="100%" height="100%" v-else-if="ratio === 3" />
    </div>
    <div class="special" v-else-if="name === 'special'">
      <img class="special" src="./special_1@2x.png" width="100% " height="100% " v-if="ratio === 2" />
      <img class="special" src="./special_1@3x.png" width="100%" height="100%" v-else-if="ratio === 3" />
    </div>
    <div class="invoice" v-else-if="name === 'invoice'">
      <img class="invoice" src="./invoice_1@2x.png" width="100% " height="100% " v-if="ratio === 2" />
      <img class="invoice" src="./invoice_1@3x.png" width="100%" height="100%" v-else-if="ratio === 3" />
    </div>
    <div class="bulletin" v-else-if="name === 'bulletin'">
      <img class="bulletin" src="./bulletin@2x.png" width="100% " height="100% " v-if="ratio === 2" />
      <img class="bulletin" src="./bulletin@3x.png" width="100%" height="100%" v-else-if="ratio === 3" />
    </div>
    <!-- <div class="guarantee" v-else-if="name === 'decrease'"></div>
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
