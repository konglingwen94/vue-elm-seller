<template>
  <div class="shopping-card">
    <div class="cart">
      <div class="cart-icon">
        <img src="./shopping_cart.svg" alt />
      </div>
      <span class="cart-price">￥ 0</span>
    </div>
    <div class="desc">另需配送费￥4元</div>
    <div class="minprice">
      <span class="text">20元起送</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.shopping-card {
  display: flex;
  justify-content: space-between;
  max-height: 100px;
  height: 100%;
  background: #07111b;
  align-items: center;
  color: #999;
}
.cart {
  position: relative;
  width: 30%;
  margin-left: 34px;
  .cart-icon {
    display: inline-block;
    
    border: 10px solid rgba(7, 17, 27, 1);
    border-radius: 50%;
    position: absolute;
    top: -60px;
    padding: 25px;
    width: 120px;
    height: 120px;
    background: #333;
    margin-right: 4px;
    //   display:flex;
    img {
      width: 50px;
      height: 50px;
    }
  }
  &-price {
    font-size: 32px;
    color: #999;
    font-weight: 800;
    margin-left: 140px;
    //   float:right;
  }
}
.desc {
  width: 40%;
  text-align: center;
  border-left: 1px solid;
}
.minprice {
  width: 30%;
  background-color: rgba(43, 51, 59, 1);
  height: 100%;
  line-height: 94px;
  text-align: center;
}
</style>