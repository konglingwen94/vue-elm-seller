<template>
  <scroll class="ratings-scroll-container">
    <div class="ratings">
      <div class="ratings-overview">
        <div class="average">
          <span class="score">4</span>
          <h2>综合评估</h2>
          <p class="footnote">高于周边商家69.2%</p>
        </div>

        <div class="vote">
          <div class="vote-item service">
            <label for>服务态度</label>
            *******
            <span class="label-content score">3.4</span>
          </div>
          <div class="good vote-item">
            <label for>商品评分</label>
            *******
            <span class="label-content score">3.4</span>
          </div>
          <div class="deliverytime vote-item">
            <label for>配送时间</label>
            <span class="label-content time">30分钟</span>
          </div>
        </div>
      </div>

      <div class="ratings-content">
        <div class="ratings-content-filter">
          <ul class="filter-options">
            <li
              v-for="(option,index) in 3"
              :key="index"
              :class="filterOption"
              @touchstart.stop="selectOption('all')"
              class="filter-options-item"
            >
              <span>全部</span>
              4
            </li>
            <!-- <li @touchstart.stop="selectOption('satisfied')" class="filter-options-item">
              <span>满意</span>
              4
            </li>
            <li class="filter-options-item" @touchstart.stop="selectOption('dissatisfied')">
              <span>不满意</span>
              43
            </li>-->
          </ul>
          <div class="filter-switch">
            <i @touchstart.stop="toggleSwitch" :class="{'on':switchStatus}" class="iconfont select"></i>
            <span class="label-text">只看有内容的评价</span>
          </div>
        </div>

        <ul class="ratings-content-list">
          <li v-for="(item,index) in ratings" :key="index" class="ratings-content-list-item">
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
                <time>{{new Date() | dateFormat}}</time>
              </div>
              <div class="sub-desc">
                <span class="score">******</span>
                <span class="deliverytime">90分钟送达</span>
              </div>
              <div
                class="content"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis voluptas voluptatibus error obcaecati iure vel possimus quisquam reprehenderit corrupti culpa quidem, quaerat ullam officiis porro! Architecto quasi in modi.</div>
              <div class="recommendation">
                <i class="iconfont" :class="item.rateType===0 ? 'thumb-up':'thumb-down'"></i>

                <li class="recommendation-item">八宝粥</li>
                <li class="recommendation-item">八宝粥</li>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </scroll>
</template>
<script>
const ratings = [
  {
    rateType: 0
  },
  {
    rateType: 0
  },
  {
    rateType: 1
  }
];

export default {
  name: "page-ratings",
  data() {
    return {
      switchStatus: false,
      filterOption: "all",
      ratings
    };
  },
  filters: {
    dateFormat(date) {
      if (!date instanceof Date) {
        return "";
      }

      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDay();
      const hours = date.getHours();
      const minute = date.getMinutes();

      return `${year}-${month}-${day} ${hours}:${minute}`;
    }
  },
  methods: {
    selectOption(option) {
      this.filterOption = option;
    },
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
.ratings {
  background: #eee;
  > * {
    background: #fff;
  }
}
.ratings-overview {
  display: flex;
  padding: 35px 45px;
  margin-bottom: 30px;
  .average {
    width: 35%;
    text-align: center;
    padding-right: 10px;
    margin-top:19px;
    border-right: 1px solid #ccc;
    span.score {
      font-size: 40px;
      color: #ff9900;
      margin-bottom:10px;
      display: inline-block;
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
      span {
        margin-left: 20px;
        &.score {
          color: #ff9900;
        }
        &.time {
          color: #93999f;
        }
      }
      margin: 10px 0;
      padding: 10px 0;
    }
  }
}

.ratings-content > * {
  padding: 0 34px;
  border: 1px solid #eee;
  border-width: 1px 0;
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
      border-radius: 2px;
      background-color: rgba(0, 160, 220, 0.2);
      &.active {
        background-color: #fff;
        color: #fff;

        &.dissatisfied {
          background-color: #666;
          color: #4d555d;
        }
      }
    }
  }
  .filter-switch {
    padding: 30px 0;
    .select {
      cursor: pointer;
      vertical-align: -7px;
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
    border-bottom: 1px solid #ccc;
    padding-bottom: 35px;
    padding-top: 35px;
    .avatar {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      margin-right: 20px;
    }
    .information {
      flex:1;
      .top {
        display: flex;
        justify-content: space-between;
        time {
          color: #93999f;
          font-size: 20px;
        }
      }
      .sub-desc {
        margin: 12px 0;
        .score {
          margin-right: 10px;
        }
        .deliverytime {
          color: #93999f;
          font-size: 20px;
        }
      }
      .content {
        margin: 14px 0;
      }
      .recommendation {
        line-height: 36px;
        display: inline-flex;
        text-align: center;
        align-items: center;
        .iconfont {
          font-size: 24px;
          color: #00a0dc;
        }
        &-item {
          font-size: 18px;
          width: 120px;
          color: #93999f;
          border-radius: 2px;
          border: solid 1px;
          margin-left: 12px;
        }
      }
    }
  }
}
</style>