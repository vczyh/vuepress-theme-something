export default {
  data() {
    return {
      showTransition: false
    }
  },

  mounted() {
    this.showTransition = true
  },

  destroyed() {
    this.showTransition = false
  }
}
