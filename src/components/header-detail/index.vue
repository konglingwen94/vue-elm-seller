<template>
  <div class="header-detail" @click.stop>
    <div class="header">
      <h1>{{seller.name}}</h1>
      <div class>******</div>
    </div>
    <div class="supports">
      <div class="title-divider">优惠信息</div>
      <div class="supports-content">
        <ul>
          <li v-for="(item ,index) in seller.supports" :key="index" class="supports-content-item">
            <icon name="brand"></icon>
            <span class="text">{{item.description}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="bulletin">
      <div class="title-divider">商家公告</div>
      <div class="bulletin-content">{{seller.bulletin}}</div>
    </div>

    <div class="close">
      <span @click="$emit('close')"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "header-detail",
  props: {
    seller: Object
  }
};
</script>
<style lang="less" scoped>
.header-detail {
  padding: 70px;
  .header {
      text-align: center;
    h1 {
      margin-bottom: 20px;
    }
    margin-bottom:20px;
  }
  .title-divider {
    position: relative;
    text-align: center;
    margin-bottom: 30px;
    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 40%;
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
        line-height: 2em;
        .text {
          margin-left: 7px;
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
  .close {
    margin-top: 40px;
    text-align: center;
    span {
      display: inline-block;
      width: 40px;
      height: 40px;
      transform: rotate(90deg);
      border: 1px solid;
    }
  }
}
</style>