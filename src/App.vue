<template>
  <div id="app">
    
      <Header></Header>
    
     
      <div class="tab-bar-container">
        <tab-bar @change-tab="handleTabChange" :initial-index="0"></tab-bar>
      </div>
      <div class="tab-panel-container">
        <compnoent :is="activePanel" />
      </div>
     
  </div>
</template>

<script>
import TabBar from "./components/tab-bar";
import Goods from "./views/goods/index.vue";
import Shop from "./views/shop/index.vue";
import Ratings from "./views/ratings/index.vue";
import Header from "./components/header/index.vue";
const mapDynamicComponent = {
  1: "goods",
  2: "ratings",
  3: "shop"
};
export default {
  name: "App",
  data() {
    return {
      activePanel: "goods"
    };
  },
  methods: {
    handleTabChange(id) {
      this.activePanel = mapDynamicComponent[id];
    }
  },

  components: {
    Goods,
    Shop,
    Ratings,
    Header,
    TabBar
  }
};
</script>

<style>
 
.tab-bar-container{
  /* height:10vh; */
}
.tab-panel-container {
  height: 60vh;
}
</style>
