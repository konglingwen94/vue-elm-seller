<template>
  <div>
    <ul class="tab-bar">
      <li class="tab-bar-item" v-for="(item,index) in data" :key="index">
        <div @click="changeTab(item.id,index)" :class="{active:index===activeIndex}">
          <span>{{item.label}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "tab-bar",
  props: {
    data: {
      type: Array,
      default: function() {
        return [
          {
            label: "商家",
            id: 1
          },
          {
            label: "评价",
            id: 2
          },
          {
            label: "商品",
            id: 3
          }
        ];
      }
    },
    initialIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      activeIndex: this.initialIndex
    };
  },
  methods: {
    changeTab(id,index) {
        this.activeIndex=index
      this.$emit("change-tab", id);
    }
  }
};
</script>
<style scoped>
.tab-bar {
  display: flex;
  text-align: center;
}
.tab-bar-item {
  width: 33%;
}
.tab-bar-item .active {
  padding-bottom:12px;
  border-bottom: 2px solid red;
}
</style>