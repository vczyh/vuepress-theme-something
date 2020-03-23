export default {
  data() {
    return {
      showTransition: false
    }
  },

  mounted() {
    // console.log('tarnsdfjsl')
    this.showTransition = true
  },

  destroyed() {
    this.showTransition = false
  }
}
