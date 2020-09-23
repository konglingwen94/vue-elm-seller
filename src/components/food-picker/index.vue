<template>
  <div class="food-picker" @click.stop>
    <div v-show="foodInfo.count" class="reduce-wrapper" @click="reduce">
      <i class="iconfont reduce"></i>
    </div>
    <div class="counter" v-show="foodInfo.count">{{foodInfo.count}}</div>
    <div class="add-wrapper" @click="add">
      <i class="iconfont add"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "food-picker",
  props: {
    foodInfo: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    reduce() {
      if (parseInt(this.foodInfo.count) > 0) {
        this.foodInfo.count--;
      }
    },
    add() {
      this.foodInfo.count++;
    }
  }
};
</script>
<style lang="less" scoped>
.food-picker {
  max-width: 200px;

  display: flex;
  align-items: center;
  width: 100%;

  .iconfont {
    color: #00a0dc;
    font-size: 38px;
  }
  .counter {
    margin: 0 30px;
  }
}
</style>