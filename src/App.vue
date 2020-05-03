<template>
  <div id="app">
    <Header :seller="seller"></Header>

    <div class="tab-bar-container">
      <tab-bar :data="tabData" @change-tab="handleTabChange" :initial-index="0"></tab-bar>
    </div>
    <div class="tab-panel-container">
      <compnoent :is="activePanel" :seller="seller"/>
    </div>
  </div>
</template>

<script>
import request from './request'
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

const tabData = [
  {
    label: "商品",
    id: 1
  },
  {
    label: "评论",
    id: 2
  },
  {
    label: "商家",
    id: 3
  }
];
export default {
  name: "App",
  data() {
    return {
      tabData,
      activePanel: "shop",
      seller:{}
    };
  },
  created(){
    request.get('/seller').then(response=>{
      this.seller=response
    }).catch()
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
 
.tab-panel-container {
  height: calc(100vh - 257px - 90px);
  color:#07111b;
}
</style>
