<template>
  <div class="timeline-wrapper">
    <ul>
      <li>
        <div class="info">共 {{$posts.length}} 篇文章~</div>
      </li>
    </ul>
    <ul v-for="item in $archive">
      <li>
        <span class="year">{{item.year}}</span>
      </li>
      <li v-for="post in item.posts">
        <div class="content">
          <span class="date">{{formatDate(post.frontmatter.date)}}</span>
          <router-link :to="post.path" style="text-decoration: none" class="title">{{post.title}}</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { formatMonthAndDay } from "../util/common";
export default {
  props: ["archive"],

  computed: {
    years() {
      return Object.keys(this.$archive);
    }
  },

  methods: {
    formatDate(date) {
      return formatMonthAndDay(date);
    }
  }
};
</script>

<style lang="stylus" scoped>
/* @require '../styles/iconfont.css' */
.timeline-wrapper {
  // padding 10px 120px
}
ul {
  list-style none 
  margin 0
  padding 0
  position relative
  .year {
    display inline-block
    font-weight 500
    font-size 1.5rem
    margin-left 20px
    line-height 50px
    // margin-top 20px
    // border-bottom 1px dashed #c0c0c0
  }
  li {
    position relative
    &::before {
      content ''
      position absolute
      top 0
      left 0
      z-index auto
      margin-left -4px
      width 4px
      height 100%
      // background #faf0e6
      // background #808080
      background #eaecef
    }
    .content {
      white-space nowrap
      line-height 30px
      margin-left 20px
      // border-bottom 1px dashed #c0c0c0
      padding 10px 0
      &::before {
        content ''
        position absolute
        top 22px
        left 0
        margin-left -5px
        z-index auto
        width 6px
        height 6px
        border-radius 50%
        // background #c28989
        background #fff
      }
      .date {
        font-size 0.9rem
        color #9a9a9a
      }
      .title {
        margin-left 10px
        // color #707477
        color #666
        &:hover {
          color $accentColor
        }
      }
    }
    .info {
      white-space nowrap
      font-size 17px
      line-height 30px
      margin-left 20px
      padding 10px 0
      &::before {
        content ''
        position absolute
        top 22px
        left 0
        margin-left -5px
        z-index auto
        width 6px
        height 6px
        border-radius 50%
        // background #c28989
        background #fff
      }
    }
  }
}
</style>