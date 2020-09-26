import Vue from "vue";
import Confirm from "./index.vue";

const ConfirmCtor = Vue.extend(Confirm);

const defaultOpts = {
  cancelButtonText: "取消",
  confirmButtonText: "确定",
};

const createConfirm = (title, options) => {
  const mergedOptions = Object.assign({}, defaultOpts, options);

  const instance = new ConfirmCtor({
    el: document.body.appendChild(document.createElement("div")),
    data: {
      title,
      ...mergedOptions,
    },
  });
   
  instance.visible = true;
  
  return new Promise((resolve, reject) => {
    instance
      .$on("confirm", () => {
        resolve("confirm");

        instance.destroy();
      })
      .$on("cancel", function() {
        reject("cancel");

        instance.destroy();
      });
  });
};

export default {
  install(Vue) {
    Vue.prototype.$confirm = createConfirm;
  },
};
