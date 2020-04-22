import Vue from 'vue'
 import Scroll from './components/scroll'
import App from './App.vue'
 import '@/assets/reset.css'
Vue.component(Scroll.name,Scroll)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
