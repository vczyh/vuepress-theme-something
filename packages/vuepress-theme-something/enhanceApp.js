import {
  getPosts,
  getTags,
  getCurrentPathPosts,
  getCurrentPathTags,
  getArchive,
  sortPostsByDate,
  getNavPaths,
  getNavPathItems,
  getPageByLayout
} from "@theme/util/post"
import store from "@theme/store";

import mixin from "@theme/mixins"

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化

  // console.log(siteData)

  // 状态管理
  Vue.prototype.$store = store

  // 元数据
  const posts = sortPostsByDate(getPosts(siteData))
  Vue.prototype.$posts = posts
  Vue.prototype.$tags = getTags(posts)
  Vue.prototype.$archive = getArchive(posts)

  // 全局混入
  Vue.mixin(mixin)

  router.beforeEach((to, from, next) => {
    // 和页面有关的元数据
    Vue.prototype.$currentPathPosts = getCurrentPathPosts(posts, to.path)
    Vue.prototype.$currentPathTags = getCurrentPathTags(posts, to.path)

    // 根路径重定向
    if (to.path == '/') {
      const navs = getNavPathItems(siteData.themeConfig.nav)
      for (const nav of navs) {
        if (nav.home) {
          return next(nav.link)
        }
      }
    }

    // 记录页码
    // 导航之间的跳转不需要记录页码
    if (isNav(from.path) && isNav(to.path)) {
      store.setCurrentPageAction(1);
      store.setCurrentTagAction('all')
    }
    // 记录 tag
    if (from.path == '/tags/' && !isNav(to.path)) {
      store.setCurrentTagAction(from.query.tag)
    }
    // todo 删除tag

    // 文章页面跳转到标签页面
    if (!isNav(from.path) && to.path == '/tags/') {
      // 点击导航tag
      if (!to.query.tag) {
        return next(`/tags/?tag=${store.state.currentTag}`)
      }
    }

    if (to.path == '/tags/' && !to.query.tag) return next(`/tags/?tag=all`)

    function isNav(path) {
      const navPaths = getNavPaths(siteData.themeConfig.nav);
      return navPaths.indexOf(path) != -1
    }

    next()
  })
}