<template>
  <div class="ratings-content">
    <div class="ratings-content-types">
      <ul class="ratetype-options">
        <li
          v-for="(option,index) in rateTypeList"
          :key="index"
          @click.stop="toggleRateType(option.type)"
          class="ratetype-item"
        >
          <span>{{option.label}}{{option.count}}</span>
        </li>
      </ul>
      <div class="rate-switch">
        <i @click.stop="toggleSwitchType" :class="{'on':switchType===1}" class="iconfont switch"></i>
        <span class="label-text">只看有内容的评价</span>
      </div>
    </div>

    <ul class="ratings-content-list">
      <li v-for="(item,index) in renderList" :key="index" class="ratings-content-list-item">
        <!-- <div> -->
        <img class="avatar" width="100%" height="100%" :src="item.avatar" alt />
        <!-- </div> -->
        <div class="information">
          <div class="top">
            <h3 class="nickname">{{item.username}}</h3>
            <time>{{new Date(item.rateTime) | dateFormat}}</time>
          </div>
          <div class="sub-desc">
            <span class="score">******</span>
            <span class="deliverytime">90分钟送达</span>
          </div>
          <div class="content">{{item.text}}</div>
          <div class="recommendation">
            <i class="iconfont" :class="item.rateType===0 ? 'thumb-up':'thumb-down'"></i>

            <li class="recommendation-item">八宝粥</li>
            <li class="recommendation-item">八宝粥</li>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "rating",
  props: {
    data: {
      type: Array
    },
    rateTypeLabels: {
      type: Array
    }
  },
  data() {
    return {
      switchType: 0,
      rateType: -1,
      rateTypeOptions: [
        { type: -1 },
        {
          type: 0
        },
        {
          type: 1
        }
      ]
    };
  },
  computed: {
    rateTypeList() {
      return this.rateTypeOptions.map((typeItem, index) => {
        return {
          ...typeItem,
          label: this.rateTypeLabels[index],
          count: this.data.filter(item => {
            if (typeItem.type === -1) {
              return true;
            }
            return item.rateType === typeItem.type;
          }).length
        };
      });
    },
    renderList() {
      let renderList = [];
      if (this.rateType === -1) {
        renderList = this.data;
      }
      renderList = this.data.filter(item => {
        if (this.rateType === -1) {
          return true;
        }
        return item.rateType === this.rateType;
      });

      return renderList.filter(item => {
        if (this.switchType === 1) {
          return item.text !== "";
        }
        return true;
      });
    }
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
    toggleRateType(type) {
      this.rateType = type;
    },
    toggleSwitchType() {
      if (this.switchType === 0) {
        this.switchType = 1;
      } else {
        this.switchType = 0;
      }
    }
  }
};
</script>

<style scoped lang="less">
.ratings-content > * {
  padding: 0 34px;
  border: 1px solid #eee;
  border-width: 1px 0;
}

.ratings-content-types {
  .ratetype-options {
    border-bottom: 1px solid #ccc;
    display: flex;
    padding: 38px 0;
    .ratetype-item {
      width: 120px;
      line-height: 60px;
      text-align: center;
      margin-right: 30px;
      border-radius: 2px;
      background-color: rgba(0, 160, 220, 0.2);
      &.active {
        background-color: #00a0dc;
        color: #fff;

        &.bad {
          background-color: #666;
          color: #4d555d;
        }
      }
    }
  }
  .rate-switch {
    padding: 30px 0;
    .switch {
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