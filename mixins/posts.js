import { posts, tags, currentPathPosts ,currentTagPosts} from '../util/storage'

export default {
  computed: {
    posts() {
      return posts()
    },
    tags() {
      return tags()
    },
    currentPathPosts() {
      return currentPathPosts(this.$page.path)
    }
  }
}