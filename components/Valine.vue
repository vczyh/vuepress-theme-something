<template>
  <div v-if="$site.themeConfig.valine" id="vcomments" />
</template>

<script>
// import AV from "leancloud-storage";
// const Valine = require("valine");

export default {
  name: "Valine",
  methods: {
    init() {
      const Valine = require("valine");
      let valine = this.$site.themeConfig.valine;
      if (!valine) return;
      valine.el = "#vcomments";
      valine.path = location.pathname;
      new Valine(valine);
    }
  },
  mounted() {
    if (!window.AV) {
      window.AV = require("leancloud-storage");
    }
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