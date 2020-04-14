<template>
  <div v-if="$site.themeConfig.valine" id="vcomments"></div>
</template>

<script>
import Valine from "valine";
import AV from "leancloud-storage";
export default {
  name: "Valine",
  data() {
    return {
      // valine: {}
    };
  },
  methods: {
    init() {
      let valine = this.$site.themeConfig.valine;
      valine.el = "#vcomments";
      valine.path = window.location.pathname;
      new Valine(valine);
    }
  },
  mounted() {
    if (!window.AV) window.AV = AV;
    this.init();
  },
  watch: {
    "$route.path": function(to, from) {
      console.log("valine path changed");
      this.init();
    }
  }
};
</script>

<style>
</style>