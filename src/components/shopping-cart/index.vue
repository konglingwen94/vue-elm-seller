<template>
  <div class="shopping-card"  >
    <div class="cart" @click="toggle">
      <div class="cart-icon">
        <img src="./shopping_cart.svg" alt />
      </div>
      <span class="cart-price">￥ 0</span>
    </div>
    <div class="desc">另需配送费￥4元</div>
    <div class="minprice"  >
      <span class="text">20元起送</span>
    </div>
    <div class="goods-container" @click.stop v-show="visible">
      <div @click="toggle" class="layer"></div>
      <div class="goods">
        <div class="head">
          <div class="title">购物车</div>
          <div class="clear">清空</div>
        </div>
        <div class="goods-wrapper">
          <scroll>
            <ul class="goods-list">
              <li v-for="(item,index) in 10" :key="index" class="goods-item">
                <div class="name">name</div>
                <span class="price">333</span>

                <div class="action">
                  <food-picker></food-picker>
                </div>
              </li>
            </ul>
          </scroll>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FoodPicker from "@/components/food-picker";
import shoppingStore from "@/store/shopping-cart.js";
export default {
  name: "shopping-cart",
  components: {
    FoodPicker
  },
  data() {
    return {
      goodsList: shoppingStore.goods,
      visible: false
    };
  },
  props: {},
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    }
  }
};
</script>
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
    z-index: 10030;
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
.goods-wrapper {
  height: 400px;
  padding: 20px;
  //   position: relative;
  //   z-index: 10000;
  background: #fff;
}

.layer {
  z-index: 100;
  background: #07111b;
  opacity: 0.5;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 90px;
}

.goods-container {
  position: absolute;
  bottom: 90px;
  width: 100%;
  //   m: 0 20px;
  z-index: 1000;
}

.goods {
  z-index: 10000;
  position: relative;
  .head {
    padding: 20px;

    background-color: rgba(243, 245, 247, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    .clear {
      color: rgb(0, 160, 220);
    }
  }
  &-item {
    display: flex;
    padding: 20px 4px;
    border-bottom: 1px solid #efefef;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    .price {
      margin-left: auto;
      margin-right: 20px;
      color: red;
      font-size: 28px;
    }
    .action {
    }
  }
}
</style>