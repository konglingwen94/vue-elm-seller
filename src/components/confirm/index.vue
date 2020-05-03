<template>
  <div class="confirm">
    <div class="content">
      <div class="content-title">{{title}}</div>
      <div class="content-action">
        <div class="cancel" @click="cancel">{{cancelButtonText}}</div>
        <div class="submit" @click="submit">{{confirmButtonText}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "confirm",
  methods: {
    destroy() {
      document.body.removeChild(this.$el);
    }
  }
};
</script>
<style lang="less" scoped>
.confirm {
  z-index: 999999;
  touch-action:none;
  display: flex;
  text-align: center;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  &:before {
    // content: "";
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
  }

  .content {
    width: 550px;
    margin: auto;
    border-radius: 4px;
    background: #fff;
    &-title {
      line-height: 4em;
    }
    &-action {
      border-top: 1px solid #aaa;
      overflow: hidden;
      div {
        float: left;
        width: 50%;
        line-height: 2em;
        padding: 20px;
        &.cancel {
          border-right: 1px solid #aaa;
        }
        &.submit {
          color: orange;
        }
      }
    }
  }
}
</style>