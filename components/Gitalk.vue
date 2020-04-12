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
      //   key: 0,
      //   clientID: "",
      //   clientSecret: "",
      //   repo: "",
      //   owner: "",
      //   admin: [],
      //   id: md5(location.pathname), // Ensure uniqueness and length less than 50
      //   distractionFreeMode: false // Facebook-like distraction free mode
    };
  },

  methods: {
    init() {
      const { gitalk } = this.$site.themeConfig;
      if (!gitalk) return;
      gitalk.admin = [gitalk.owner];
      gitalk.id = md5(location.pathname);
      gitalk.distractionFreeMode = false;
      const ele = document.getElementById("gitalk-container");
      ele.innerHTML = " ";
      new Gitalk(gitalk).render("gitalk-container");
      // console.log(location.pathname)
      // console.log(gitalk)
    }
  },

  mounted() {
    this.init();
  },

  watch: {
    "$route.path": function(to, from) {
      this.init();
    }
  }
};
</script>

<style>
</style>