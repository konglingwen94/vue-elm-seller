<template>
  <scroll>
    <div class="shop">
      <div class="header">
        <div class="top">
          <div class="summary">
            <h2 class="title">{{seller.name}}</h2>
            <div class="kpi">
              <div class="score">*****</div>
              <div class="order">({{seller.ratingCount}}) 月售{{seller.sellCount}}单</div>
            </div>
          </div>
          <div class="favorite-wrapper">
            <i @click="toggle" :class="{'is-like':isLike}" class="iconfont favorite"></i>
            <div class>收藏</div>
          </div>
        </div>
        <hr />
        <div class="delivery">
          <div class="starting-price">
            <div>起送价</div>
            <span>{{seller.minPrice}}</span>元
          </div>
          <div class="freight">
            <div class>商家配送</div>
            <span>{{seller.deliveryPrice}}</span>元
          </div>
          <div class="time">
            <div>配送时间</div>
            <span>{{seller.deliveryTime}}</span>分钟
          </div>
        </div>
      </div>

      <div class="bulletin">
        <h2>公告</h2>
        <p class="description">{{seller.bulletin}}</p>
        <ul class="support">
          <li v-for="(item,index) in seller.supports" :key="index" class="decrease support-item">
            <icon width="32" height="32" :name="iconName(item.type)" />
            <span class="support-item-text">{{item.description}}</span>
          </li>
        </ul>
      </div>
      <div class="scene">
        <h2>商家实景</h2>
        <scroll direction="horizontal">
          <ul class="content">
            <li class="content-item" v-for="(pic ,index) in seller.pics" :key="index">
              <img :src="pic" alt />
            </li>
          </ul>
        </scroll>
      </div>
      <div class="information">
        <h2>商家信息</h2>
        <ul>
          <li class="information-item" v-for="(info,index) in seller.infos" :key="index">{{info}}</li>
        </ul>
      </div>
    </div>
  </scroll>
</template>

<script>
export default {
  name: "page-shop",
  data() {
    return {
      get isLike() {
        try {
          var seller = JSON.parse(window.localStorage.getItem("seller"));
        } catch (error) {
          console.error(error);
          return false;
        }

        return seller && seller.isLike;
      },
      set isLike(value) {
        const seller = JSON.parse(window.localStorage.getItem("seller")) || {};
        seller.isLike = value;
        window.localStorage.setItem("seller", JSON.stringify(seller));
      }
    };
  },
  props: {
    seller: Object
  },
  methods: {
    toggle() {
      this.isLike = !this.isLike;
    },
    iconName(type) {
      switch (type) {
        case 0:
          return "decrease";
        case 1:
          return "discount";
        case 2:
          return "special";
        case 3:
          return "invoice";
        case 4:
          return "guarantee";
      }
    }
  }
};
</script>
<style scoped lang="less">
.shop {
  height: 100%;
  background: #eee;
  > div {
    padding: 36px 38px;
    background-color: #fff;
    margin-bottom: 30px;
    border: 1px solid rgba(7, 17, 27, 0.2);
    border-width: 1px 0;
    h2 {
      margin-bottom: 22px;
      font-size: 28px;
    }
  }
}

.header {
  padding: 34px;
  font-size: 20px;
  .top {
    display: flex;
    width: 100%;
    height: 50%;
    justify-content: space-between;
    .summary {
      width: 70%;
      .title {
        margin-bottom: 20px;
      }
      .kpi {
        display: flex;
        .score {
          margin-right: 100px;
        }
      }
    }

    .favorite-wrapper {
      margin-right: 10px;
      margin-top: 4px;
      text-align: center;
      .iconfont {
        display: inline-block;
        width: 45px;
        height: 44px;
        font-size: 40px;
        &.is-like {
          color: red;
        }
      }
      .text {
        text-align: center;
      }
    }
  }
  hr {
    margin: 30px 0;
    // width:85%;
  }
  .delivery {
    display: flex;
    width: 100%;
    justify-content: space-beteen;
    text-align: center;
    .freight {
      border: 1px solid #ccc;
      border-width: 0 1px;
    }
    & > div {
      width: 33%;
      :first-child {
        margin-bottom: 10px;
      }
      & > span {
        font-size: 48px;
      }
    }
  }
}

.bulletin {
  padding: 30px;
  .description {
    padding-left: 9px;
    line-height: 2em;
    color: #f01414;
  }
  .support {
    .support-item {
      &-text {
        margin-left: 4px;
        vertical-align: super;
      }
      padding-left: 4px;
      padding-top: 34px;
      padding-bottom: 34px;

      border-bottom: 1px solid rgba(7, 17, 27, 0.1);

      margin-bottom: 10px;
    }
  }
}

.scene {
  padding: 20px;
  // h1 {
  // }
  .content {
    display: flex;
    &-item {
      margin: 0 10px;
    }
    img {
      width: 250px;
      height: 180px;
    }
  }
}

.information {
  &-item {
    border-top: 1px solid #ccc;
    margin: 12px 0;
    padding: 30px 0;
    line-height: 1.4em;
  }
}
</style>