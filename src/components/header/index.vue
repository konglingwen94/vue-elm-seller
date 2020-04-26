<template>
  <div class="header">
    <div class="description">
      <div class="left-cover"></div>
      <div class="right-intro">
        <div class="top">
          <icon src="./brand" name="brand" width="60" height="36" />
          <span>粥品香坊（大运村）</span>
        </div>
        <div class="middle">蜂鸟专送 / 38分钟送达</div>
        <div class="bottom">
          <div class="icon">
              <icon name="brand" width="30" height="20"></icon>
            <span>在线支付满28减5，满50减10</span>
          </div>
          <div class="button">
            4
            <span class="arrow"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-content">
        <icon name="brand" width="30" height="20" />
        <span
          v-ellipsis
        >粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span>
        <i class="arrow"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shop-header",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header {
  background-color:rgba(7, 17, 27, 0.5);
  color:#fff;
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
  background-image: url(http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg);
}
.right-intro {
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height:130px;
  .bottom {
    display: flex;
    align-items: center;
    .icon {
      // float: left;
    }
    .button {
      background: #ccc;
      border-radius: 24px;
      width: 85px;
      line-height: 45px;
      height: 45px;
      text-align: center;
       
      margin-left: auto;
        background-color:rgba(0,0,0,.2);
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
  // height: 56px;
  
  
  &-content {
   
    display: flex;
    align-items: center;

    span {
      margin-left: 10px;
      flex:1;
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
</style>
