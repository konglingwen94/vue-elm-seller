<template>
  <div class="alert">
    <div class="alert-content">
      <div class="title">{{title}}</div>
      <div class="content">{{content}}</div>
      <div @click="submit" class="action">{{buttonText}}</div>
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
      content: ""
    };
  },
  methods: {
    submit() {}
  }
};
</script>
<style lang="less" scoped>
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
    .title {
      font-size: 32px;
      font-weight: 500;
    }
    text-align: center;
    line-height: 4em;
    width: 60%;
    background: #fff;
    border-radius: 5px;
  }
  .action {
    border-top: 1px solid #aaa;
    color: #fc9153;
  }
}
</style>