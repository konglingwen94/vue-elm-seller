<template>
  <div class="tab-container">
    <ul class="tab-bar">
      <li
        :class="{active:index===activeIndex}"
        class="tab-bar-item"
        v-for="(item,index) in data"
        :key="index"
      >
        <div @click="changeTab(item.id,index)">
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
            id: 3
          },
          {
            label: "评价",
            id: 2
          },
          {
            label: "商品",
            id: 1
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
    changeTab(id, index) {
      this.activeIndex = index;
      this.$emit("change-tab", id);
    }
  }
};
</script>
<style scoped>
 
.tab-bar {
  display: flex;
  text-align: center;
  border-bottom: 1px solid #aaa;
}
.tab-bar-item {
  width: 33%;
  padding: 30px 0;
}
.tab-bar-item.active {
  border-bottom: 2px solid red;
}
</style>