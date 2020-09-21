<template>
  <div class="wrapper" v-if="!loading">
    <div class="goods">
      <scroll class="menu">
        <ul class="menu-list">
          <li
            @tap="selectMenu(index)"
            class="menu-item"
            :class="{ selected: currentIndex === index }"
            v-for="(item, index) in data"
            :key="index"
          >
            <icon
              v-if="item.type > 0"
              :name="getIconName(item.type)"
              width="24"
              height="24"
            />
            <span>{{ item.name }}</span>
            <span v-if="shopGoodsCount[index] > 0" class="shop_goods_count">{{
              shopGoodsCount[index]
            }}</span>
          </li>
        </ul>
      </scroll>
      <div class="foodsScroll-wrapper">
        <!-- 固定在顶部的食品类型名称 -->
        <div ref="stickyTitle" class="foods-title--sticky">
          {{ data[currentIndex].name }}
        </div>
        <scroll ref="foodsScroll" @scroll="onFoodScroll" class="foods">
          <ul class="foods-list">
            <li
              ref="foodsGroup"
              class="foods-group"
              v-for="(item, index) in data"
              :key="index"
            >
              <dl class="foods-group-wrapper">
                <dt class="foods-group-name">
                  {{ item.name }}
                </dt>

                <dd
                  @click="forward(food)"
                  class="foods-group-item"
                  v-for="(food, key) in item.foods"
                  :key="key"
                >
                  <div class="cover">
                    <img :src="food.image" alt />
                  </div>
                  <div class="intro">
                    <h3 class="title">{{ food.name }}</h3>
                    <p class="desc">{{ food.description }}</p>
                    <div class="statistics">
                      <span>月售{{ food.sellCount }}份</span>
                      <span>好评率100%</span>
                    </div>
                    <div class="price-wrapper">
                      ￥
                      <span class="price">{{ food.price }}</span>
                      <del v-if="food.oldprice" class="oldprice"
                        >￥{{ food.oldProce }}</del
                      >
                    </div>

                    <div class="picker-wrapper">
                      <food-picker
                        :food-info="shopGoods[index].foods[key]"
                      ></food-picker>
                    </div>
                  </div>
                </dd>
              </dl>
            </li>
          </ul>
        </scroll>
      </div>
    </div>
    <div class="shopping-cart-wrapper">
      <shopping-cart
        @clear="clearShoppingCart"
        :selected-foods="shoppingCartFoods"
      ></shopping-cart>
    </div>
    <div v-if="showFoodDetail" class="food-detail-wrapper">
      <scroll>
        <food-detail @backward="backward" :data="currentFood"></food-detail>
      </scroll>
    </div>
  </div>
</template>
<script>
import request from "@/request";
import FoodPicker from "@/components/food-picker";
import ShoppingCart from "@/components/shopping-cart";
import FoodDetail from "@/views/food-detail";

