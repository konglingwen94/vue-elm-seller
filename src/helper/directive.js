export default (Vue) => {
  Vue.directive("nowrap", {
    bind(el, { modifiers }) {
      el.classList.add("directive-nowrap");
      
      if (modifiers.playback) {
        if (modifiers.seamless) {
          el.classList.add("directive-nowrap__seamless--playback");
        } else {
          el.classList.add("directive-nowrap--playback");
        }
      } else {
        el.classList.add("directive-nowrap--ellipsis");
      }
    },
    inserted(el, { modifiers }) {
      if (modifiers.playback) {
        if (modifiers.seamless) {
          const parent = el.parentElement;
          var clonedNode = el.cloneNode(true);

          
          clonedNode.classList.add("directive-nowrap__seamless--playback");
          parent && parent.insertBefore(clonedNode, el);
        }
        el.parentElement && el.parentElement.classList.add("directive-nowrap--parent");
        setTimeout(() => {
          if (modifiers.seamless) {
            clonedNode.style.animationDuration = (el.clientWidth / 100) * 2 + "s";
            el.style.animationDuration = (el.clientWidth / 100) * 2 + "s";
            
            el.style.animationDelay = el.clientWidth / 100 + "s";
          } else {
            el.style.animationDuration = el.clientWidth / 100 + "s";
          }
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
