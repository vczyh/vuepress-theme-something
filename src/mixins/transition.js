export default {
  data() {
    return {
      showTransition: false
    }
  },

  mounted() {
    // console.log('tarnsdfjsl')
    this.showTransition = true
    // console.log('transition mounted ' + this.$options.name + ' ' +  this.showTransition)
  },

  destroyed() {
    // console.log('transition destroyed ' + this.$options.name)
    this.showTransition = false
  }
}