export default {
  components: {
    FoodPicker,
    ShoppingCart,
    FoodDetail,
  },
  data() {
    return {
      stickyElmHeight: 0,
      showFoodDetail: false,
      data: [],
      sectionHeight: [0],
      currentIndex: 0,
      currentFood: {},
      loading: false,
    };
  },

  computed: {
    shopGoodsCount() {
      return this.shopGoods.map((good) => {
        return good.foods.reduce((prev, food) => {
          return prev + food.count;
        }, 0);
      });
    },
    shoppingCartFoods() {
      const shoppingCartFoods = [];
      this.shopGoods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count > 0) {
            shoppingCartFoods.push(food);
          }
        });
      });
      return shoppingCartFoods;
    },
    shopGoods() {
      try {
        var copyData = this.data;
      } catch (error) {
        return [];
      }

      for (let index = 0; index < copyData.length; index++) {
        this.$set(copyData[index], "count", 0);
        for (let j = 0; j < copyData[index].foods.length; j++) {
          this.$set(copyData[index].foods[j], "count", 0);
        }
      }

      return copyData;
    },
  },
  methods: {
    getIconName(type) {
      switch (type) {
        case 1:
          return "discount";
        case 2:
          return "special";
        case 3:
          return "invoice";
        case 4:
          return "guarantee";
      }
    },
    forward(food) {
      this.showFoodDetail = true;
      this.currentFood = food;
    },
    backward() {
      this.currentFood = {};
      this.showFoodDetail = false;
    },
    clearShoppingCart() {
      this.data.forEach((good) => {
        good.foods.forEach((food) => {
          food.count = 0;
        });
      });
    },
    selectMenu(index) {
      const target = this.$refs.foodsGroup[index];
      this.$refs.foodsScroll.scrollToElement(target, 300);
      this.currentIndex = index;
    },
    onFoodScroll({ x, y }) {
      const distanceY = Math.abs(Math.round(y));
      const elm = this.$refs.stickyTitle;
     
      if (y > 0) {
        elm.style.setProperty("display", "none");
      } else {
        elm.style.removeProperty("display");
      }
      for (let index = 0; index < this.sectionHeight.length; index++) {
        if (
          distanceY >= this.sectionHeight[index] &&
          distanceY < this.sectionHeight[index + 1]
        ) {
          this.currentIndex = index;
          elm.style.transform = "translateY(0)";
        } else if (
          distanceY >= this.sectionHeight[index] - this.stickyElmHeight &&
          distanceY < this.sectionHeight[index]
        ) {
          const translateY =
            this.sectionHeight[index] - this.stickyElmHeight - distanceY;

          elm.style.transform = `translateY(${translateY}px)`;
        }
      }
    },
  },

  created() {
    this.loading = true;
    request
      .get("/goods")
      .then((response) => {
        this.data = response;
        this.loading = false;
      })
      .then(() => {
        setTimeout(() => {
          const sections = this.$refs.foodsGroup;

          sections.reduce((prevTotal, current) => {
            const sectionHeight = prevTotal + current.clientHeight;
            this.sectionHeight.push(sectionHeight);

            return sectionHeight;
          }, 0);

          this.stickyElmHeight = this.$refs.stickyTitle.clientHeight;
        });
      })
      .catch((err) => {
        this.loading = false;
      });
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  height: 100%;
}
.goods {
  position: relative;
  display: flex;
  width: 100%;
  height: calc(100% - 97px);
}
.menu {
  width: 160px;
  height: 100%;
  &-list {
    text-align: center;
  }
  &-item {
    padding: 40px 20px;
    border-bottom: 1px solid #eee;
    background: #f3f5f7;
    position: relative;
    &.selected {
      background: #fff;
    }
    .shop_goods_count {
      position: absolute;
      top: 5px;
      right: 5px;
      width: 40px;
      line-height: 39px;
      border-radius: 19px;
      background: red;
      color: #fff;
    }
  }
}
.foodsScroll-wrapper {
  overflow: hidden;
  position: relative;
}
.foods {
  flex: 1;
  &-title--sticky {
    position: absolute;
    width: 100%;
    z-index: 1;
    line-height: 0.666667rem;
    background: #eee;
    border-left: 0.04rem solid #ccc;
    padding-left: 0.12rem;
    color: #93999f;
  }
  &-group {
    &-name {
      line-height: 50px;
      background: #eee;
      border-left: 3px solid #ccc;
      padding-left: 9px;
      color: #93999f;
    }
    &-item {
      padding: 20px 0;
      margin: 0 20px;
      background: #fff;
      display: flex;
      border-bottom: 1px solid #d9dde1;
      .cover img {
        width: 114px;
        height: 114px;
      }
      .intro {
        position: relative;
        margin-left: 18px;
        flex: 1;
        > * {
          margin-bottom: 12px;
        }
        .desc {
          font-size: 20px;
          color: #93999f;
        }
        .statistics {
          color: #93999f;
          font-size: 20px;
        }
        .price-wrapper {
          font-size: 20px;
          color: red;
          .price {
            font-size: 29px;
            margin-right: 8px;
            margin-left: -4px;
          }
          .oldprice {
            color: #93999f;
          }
        }

        .picker-wrapper {
          width: 130px;
          position: absolute;
          right: 30px;
          bottom: -9px;
        }
      }
    }
  }
}

.shopping-cart-wrapper {
  height: 97px;
}

.food-detail-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 95px;
  background: #fff;
  z-index: 888;
  height: calc(100vh - 96px);
}
</style>
