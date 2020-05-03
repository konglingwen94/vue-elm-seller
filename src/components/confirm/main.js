import Vue from "vue";
import Confirm from "./index.vue";

const ConfirmCtor = Vue.extend(Confirm);

const defaultOpts = {
  cancelButtonText: "取消",
  confirmButtonText: "确定",
};

const createConfirm = (title, options) => {
  const mergedOptions = Object.assign({}, defaultOpts, options);

  let confirmCallback, cancelCallback;
  const instance = new ConfirmCtor({
    el: document.createElement("div"),
    data: {
      title,
      ...mergedOptions,
    },
    methods: {
      submit() {
        confirmCallback.call(this);
      },
      cancel() {
        cancelCallback.call(this);
      },
    },
  });
  document.body.appendChild(instance.$el);
  return new Promise((resolve, reject) => {
    confirmCallback = function() {
      resolve('confirm');
      this.destroy();
    };

    cancelCallback = function() {
      reject('cancel');
      this.destroy();
    };
  });
};

export default {
  install(Vue) {
    Vue.prototype.$confirm = createConfirm;
  },
};
