import {
  getTags,
  getCurrentPathPosts,
  getCurrentTagPosts,
  getPosts,
  sortPostsByDate,
  getArchive
} from "../util/post"

export function storePostsInfo(site) {
  // console.log('storePostsInfo')
  console.log(site)
  const posts = getPosts(site)
  sortPostsByDate(posts)
  const tags = getTags(posts)
  sessionStorage.setItem("posts", JSON.stringify(posts))
  sessionStorage.setItem("tags", JSON.stringify(tags))

  // console.log(archive())
}

export function clear() {
  console.log('clear')
  sessionStorage.clear()
}

export function posts() {
  return JSON.parse(sessionStorage.getItem("posts"))
}

export function tags() {
  return JSON.parse(sessionStorage.getItem("tags"))
}

export function currentPathPosts(path) {
  return getCurrentPathPosts(posts(), path)
}

export function currentTagPosts(tag) {
  return getCurrentTagPosts(posts(), tag)
}

export function setCurrentPage(curretnPage) {
  sessionStorage.setItem('currentPage', curretnPage)
}

export function getCurrentPage() {
  return sessionStorage.getItem('currentPage')
}

export function archive() {
  return getArchive(posts())
}

