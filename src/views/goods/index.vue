<template>
  <scroll class="scroll-container">
    <div class="goods">
      <scroll class="menu">
        <ul class="menu-list">
          <li class="menu-item" v-for="(item,index) in data" :key="index">
            <icon v-if="item.type>0" name="brand" width="24" height="24" />
            <span>{{ item.name}}</span>
          </li>
        </ul>
      </scroll>
      <scroll class="foods">
        <ul class="foods-list">
          <li class="foods-group" v-for="(item,index) in data" :key="index">
            <dl class="foods-group-wrapper">
              <dt class="foods-group-name">{{item.name}}</dt>

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
                    <del class="oldprice">￥{{food.oldProce}}</del>
                  </div>
                </div>
              </dd>
            </dl>
          </li>
        </ul>
      </scroll>
    </div>
  </scroll>
</template>
<script>
import request from "@/request";
export default {
  data() {
    return {
      data: []
    };
  },
  created() {
    request.get("/goods").then(response => {
      this.data = response;
    });
  },
  methods: {}
};
</script>
<style  >
.scroll-container {
  height: 100%;
}
.foods {
  height: 2000px;
  border: 1px solid;
}
</style>
<style lang="less" scoped>
.goods {
  display: flex;
}
.menu {
  width: 160px;
  &-list {
    text-align: center;

    // line-height: 100px;
  }
  &-item {
    padding: 40px 20px;
    border-bottom: 1px solid #eee;
  }
}
.foods {
  flex: 1;
  &-list {
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
            margin-left:-4px;
          }
          .oldprice {
            color: #93999f;
          }
        }
      }
    }
  }
}
</style>