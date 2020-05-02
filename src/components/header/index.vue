<template>
  <div class="header" @click.stop="showDetail=true">
    <div class="description">
      <div class="left-cover">
        <img :src="seller.avatar" width="100%" height="100%" alt />
      </div>
      <div class="right-intro">
        <div class="top">
          <icon src="./brand" name="brand" width="60" height="36" />
          <span>{{seller.name}}</span>
        </div>
        <div class="middle">{{seller.description}} / {{seller.deliveryTime}}分钟送达</div>
        <div class="bottom">
          <div class="icon">
            <icon name="brand" width="30" height="20"></icon>
            <span>{{seller.supports && seller.supports[0].description}}</span>
          </div>
          <div class="button">
            {{seller.supports && seller.supports.length}}
            <span class="arrow"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-content">
        <icon name="bulletin" width="30" height="20" />
        <span v-ellipsis>{{seller.bulletin}}</span>
        <i class="arrow"></i>
      </div>
    </div>

    <div class="detail-wrapper" v-show="showDetail">
      <header-detail @close="close" :seller="seller"></header-detail>
    </div>
  </div>
</template>

<script>
import HeaderDetail from "@/components/header-detail";
export default {
  name: "shop-header",
  props: {
    seller: Object
  },
  data() {
    return {
      showDetail: false
    };
  },
  components: {
    HeaderDetail
  },
  methods: {
    close() {
      console.log('close')
      this.showDetail = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header {
  background-color: rgba(7, 17, 27, 0.5);
  color: #fff;
}
.description {
  padding: 48px 24px 0 49px;
  display: flex;
  height: 210px;
}
.left-cover {
  width: 129px;
  height: 129px;
  margin-right: 30px;
}
.right-intro {
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 130px;
  .bottom {
    display: flex;
    align-items: center;

    .button {
      background: #ccc;
      border-radius: 24px;
      width: 85px;
      line-height: 45px;
      height: 45px;
      text-align: center;

      margin-left: auto;
      background-color: rgba(0, 0, 0, 0.2);
      .arrow {
        border: 1px solid;
        border-width: 1px 1px 0 0; /*no */
        display: inline-block;
        width: 10px;
        height: 10px;
        transform: rotate(45deg) translateY(-7px);
      }
    }
  }
  .icon {
    img {
      margin-right: 10px;
      vertical-align: text-bottom;
    }
  }
}

.footer {
  background: rgba(7, 17, 27, 0.2);
  padding: 10px;

  &-content {
    display: flex;
    align-items: center;

    span {
      margin-left: 10px;
      flex: 1;
    }
    .arrow {
      margin-left: auto;
      border: 1px solid;
      border-width: 1px 1px 0 0; /*no */

      color: white;
      display: inline-block;
      width: 20px;
      height: 20px;
      transform: rotate(45deg);
    }
  }
}
.detail-wrapper {
  position: fixed;
  touch-action: none;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100000;
}
</style>
