<template>
  <scroll v-loading="loading" class="ratings-scroll-container">
    <div class="ratings">
      <div class="ratings-overview">
        <div class="average">
          <span class="score">{{ seller.score }}</span>
          <h2>综合评估</h2>
          <p class="footnote">高于周边商家{{ seller.rankRate }}%</p>
        </div>

        <div class="vote">
          <div class="vote-item service">
            <label for>服务态度</label>
            <star-score :score="seller.serviceScore"></star-score>
            <span class="label-content score">{{ seller.serviceScore }}</span>
          </div>
          <div class="good vote-item">
            <label for>商品评分</label>
            <star-score :score="seller.foodScore"></star-score>
            <span class="label-content score">{{ seller.foodScore }}</span>
          </div>
          <div class="deliverytime vote-item">
            <label for>配送时间</label>
            <span class="label-content time">{{ seller.deliveryTime }}分钟</span>
          </div>
        </div>
      </div>

      <div class="ratings-content">
        <div class="ratings-content-filter">
          <ul class="filter-options">
            <li
              v-for="(option, index) in ratingTypes"
              :key="index"
              :class="[option.flag, { selected: selectedRatingType === option.type }]"
              @click.stop="selectOption(option.type)"
              class="filter-options-item"
            >
              <span>{{ option.label }}&nbsp;{{ option.count }}</span>
            </li>
          </ul>
          <div class="filter-switch">
            <i @touchstart.stop="toggleSwitch" :class="{ on: switchStatus }" class="iconfont select"></i>
            <span class="label-text">只看有内容的评价</span>
          </div>
        </div>

        <ul class="ratings-content-list">
          <li v-for="(item, index) in renderList" :key="index" class="ratings-content-list-item">
            <!-- <div> -->
            <img class="avatar" width="100%" height="100%" :src="item.avatar" alt />
            <!-- </div> -->
            <div class="information">
              <div class="top">
                <h3 class="nickname">{{ item.username }}</h3>
                <time>{{ new Date(item.rateTime) | dateFormat }}</time>
              </div>
              <div class="sub-desc">
                <span class="score">
                  <star-score :score="item.score" size="small"></star-score>
                </span>
                <span class="deliverytime">{{ item.deliveryTime }}分钟送达</span>
              </div>
              <div class="content">{{ item.text }}</div>
              <div class="recommendation">
                <i class="iconfont" :class="item.rateType === 0 ? 'thumb-up' : 'thumb-down'"></i>

                <li class="recommendation-item" v-for="(recommend, key) in item.recommend" :key="key">
                  {{ recommend }}
                </li>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </scroll>
</template>
<script>
import request from "@/request";

export default {
  name: "page-ratings",
  data() {
    return {
      loading: false,
      switchStatus: false,
      selectedRatingType: -1,
      ratings: [],
      ratingTypes: [
        {
          type: -1,
          flag: "all",
          label: "全部",
        },
        {
          type: 0,
          flag: "positive",
          label: "满意",
        },
        {
          type: 1,
          flag: "negative",

          label: "不满意",
        },
      ],
    };
  },
  props: {
    seller: Object,
  },
  computed: {
    renderList() {
      let renderList = [];

      if (this.selectedRatingType === -1) {
        renderList = this.ratings;
      } else {
        renderList = this.ratings.filter((item) => item.rateType === this.selectedRatingType);
      }

      return renderList.filter((item) => (this.switchStatus ? item.text : true));
    },
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
    },
  },
  created() {
    this.loading = true;
    request
      .get("/ratings")
      .then((response) => {
        this.loading = false;

        this.ratings = response;

        this.ratingTypes.forEach((item) => {
          if (item.type === -1) {
            item.count = this.ratings.length;
          } else {
            item.count = this.ratings.filter((rating) => rating.rateType === item.type).length;
          }
        });
      })
      .catch(() => {
        this.loading = false;
      });
  },
  methods: {
    selectOption(option) {
      this.selectedRatingType = option;
    },
    toggleSwitch() {
      this.switchStatus = !this.switchStatus;
    },
  },
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
    width: 31%;
    text-align: center;
    padding-right: 10px;
    margin-top: 19px;
    border-right: 1px solid #ccc;
    span.score {
      font-size: 40px;
      color: #ff9900;
      margin-bottom: 10px;
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
      background-color: #d6ecf8;
      &.selected {
        background-color: #00a0dc;
        color: #fff;
        &.negative {
          background: #656565;
        }
      }
      &.negative {
        background-color: #ccc;
        color: #fff;
      }
    }
  }
  .filter-switch {
    padding: 30px 0;
    display: flex;
    align-items: center;
    .select {
      cursor: pointer;
      margin-right: 10px;
      font-size: 40px;
      &.on {
        &:active {
          background: transparent;
        }
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
      flex: 1;
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
        flex-wrap: wrap;
        text-align: center;
        // align-items: center;
        .iconfont {
          font-size: 24px;
          margin-bottom: 12px;
          color: #00a0dc;
        }
        &-item {
          font-size: 18px;
          width: 120px;
          color: #93999f;
          border-radius: 2px;
          border: solid 1px;
          margin-left: 12px;
          margin-bottom: 12px;
        }
      }
    }
  }
}
</style>
