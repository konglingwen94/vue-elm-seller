import Vue from 'vue'
 import Scroll from './components/scroll'
 import Icon from './components/icon'
import App from './App.vue'
import directive from './helper/directive'
// 引入font
// import './assets/font.css'
// 注册自定义指令
Vue.use(directive)




import 'lib-flexible'
import 'normalize.css'
import './assets/reset.css'
Vue.component(Scroll.name,Scroll)
Vue.component(Icon.name,Icon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
