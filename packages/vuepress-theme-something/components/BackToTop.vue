<template>
  <transition name="back-to-top-fade">
    <div
      class="vue-back-to-top"
      :style="{bottom: bottom, right: right}"
      v-show="visible"
      @click="backToTop"
    >
      <i class="iconfont icontop"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: "BackToTop",
  data() {
    return {
      visible: false,
      visibleoffset: 600,
      right: "70px",
      bottom: "70px"
    };
  },
  mounted() {
    window.addEventListener("scroll", this.catchScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.catchScroll);
  },
  methods: {
    catchScroll() {
      const pastTopOffset = window.pageYOffset > parseInt(this.visibleoffset);
      const pastBottomOffset =
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - parseInt(this.visibleoffsetbottom);
      this.visible =
        parseInt(this.visibleoffsetbottom) > 0
          ? pastTopOffset && !pastBottomOffset
          : pastTopOffset;
    },
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.back-to-top-fade-enter-active, .back-to-top-fade-leave-active {
  transition opacity 0.7s
}
.back-to-top-fade-enter, .back-to-top-fade-leave-to {
  opacity 0
}
.vue-back-to-top {
  cursor pointer
  position fixed
  z-index 1000
}
.vue-back-to-top .default {
  background-color #f5c85c
  border-radius 3px
  color #ffffff
  height 30px
  line-height 30px
  text-align center
  width 160px
}
.vue-back-to-top .default span {
  color #ffffff
}
.iconfont {
  font-size 1.5rem
  font-weight 600
  color: $accentColor
}
</style>
