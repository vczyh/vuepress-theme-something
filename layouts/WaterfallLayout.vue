<template>
  <div class="theme-custom-content" :style="{height: clientHeight}">
    <Waterfall></Waterfall>
  </div>
</template>

<script>
import Waterfall from "@theme/components/Waterfall.vue";
export default {
  name: "WaterfallLayout",
  components: { Waterfall },
  data() {
    return {
      clientHeight: ""
    };
  },
  methods: {
    getHeight() {
      this.clientHeight =
        document.documentElement.clientHeight - 3.6 * 16 + "px"; //获取浏览器可视区域高度
    }
  },
  mounted() {
    window.addEventListener("resize", this.getHeight);
    this.getHeight();
  }
};
</script>

<style lang="stylus" scoped>
.theme-custom-content {
  margin-top 3.6rem
}
</style>