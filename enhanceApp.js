import {
  getPosts,
  getTags,
  getCurrentPathPosts,
  getArchive,
  sortPostsByDate
} from "@theme/util/post"

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化

  // console.log(siteData)
  const posts = sortPostsByDate(getPosts(siteData))
  Vue.prototype.$posts = posts
  Vue.prototype.$tags = getTags(posts)
  Vue.prototype.$archive = getArchive(posts)

  router.beforeEach((to, from, next) => {
    Vue.prototype.$currentPathPosts = getCurrentPathPosts(posts, to.path)

    if (to.path == '/') {
      const navs = siteData.themeConfig.nav
      for (const nav of navs) {
        if (nav.home) {
          next(nav.link)
        }
      }
    }
    next()
  })
}