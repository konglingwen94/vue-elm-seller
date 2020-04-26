<template>
  <scroll>
    <div class="shop">
      <div class="header">
        <div class="top">
          <div class="summary">
            <h2 class="title">粥品香坊（大运村）</h2>
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

      <div class="bulletin">
        <h2>公告</h2>
        <p
          class="description"
        >粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深的消费者青睐，发展至今成为粥类引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</p>
        <div class="support">
          <div class="decrease support-item">
            <icon width="32" height="32" name="brand" />
            <span class="support-item-text">在线支付满28减5，满50减10</span>
          </div>
          <div class="decrease support-item">
            <icon width="32" height="32" name="brand" />
            <span class="support-item-text">在线支付满28减5，满50减10</span>
          </div>
          <div class="decrease support-item">
            <icon width="32" height="32" name="brand" />
            <span class="support-item-text">在线支付满28减5，满50减10</span>
          </div>
          <div class="decrease support-item">
            <icon width="32" height="32" name="brand" />
            <span class="support-item-text">在线支付满28减5，满50减10</span>
          </div>
          <!-- <div class="discount discount-one">单人精彩赛</div>
        <div class="discount discount-two">折扣二</div>
        <div class="special special-one">特价1</div>
        <div class="special special-two">特价2</div>
        <div class="invoice">开发票</div>
          <div class="guarantee">外卖保障</div>-->
        </div>
      </div>
      <div class="scene">
        <h2>商家实景</h2>
        <scroll direction="horizontal">
          <img src="https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png" alt />
          <img src="https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png" alt />
          <img src="https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png" alt />
          <img src="https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png" alt />
        </scroll>
      </div>
      <div class="information">
        <h2>商家信息</h2>
        <div class="information-item">该商家支持开发票，请在下单时填写好发票抬头</div>
        <div class="kind information-item">
          <label for>品类</label>
          <span class="text">品类：其他菜系、包子粥店</span>
        </div>
        <div class="address information-item">
          <label for>地址：</label>
          <span>
            北京市昌平区回龙观西大街龙观置业大厦底商B座102
            单元1340
          </span>
        </div>
        <div class="businesshours information-item">
          <label for>营业时间：</label>
          <span class="time">营业时间：10:00 - 20:30</span>
        </div>
      </div>
    </div>
  </scroll>
</template>

<style>
 
</style>
<style scoped lang="less">
.shop {
  height: 100%;
  background: #eee;
  > div {
    padding-left: 20px;
    padding-right: 20px;
    padding-top:20px;
    background-color: #fff;
    margin-bottom: 30px;
    border:1px solid rgba(7, 17, 27, 0.2);
    border-width:1px 0;
  }
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
        margin-left: 9px;
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
  }
}

.information {
  &-item {
    border-top: 1px solid #ccc;
    margin: 12px 0;
    padding:30px 0;
  }
}
</style>