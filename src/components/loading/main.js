import Vue from "vue";

import LoadingComponent from "./main.vue";

const LoadingCtor = Vue.extend(LoadingComponent);

export default {
  install(Vue) {
    Vue.directive("loading", {
      bind(el, { modifiers, value }) {
         
        const loading = (el.$loading = new LoadingCtor());
        loading.$mount();
        el.appendChild(loading.$el);

       

        if (value) {
          loading.visible = true;
        }
      },
      inserted(el) {
        const originalPosition = (el.originalPosition = getComputedStyle(
          el
        ).position);

        

        if (originalPosition === "static") {
          el.style.setProperty("position", "relative");
        }
      },
      update(el, { value }) {
        if (value) {
          el.$loading.visible = true;
          el.style.setProperty("position", "relative");
        } else {
          el.$loading.visible = false;
          el.style.setProperty("position", el.originalPosition);
        }
      },
      unbind(el) {
        el.style.setProperty("position", el.originalPosition);

        el.$loading.$el.remove();
      },
    });
  },
};
