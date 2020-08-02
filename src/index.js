module.exports = (options, ctx) => ({

  extend: '@vuepress/theme-default',

  plugins: [
    '@vuepress-something/vuepress-plugin-valine',
    '@vuepress-something/vuepress-plugin-dplayer',
    '@vuepress-something/vuepress-plugin-components',
    ['@vuepress/last-updated', {
      transformer: (timestamp, lang) => {
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).fromNow()
      }
    }],
    ['@vuepress/medium-zoom', {
      selector: '',
      options: {
        margin: 24
      }
    }]
  ],
})