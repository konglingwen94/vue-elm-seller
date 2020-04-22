<template>
     <scroll class="scroll-container">
       <div class="foods">
        foods
       </div>
     </scroll>
</template>
<script>
import request from "@/request";
export default {
  data() {
    return {
      data: [],
       
    };
  },
  created() {
    request.get("/goods").then((response) => {
       
      this.data=response
    });
  },
  methods: {
     
  },
};
</script>
<style  >
.scroll-container{
  height:100%;

}
.foods{
  height:2000px;
  border:1px solid;
}
  </style>