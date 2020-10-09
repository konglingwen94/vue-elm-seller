import Vue from "vue";
import App from "./App.vue";
import directive from "./helper/directive";

// 引入全局样式
import "./assets/global.css";

import "lib-flexible";
import "normalize.css";
import "./assets/reset.css";

// 全局注册组件
import '@/components'

Vue.config.devtools = true;

// 注册自定义指令
Vue.use(directive);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

 
