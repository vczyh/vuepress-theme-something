import { getNavPaths } from "@theme/util/post"
// 全局混入
export default {

  data() {
    return {
    }
  },

  methods: {
    goTags(tag) {
      this.$router.replace({
        path: "/tags/",
        query: { tag: tag }
      });
    },

    // getStorageItem(name) {
    //   return JSON.parse(sessionStorage.getItem(name))
    // },

    // setStorageItem(name, obj) {
    //   sessionStorage.setItem(name, JSON.stringify(obj))
    // }
  },

  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  },

  watch: {
    // $route(to, from) {
    //   // 保存分页信息
    //   const navPaths = getNavPaths(this.$site.themeConfig.nav)
    //   const path = sessionStorage.getItem('path')
    //   if (navPaths.indexOf(from.path) != -1 && navPaths.indexOf(to.path) != -1) {
    //     sessionStorage.removeItem('currentPage')
    //     sessionStorage.removeItem('tag')
    //   }
    //   if (!(from.path == path || to.path == path)) {
    //     sessionStorage.removeItem('currentPage')
    //     sessionStorage.removeItem('tag')
    //   }

    //   if (from.path == '/tags/' && navPaths.indexOf(to.path) == -1) {
    //     sessionStorage.setItem("tag", from.query.tag);
    //   }

    //   if (from.path != "/tags/" && to.path == "/tags/") {
    //     let tag = "all";
    //     if (sessionStorage.getItem("tag")) tag = sessionStorage.getItem("tag");
    //     to.query.tag = tag;
    //   }
    // }
  },
}