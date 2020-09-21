<template>
  <div id="scroll-wrapper" ref="scroll-wrapper" :class="direction">
    <div class="scroller">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BetterScroll from "better-scroll";

export default {
  name: "scroll",
  props: {
    direction: {
      type: String,
      default: "vertical"
    },
    probeType: {
      type: Number,
      default: 3
    }
  },
  provide() {
    return {
      parentScroll: this
    };
  },
  inject: {
    parentScroll: {
      default: null
    }
  },
  mounted() {
    this._initScroll();
  },
  methods: {
    refresh() {
      this.scroll.refresh();
    },
    _initScroll() {
      setTimeout(() => {
        this.scroll = new BetterScroll(this.$refs["scroll-wrapper"], {
          scrollX: this.direction === "horizontal",
          probeType: this.probeType,
          tap: "tap",
          click: true
           
        });

         
        this.scroll.on("scroll", pos => {
           
          this.$emit("scroll", pos);
        });
      }, 440);
    },
    scrollToElement(...arg) {
      this.scroll.scrollToElement(...arg);
    }
  }
};
</script>
<style scoped>
#scroll-wrapper {
  overflow: hidden;
  height: 100%;
}
.horizontal {
  white-space: nowrap;
}
.horizontal > .scroller {
  display: inline-block;
}
</style>