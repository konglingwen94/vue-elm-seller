<template>
  <div class="food-picker">
    <div class="reduce-wrapper">
      <i class="iconfont reduce"></i>
    </div>
    <div class="counter">3</div>
    <div class="add-wrapper">
      <i class="iconfont add"></i>
    </div>
  </div>
</template>
<style lang="less" scoped>
.food-picker {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content:space-between;
  .iconfont {
    color: #00a0dc;
    font-size: 38px;
  }
  .counter {
    // margin: 0 20px;
  }
}
</style>