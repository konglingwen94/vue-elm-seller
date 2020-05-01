<template>
  <div class="food-picker">
    <div class="reduce-wrapper"  @tap="reduce">
      <i class="iconfont reduce"></i>
    </div>
    <div class="counter">{{foodInfo.count}}</div>
    <div class="add-wrapper" @tap="add">
      <i class="iconfont add"></i>
    </div>


  </div>
</template>
<script>
export default {
  name:"food-picker",
  props:{
    foodInfo:{
      type:Object,
       default:()=>({})
    }
  },
  methods:{
    reduce(){
      if(parseInt(this.foodInfo.count)>0){

        this.foodInfo.count--
      }
    },
    add(){
      // console.log('-----')
       
      this.foodInfo.count++
      // this.$forceUpdate()
    }
  }
}
</script>
<style lang="less" scoped>
.food-picker {
  min-width: 180px;

  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  .iconfont {
    color: #00a0dc;
    font-size: 38px;
  }
  .counter {
    // margin: 0 20px;
  }
}
</style>