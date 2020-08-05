module.exports = {
  theme: 'vuepress-theme-something',

  title: "Hello, VuePress Theme Something ",
  description: 'Just playing around',

  head: [
    ['link', { rel: 'icon', href: '/avatar.jpg' }],
  ],

  themeConfig: {
    logo: '/avatar.jpg',
    author: 'vczyh',

    nav: [
      { text: '分类1', link: '/category1/', home: true },
      { text: '分类2', link: '/category2/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archive/' },
      { text: '404', link: '/not-found/' }
    ],

    contact: {
      "github": "https://github.com/vczyh",
      "mail": "zhangeek@qq.com",
      "qq": "2939531323"
    }
  }
}