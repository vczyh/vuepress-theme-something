import { getTimeStamp } from "../util/common"

export function getCurrentPathPosts(posts, path) {
  return posts = posts.filter(post => post.path.startsWith(path));
}

export function getTags(posts) {
  const tags = []
  for (const post of posts) {
    const postTags = post.frontmatter.tag;
    if (postTags) {
      for (const tag of postTags) {
        if (tags.indexOf(tag) == -1) tags.push(tag);
      }
    }
  }
  return tags
}

export function getCurrentTagPosts(posts, tag) {
  if (!tag) return posts
  return posts.filter(post => {
    const postTags = post.frontmatter.tag
    return postTags && postTags.indexOf(tag) != -1
  })
}
export function getPosts({ pages, themeConfig }) {
  const navPaths = getNavPaths(themeConfig.nav)
  return pages.filter(page => {
    return navPaths.indexOf(page.path) == -1
  })
}

function getNavPaths(navs) {
  if (navs.length == 0) return []
  const paths = []
  for (const nav of navs) {
    if (nav.link) paths.push(nav.link)
    else paths.push(...getNavPaths(nav.items))
  }
  return paths
}

export function sortPostsByDate(posts) {
  return posts.sort((pre, later) => {
    const preTime = getTimeStamp(pre.frontmatter.date)
    const laterTime = getTimeStamp(later.frontmatter.date)
    return laterTime - preTime
  })
}

// export function getArchive(posts) {
//   const archive = {}
//   for (const post of posts) {
//     let year = new Date().getFullYear()
//     if (post.frontmatter.date) {
//       year = new Date(post.frontmatter.date).getFullYear()
//     }
//     if (!archive.hasOwnProperty(year)) {
//       archive[year] = []
//     }
//     archive[year].push(post)
//   }
//   return archive
// }


export function getArchive(posts) {
  const archive = []
  for (const post of posts) {
    let year = new Date().getFullYear()
    if (post.frontmatter.date) {
      year = new Date(post.frontmatter.date).getFullYear()
    }
    let i = 0
    for (; i < archive.length; i++) {
      if (archive[i].year == year) {
        archive[i].posts.push(post)
        break
      }
    }
    if (i == archive.length) {
      archive.push({ year: year, posts: [post] })
    }

  }
  return archive
}