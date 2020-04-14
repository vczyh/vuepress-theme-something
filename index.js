// module.exports = {
//   extend: '@vuepress/theme-default',
//   themeConfig() {
//     console.log('diaoyong')
//   }
// }


module.exports = (options, ctx) => ({
  extend: '@vuepress/theme-default',
  plugins: {
    '@vuepress/medium-zoom': {
      selector: '',
      options: {
        margin: 16
      }
    }
  }
})