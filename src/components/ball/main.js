import Vue from "vue";
import Ball from "./main.vue";

const BallCtor = Vue.extend(Ball);

const defaults = { duration: "1000ms" };

export default function createBall(opts = {}) {
  opts = Object.assign(defaults, opts);
  const instance = new BallCtor();
  const { duration } = opts;

  instance.$mount();
   

  const outer = instance.$refs.outer;
  const inner = instance.$refs.inner;

  outer.style.left = `${opts.startX}px`;
  outer.style.top = `${opts.startY}px`;

  outer.style.transition = `transform ${duration} linear`;
  inner.style.transition = `transform ${duration} cubic-bezier(0.14, -0.43, 1, 0.18)`;

  document.body.appendChild(instance.$el);

  setTimeout(() => {
    outer.style.transform = `translateX(${opts.endX - opts.startX}px)`;
    inner.style.transform = `translateY(${opts.endY - opts.startY}px)`;
  }, 30);

  outer.addEventListener("transitionend", () => {
    outer.remove();
  });
   

  return instance;
}
