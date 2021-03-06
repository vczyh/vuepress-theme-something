module.exports = (options, ctx) => ({

  extend: '@vuepress/theme-default',

  plugins: [
    '@vuepress-something/vuepress-plugin-valine',
    '@vuepress-something/vuepress-plugin-dplayer',
    '@vuepress-something/vuepress-plugin-components',
    ['@vuepress/medium-zoom', {
      selector: '',
      options: {
        margin: 24
      }
    }]
  ],
})