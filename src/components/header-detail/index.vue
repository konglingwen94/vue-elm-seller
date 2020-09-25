<template>
  <div class="header-detail" @click.stop>
    <div class="header">
      <h2>{{ seller.name }}</h2>
      <div class>
        <star-score size="middle" :score="seller.score"></star-score>
      </div>
    </div>
    <div class="supports">
      <h3 class="title-divider">优惠信息</h3>
      <div class="supports-content">
        <ul>
          <li v-for="(item, index) in seller.supports" :key="index" class="supports-content-item">
            <icon height="24" width="24" :name="iconName(item.type)"></icon>
            <span class="text">{{ item.description }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="bulletin">
      <h3 class="title-divider">商家公告</h3>
      <div class="bulletin-content">{{ seller.bulletin }}</div>
    </div>

    <div class="close-wrapper">
      <span class="iconfont close" @click="$emit('close')"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "header-detail",
  props: {
    seller: Object,
  },
  methods: {
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
    },
  },
};
</script>
<style lang="less" scoped>
 
.header-detail {
  padding: 30px 70px;
  .header {
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center;
    h2 {
      margin-bottom: 50px;
    }
  }
  .title-divider {
    position: relative;
    text-align: center;
    margin-bottom: 30px;
    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 35%;
      top: 50%;
      border-top: 2px solid #aaa;
    }

    &:before {
      left: 0;
    }
    &:after {
      right: 0;
    }
  }
  .supports {
    margin: 40px 0;

    &-content {
      &-item {
        margin-bottom: 19px;
        line-height: 1.2em;
        .text {
          margin-left: 7px;
          vertical-align: 2px;
        }
      }
    }
  }

  .bulletin {
    margin-top: 70px;
    &-content {
      line-height: 2em;
    }
  }
  .close-wrapper {
    margin-top: 70px;
    text-align: center;
    span {
      display: inline-block;
      width: 40px;
      height: 40px;
      color: #fff;
      font-size: 50px;
    }
  }
}
</style>
