export default (Vue) => {
  Vue.directive("nowrap", {
    bind(el, { modifiers }) {
      el.classList.add("directive-nowrap");
      if (modifiers.playback) {
        el.classList.add("directive-nowrap--playback");
      } else {
        el.classList.add("directive-nowrap--ellipsis");
      }
    },
    inserted(el, { modifiers }) {
      if (modifiers.playback) {
        setTimeout(() => {
          el.style.animationDuration = el.clientWidth / 100 + "s";
        });
      }
    },
    
    unbind(el, { modifiers }) {
      el.classList.remove("directive-nowrap");
      if (modifiers.playback) {
        el.classList.remove("directive-nowrap--playback");
        el.style.removeProperty("animation-duration");
      } else {
        el.classList.remove("directive-nowrap--ellipsis");
      }
    },
  });
};
