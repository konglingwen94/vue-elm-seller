<template>
  <scroll class="shop-scroll-container">
    <div class="header">
      <div class="top">
        <div class="summary">
          <div class="title">粥品香坊（大运村）</div>
          <div class="kpi">
            <div class="score">*****</div>
            <div class="order">(661) 月售690单</div>
          </div>
        </div>
        <div class="favorite">
          <div class="iconfont iconlove"></div>收藏
        </div>
      </div>
      <hr />
      <div class="delivery">
        <div class="starting-price">
          <div>起送价</div>
          <span>20</span>元
        </div>
        <div class="freight">
          <div class>商家配送</div>
          <span>4</span>元
        </div>
        <div class="time">
          <div>配送时间</div>
          <span>40</span>分钟
        </div>
      </div>
    </div>

    <div class>公告</div>
    <div class>实景</div>
    <div class>信息</div>
  </scroll>
</template>
<style scoped lang="less">
.shop-scroll-container {
  height: 100%;
}
div.shop {
  height: 2000px;
  border: 1px solid red; /*no*/
}
.header {
  height: 300px;
  padding: 34px;
  hr {
    width: 90%;
  }
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

    .favorite {
      text-align: center;
    }
  }
  hr {
    margin: 30px 0;
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
        font-size: 40px;
      }
    }
  }
}
</style>