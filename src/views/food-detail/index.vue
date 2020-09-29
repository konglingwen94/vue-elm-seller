<template>
  <div class="food-detail">
    <div class="header">
      <div @click="$emit('backward')" class="backward">
        <i class="backward-arrow"></i>
      </div>
      <div class="cover">
        <img width="100%" height="100%" :src="data.image" alt />
      </div>

      <div class="content">
        <h2 class="title">{{ data.name }}</h2>
        <div class="desc">
          <span class="sell-count">月售{{ data.sellCount }}份</span>
          <span class="rate">好评率{{ data.rating }}%</span>
        </div>
        <div class="buy">
          <span class="price">￥{{ data.price }}</span>
          <del v-if="data.oldPrice" class="oldprice">￥{{ data.oldPrice }}</del>
          <transition name="fade">
            <span v-show="data.count === 0" class="action-button" @click="addToCart">加入购物车</span>
          </transition>
          <transition name="fade">
            <food-picker v-show="data.count > 0" :food-info="data" class="action-foodPicker"></food-picker>
          </transition>
        </div>
      </div>
    </div>
    <div v-if="data.info" class="info">
      <h2>商品简介</h2>
      <span class="text">{{ data.info }}</span>
    </div>
    <div class="ratings-wrapper">
      <h3>商品评价</h3>
      <rating :rate-type-labels="['全部', '推荐', '吐槽']" :data="data.ratings"></rating>
    </div>
  </div>
</template>
<script>
import FoodPicker from "@/components/food-picker";
import Rating from "@/components/rating";
export default {
  components: {
    FoodPicker,
    Rating,
  },
  name: "food-detail",
  props: {
    data: Object,
  },
  methods: {
    addToCart() {
      this.data.count++;
    },
  },
};
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.food-detail {
  background: #efefef;
}
.header {
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  background: #fff;
  .backward {
    position: absolute;
    left: 20px;
    top: 20px;
    z-index: 100;
    padding: 20px;
  }
  .backward-arrow {
    display: inline-block;

    width: 28px;
    height: 28px;
    border: 3px solid #fff;
    border-width: 2px 2px 0 0;
    transform: rotate(-135deg);
  }

  .cover {
    height: 500px;
    width: 100%;
  }

  .content {
    padding: 20px 30px;

    .desc {
      font-size: 20px;
      color: #ccc;
      margin: 20px 0;
      .sell-count {
        margin-right: 12px;
      }
    }
    .buy {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .price {
        color: red;
        font-size: 30px;
      }
      .action-foodPicker {
        position: absolute;
        right: 0;
        bottom: 0;
      }
      .action-button {
        position: absolute;
        right: 0px;
        bottom: 0px;
        padding: 10px 20px;
        display: inline-block;
        border-radius: 20px;
        text-align: center;
        background: lightblue;
      }
    }
  }
}
.info {
  border: 1px solid #ccc;
  border-width: 1px 0;
  h2 {
    margin-bottom: 20px;
    font-size: 28px;
  }
  .text {
    padding-left: 10px;
    line-height: 25px;
  }
  padding: 20px;
  background: #fff;
}
.ratings-wrapper {
  h3 {
    padding: 20px;
  }
  margin-top: 30px;
  border-top: 1px solid #ccc;
  background: #fff;
}
</style>
