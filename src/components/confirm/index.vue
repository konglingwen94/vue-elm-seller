<template>
  <transition>
    <div class="confirm" v-if="visible">
      <div class="content">
        <div class="content-title">{{ title }}</div>
        <div class="content-action">
          <div class="cancel" @click="$emit('cancel')">{{ cancelButtonText }}</div>
          <div class="submit" @click="$emit('confirm')">{{ confirmButtonText }}</div>
        </div>
      </div>
    </div>
    </transition>
</template>

<script>
export default {
  name: "confirm",
  data() {
    return { visible: false };
  },
  methods: {
    destroy() {
      document.body.removeChild(this.$el);
    },
  },
};
</script>
<style lang="less" scoped>
.v-enter-active {
  transition: all 0.4s;
  .content {
    transition: transform 0.4s;
  }
}
.v-enter {
  opacity: 0;
  .content {
    transform: scale(0);
  }
}

.confirm {
  z-index: 999999;
  touch-action: none;
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
      line-height: 5em;
    }
    &-action {
      border-top: 1px solid #cdcdcd;
      overflow: hidden;
      div {
        float: left;
        width: 50%;
        line-height: 2.7em;
        padding: 20px;
        &.cancel {
          border-right: 1px solid #ddd;
        }
        &.submit {
          color: orange;
        }
      }
    }
  }
}
</style>
