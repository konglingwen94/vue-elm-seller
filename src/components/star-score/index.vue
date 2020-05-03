<template>
  <div class="star-score">
    <span :class="dynamicClass(item)" v-for="item in 5" class="star-score-item" :key="item">★</span>
    <!-- <span class="star-score-item">★</span> -->
  </div>
</template>
<script>
export default {
  name: "star-score",
  props: {
    score: {
      type: Number,
      default: 0
    }
  },
  methods: {
    dynamicClass(item) {
      return { highlight: item <= Math.round(this.score) };
    }
  }
};
</script>
<style lang="less" scoped>
.star-score {
  font-size: 40px;
  color: #454e57;
  &-item {
    margin: 0 3px;
    &.highlight {
      color: #ff9400;
    }
  }
}
</style>