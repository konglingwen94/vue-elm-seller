<template>
  <span class="star-score">
    <span
      :class="dynamicClass(item)"
      v-for="item in 5"
      class="star-score-item"
      :key="item"
      >★</span
    >
    <!-- <span class="star-score-item">★</span> -->
  </span>
</template>
<script>
export default {
  name: "star-score",
  props: {
    score: {
      type: Number,
      default: 0,
    },
    size: {
      type: String,
      validator(value) {
        return ["mini", "small", "normal", "middle", "large"].includes(value);
      },
      default: "normal",
    },
  },
  methods: {
    dynamicClass(item) {
      return [this.size, { highlight: item <= Math.round(this.score) }];
    },
  },
};
</script>
<style lang="less" scoped>
.star-score {
  color: #d4d6d9;
  &-item {
    margin: 0 3px;
    &.highlight {
      color: #ff9400;
    }
    &.normal {
      font-size: 30px;
    }
    &.middle {
      font-size: 40px;
    }
    &.large {
      font-size: 50px;
    }
    &.small {
      font-size: 20px;
    }
    &.mini {
      font-size: 14px;
    }
  }
}
</style>
