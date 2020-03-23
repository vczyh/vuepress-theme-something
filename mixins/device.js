export default {
  computed: {
    isMobile() {
      return navigator.userAgent.search(/(iPhone|iPad)/i) != -1;
    }
  }
}