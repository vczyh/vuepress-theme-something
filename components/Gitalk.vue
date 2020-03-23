<template>
  <div>
    <div id="gitalk-container"></div>
  </div>
</template>

<script>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import md5 from "blueimp-md5";

export default {
  data() {
    return {
      clientID: "",
      clientSecret: "",
      repo: "",
      owner: "",
      admin: [],
      id: md5(location.pathname), // Ensure uniqueness and length less than 50
      distractionFreeMode: false // Facebook-like distraction free mode
    };
  },

  created() {
    const { themeConfig } = this.$site;
    this.clientID = themeConfig.clientID;
    this.clientSecret = themeConfig.clientSecret;
    this.repo = themeConfig.repo;
    this.owner = themeConfig.owner;
    this.admin.push(this.owner);
  },

  mounted() {
    new Gitalk(this.$data).render("gitalk-container");
  }
};
</script>

<style>
</style>