<template>
  <div class="wrapper">
    <div class="goods">
      <scroll class="menu">
        <ul class="menu-list">
          <li
            @tap="selectMenu(index)"
            class="menu-item"
            :class="{selected:currentIndex===index}"
            v-for="(item,index) in data"
            :key="index"
          >
            <icon v-if="item.type>0" name="brand" width="24" height="24" />
            <span>{{ item.name}}</span>
            <span v-if="shopGoodsCount[index]>0" class="shop_goods_count">{{shopGoodsCount[index]}}</span>
          </li>
        </ul>
      </scroll>
      <scroll ref="foodsScroll" @scroll="onFoodScroll" class="foods">
        <ul class="foods-list">
          <li ref="foodsGroup" class="foods-group" v-for="(item,index) in data" :key="index">
            <dl class="foods-group-wrapper">
              <dt :class="{fixed:currentIndex===index}" class="foods-group-name">{{item.name}}</dt>

              <dd class="foods-group-item" v-for="(food ,key) in item.foods" :key="key">
                <div class="cover">
                  <img :src="food.image" alt />
                </div>
                <div class="intro">
                  <h2 class="title">皮蛋瘦肉粥配包子套餐</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="statistics">
                    <span>月售{{food.sellCount}}份</span>
                    <span>好评率100%</span>
                  </div>
                  <div class="price-wrapper">
                    ￥
                    <span class="price">{{food.price}}</span>
                    <del v-if="food.oldprice" class="oldprice">￥{{food.oldProce}}</del>
                  </div>

                  <div class="picker-wrapper">
                    <food-picker :food-info="shopGoods[index].foods[key]"></food-picker>
                  </div>
                </div>
              </dd>
            </dl>
          </li>
        </ul>
      </scroll>
    </div>
    <div class="shopping-cart-wrapper">
      <shopping-cart :selected-foods="shoppingCartFoods"></shopping-cart>
    </div>

     
  </div>
</template>
<script>
import request from "@/request";
import FoodPicker from "@/components/food-picker";
import ShoppingCart from "@/components/shopping-cart";

export default {
  components: {
    FoodPicker,
    ShoppingCart
  },
  data() {
    return {
      data: [],
      sectionHeight: [0],
      currentIndex: 0,
      // shopGoodsCount:[]
    };
  },
   
  computed: {
    shopGoodsCount(){
      return this.shopGoods.map(good=>{
        return good.foods.reduce((prev,food)=>{
          return prev+food.count
        },0)
      })
    },
    shoppingCartFoods()
    {
      const shoppingCartFoods=[]
      this.shopGoods.forEach(good=>{
        good.foods.forEach(food=>{
          if(food.count>0){
            shoppingCartFoods.push(food)
          }
        })
      })
      return shoppingCartFoods
    },
    shopGoods() {
      try {
        var copyData =  (this.data);
      } catch (error) {
        return [];
      }
      // const shopGoods = [];
      for (let index = 0; index < copyData.length; index++) {
        // const good = { name: copyData[index].name, foods: [],count:0 };
        this.$set(copyData[index],'count',0)
        for (let j = 0; j < copyData[index].foods.length; j++) {
          // good.foods.push({price:copyData[index].foods[j].price,count:0,name:copyData[index].foods[j].name})
          this.$set(copyData[index].foods[j],'count',0)
        }

        // shopGoods.push(good);
      }

      return copyData
    }
  },
  methods: {
    selectMenu(index) {
     
      const target = this.$refs.foodsGroup[index];
      this.$refs.foodsScroll.scrollToElement(target, 300);
      this.currentIndex = index;
    },
    onFoodScroll({ x, y }) {
       
      const distanceY = Math.abs(Math.round(y));
      for (let index = 0; index < this.sectionHeight.length; index++) {
        if (
          distanceY >= this.sectionHeight[index] &&
          distanceY < this.sectionHeight[index + 1]
        ) {
          this.currentIndex = index;
        }
      }
    }
  },
   
  created() {
    request
      .get("/goods")
      .then(response => {
        this.data = response;
      })
      .then(() => {
        setTimeout(() => {
          const sections = this.$refs.foodsGroup;

          sections.reduce((prevTotal, current) => {
            const sectionHeight = prevTotal + current.clientHeight;
            this.sectionHeight.push(sectionHeight);

            return sectionHeight;
          }, 0);
        });
      });
  }
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
.foods {
  flex: 1;

  &-group {
    &-name {
      line-height: 50px;
      background: #eee;
      border-left: 3px solid #ccc;
      padding-left: 9px;
      color: #93999f;
      // &.fixed {
      // position:absolute;
      // width:100%;
      // margin-bottom:40px;
      // left:0;
      // top:0;
      // }
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
</style>