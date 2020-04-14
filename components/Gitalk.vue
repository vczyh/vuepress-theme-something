<template>
  <div v-if="$site.themeConfig.gitalk" id="gitalk-container" />
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
      const gitalk = this.$site.themeConfig.gitalk;
      if (!gitalk) return;
      gitalk.admin = [gitalk.owner];
      gitalk.id = md5(location.pathname);
      gitalk.distractionFreeMode = false;
      // 删除子元素 重新渲染
      const el = document.getElementById("gitalk-container");
      el.innerHTML = " ";
      new Gitalk(gitalk).render("gitalk-container");
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