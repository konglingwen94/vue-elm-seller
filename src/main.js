import Vue from "vue";
import Scroll from "./components/scroll";
import Icon from "./components/icon";
import StarScore from "./components/star-score";
import App from "./App.vue";
import directive from "./helper/directive";
import Confirm from "./components/confirm/main.js";
import Alert from "./components/alert/main.js";
import Loading from "./components/loading/main.js";

// 引入vconsole
 
if (process.env.NODE_ENV !== "production") {
  import("vconsole").then(({ default: vConsole }) => {
    new vConsole();
  });
}

 
// 引入全局样式
import "./assets/global.css";

import "lib-flexible";
import "normalize.css";
import "./assets/reset.css";
import VConsole from "vconsole";

Vue.config.devtools = true;

// 注册自定义指令
Vue.use(directive);
// 注册API 组件
Vue.use(Confirm);
Vue.use(Alert);
Vue.use(Loading);

Vue.component(Scroll.name, Scroll);
Vue.component(Icon.name, Icon);
Vue.component(StarScore.name, StarScore);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
