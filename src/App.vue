<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script>
import Goods from "./views/goods/index.vue";
import Shop from "./views/shop/index.vue";
import Ratings from "./views/ratings/index.vue";
import Header from "./components/header/index.vue";

export default {
  name: "App",
  components: {
    Goods,
    Shop,
    Ratings,
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
