<template>
  <div @animationend="animationend" class="alert">
    <div class="alert-content">
      <div class="title">{{ title }}</div>
      <div class="desc">{{ content }}</div>
      <div @click="$emit('submit')" class="action">{{ buttonText }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "alert",
  data() {
    return {
      title: "",
      buttonText: "",
      content: "",
    };
  },
  methods: {
    animationend(e) {
      e.target.classList.remove("animation-enter");
    },
  },
};
</script>
<style lang="less" scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  
}

@keyframes scale {
   
  70% {
    transform: scale(1.3);
  }
 
}
.animation-enter {
  animation: fadeIn .3s;
  .alert-content {
    animation: scale 0.3s linear;
  }
}

.alert {
  background: rgba(0, 0, 0, 0.6);
  z-index: 888888;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  touch-action: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &-content {
    padding-top: 20px;
    .title {
      font-size: 32px;
      font-weight: 500;
      margin-bottom: -32px;
    }
    text-align: center;
    line-height: 4em;
    width: 70%;
    background: #fff;
    border-radius: 5px;

    .desc {
      font-size: 24px;
      color: #555;
    }
    .action {
      border-top: 1px solid #e4e0e0 /*px*/;
      border-width: 1px; /*px*/
      color: #fc9153;
      font-size: 32px;
    }
  }
}
</style>
