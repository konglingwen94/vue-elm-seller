<template>
  <scroll class="ratings-scroll-container">
    <div class="ratings">
      <div class="ratings-overview">
        <div class="score">
          <span class="score-number">4</span>
          <h2>综合评估</h2>
          <p class="footnote">高于周边商家69.2%</p>
        </div>

        <div class="vote">
          <div class="vote-item attitude">
            <label for>服务态度</label>
            *******
          </div>
          <div class>
            <label for>服务态度</label>
            *******
          </div>
          <div class="transporttime vote-item">
            <label for>配送时间</label>
            <span>30</span>
            分钟
          </div>
        </div>
      </div>

      <div class="ratings-content">
        <div class="ratings-content-filter">
          <ul class="filter-options">
            <li class="filter-options-item all">
              <span>全部</span>
              4
            </li>
            <li class="filter-options-item satisfied">
              <span>满意</span>
              4
            </li>
            <li class="filter-options-item dissatisfied">
              <span>不满意</span>
              43
            </li>
          </ul>
          <div class="filter-switch">
            <i @touchstart.stop="toggleSwitch" :class="{'on':switchStatus}" class="iconfont select"></i>
            <span>只看有内容的评价</span>
          </div>
        </div>

        <ul class="ratings-content-list">
          <li class="ratings-content-list-item">
            <!-- <div> -->
            <img
              class="avatar"
              width="100%"
              height="100%"
              src="https://img.php.cn/upload/article/000/000/006/5ea01d953886a268.jpg"
              alt
            />
            <!-- </div> -->
            <div class="information">
              <div class="top">
                <h3 class="nickname">nickname</h3>
                <time>{{new Date().toLocaleString()}}</time>
              </div>
              <div class="sub-desc">
                <span class="score">******</span>
                <span class="deliverytime">90分钟送达</span>
              </div>
              <div
                class="content"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis voluptas voluptatibus error obcaecati iure vel possimus quisquam reprehenderit corrupti culpa quidem, quaerat ullam officiis porro! Architecto quasi in modi.</div>
              <div class="goods">
                <i class="iconfont thumb-up"></i>
                <ul class="goods-list">
                  <li class="goods-item">八宝粥</li>
                  <li class="goods-item">八宝粥</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </scroll>
</template>
<script>
export default {
  name: "page-ratings",
  data() {
    return {
      switchStatus: false
    };
  },
  methods: {
    toggleSwitch() {
      this.switchStatus = !this.switchStatus;
    }
  }
};
</script>
<style scoped lang="less">
.ratings-scroll-container {
  height: 100%;
}

.ratings-overview {
  display: flex;
  padding: 35px 45px;
  .score {
    width: 35%;
    text-align: center;
    padding-right: 10px;
    border-right: 1px solid #ccc;
    span {
      font-size: 40px;
      color: #ff9900;
    }

    .footnote {
      font-size: 20px;
      color: #93999f;
    }
  }
  .vote {
    padding-left: 50px;
    &-item {
      label {
        margin-right: 23px;
      }
      margin: 10px 0;
      padding: 10px 0;
    }
  }
}

.ratings-content > * {
  margin: 34px;
}

.ratings-content-filter {
  .filter-options {
    border-bottom: 1px solid #ccc;
    display: flex;
    padding: 38px 0;
    &-item {
      width: 120px;
      line-height: 60px;
      text-align: center;
      margin-right: 30px;
      border-radius: 8px;
      color: #fff;
      &.all {
        background-color: #00a0dc;
      }
      &.satisfied {
        background-color: #00a0dc;
      }
      &.dissatisfied {
        background-color: rgba(147, 153, 159, .1);
        color: #4d555d;
      }
    }
  }
  .filter-switch {
    padding: 30px 0;
    .select {
      cursor: pointer;
      vertical-align: bottom;
      margin-right: 4px;
      font-size: 30px;
      &.on {
        color: green;
      }
    }
  }
}
.ratings-content-list {
  &-item {
    display: flex;
    .avatar {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      margin-right: 20px;
    }
    .information {
      .top {
        display: flex;
        justify-content: space-between;
      }
      .sub-desc {
        margin: 12px 0;
        .score {
          margin-right: 10px;
        }
      }
      .content {
        margin: 14px 0;
      }
      .goods {
        .iconfont {
          font-size: 24px;
          float: left;
          margin-right: 9px;
        }
        &-list {
          display: flex;
          padding-top: 5px;
        }
      }
    }
  }
}
</style>