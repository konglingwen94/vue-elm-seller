<template>
  <div v-show="visible" class="loading">
    <span class="loading-bubbles">
      <!-- 气泡loading -->

      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 30 30"
        style="enable-background:new 0 0 50 50;"
        xml:space="preserve"
        class="loading-bubbles--inner"
      >
        <circle transform="translate(8 0)" cx="0" cy="16" r="0">
          <animate
            attributeName="r"
            values="0; 4; 0; 0"
            dur="1.2s"
            repeatCount="indefinite"
            begin="0"
            keytimes="0;0.2;0.7;1"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8"
            calcMode="spline"
          />
        </circle>
        <circle transform="translate(16 0)" cx="0" cy="16" r="0">
          <animate
            attributeName="r"
            values="0; 4; 0; 0"
            dur="1.2s"
            repeatCount="indefinite"
            begin="0.3"
            keytimes="0;0.2;0.7;1"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8"
            calcMode="spline"
          />
        </circle>
        <circle transform="translate(24 0)" cx="0" cy="16" r="0">
          <animate
            attributeName="r"
            values="0; 4; 0; 0"
            dur="1.2s"
            repeatCount="indefinite"
            begin="0.6"
            keytimes="0;0.2;0.7;1"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8"
            calcMode="spline"
          />
        </circle>
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return { visible: false };
  },
  //   props: {
  //     type: String,
  //     radius: {
  //       type: Number,
  //       default: 100,
  //     },
  //     strokeWidth: {
  //       type: Number,
  //       default: 5,
  //     },
  //     strokeColor: {
  //       type: String,
  //       default: "#efefef",
  //     },
  //   },
};
</script>

<style lang="less">
.loading {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &-bubbles {
    text-align: center;
    display: block;
    &--inner {
      width: 100px;
    }
  }
}
</style>
