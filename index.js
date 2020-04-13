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
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {
        margin: 16
      }
    }
  }
  // alias() {
  //   const { themeConfig, siteConfig } = ctx
  //   themeConfig.sidebar
  // }
})