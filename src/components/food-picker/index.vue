<template>
  <div class="food-picker">
    <div class="reduce">
      <i class="iconfont reduce"></i>
    </div>
    <div class="counter">3</div>
    <div class="add">
      <i class="iconfont add"></i>
    </div>
  </div>
</template>
<style lang="less" scoped>
.food-picker {
  display: flex;
  align-items: center;
  width: 100%;
  .iconfont {
    color: blue;
    font-size: 30px;
  }
  .counter {
    margin: 0 20px;
  }
}
</style>