import Vue from 'vue'
import Scroll from "@/components/scroll";
import Icon from "@/components/icon";
import StarScore from "@/components/star-score";
import Confirm from "@/components/confirm/main.js";
import Alert from "@/components/alert/main.js";
import Loading from "@/components/loading/main.js";

import ShoppingCart from "@/components/shopping-cart";

import FoodPicker from "@/components/food-picker";
import Rating from "@/components/rating";
// 注册API 组件
Vue.use(Confirm);
Vue.use(Alert);
Vue.use(Loading);

Vue.component(Scroll.name, Scroll);
Vue.component(Icon.name, Icon);
Vue.component(StarScore.name, StarScore);
Vue.component(FoodPicker.name, FoodPicker);
Vue.component(Rating.name, Rating);
Vue.component(ShoppingCart.name, ShoppingCart);
