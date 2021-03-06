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
  },

  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }
}