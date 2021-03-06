export default {
  debug: false,
  state: {
    currentPage: 1,
    currentTag: 'all',
  },
  setNavAction(newVal) {
    if (this.debug) console.log('setNavAction triggered with', newVal)
    this.state.nav = newVal
  },
  setCurrentPageAction(newVal) {
    if (this.debug) console.log('setCurrentPageAction triggered with', newVal)
    this.state.currentPage = newVal
  },
  setCurrentTagAction(newVal) {
    if (this.debug) console.log('setCurrentTagAction triggered with', newVal)
    this.state.currentTag = newVal
  }
}