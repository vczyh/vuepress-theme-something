<template>
  <div v-if="$site.themeConfig.valine" id="vcomments" />
</template>

<script>
export default {
  name: "Valine",
  methods: {
    load() {
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
    this.load();
  },
  watch: {
    "$route.path": function(to, from) {
      this.load();
    }
  }
};
</script>

<style>
</style>