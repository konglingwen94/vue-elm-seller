export default (Vue) => {
  Vue.directive("ellipsis", function(el, vnode) {
    el.style.whiteSpace = "nowrap";
    el.style.overflow = "hidden";
    el.style.textOverflow = "ellipsis";
  });
};
