<template>
  <div>
    <i class="iconfont">
      &#xe672;
      <span>{{date(post.frontmatter.date)}}</span>
    </i>

    <i class="iconfont">
      &#xe660;
      <span>{{post.frontmatter.author || $themeConfig.author}}</span>
    </i>
    <router-link v-show="!mobile" :to="post.path" class="link">查看全文</router-link>
  </div>
</template>

<script>
import { formatDate } from "../util/common";
export default {
  name: "PostInfo",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    mobile() {
      return navigator.userAgent.search(/(iPhone|iPad)/i) != -1;
    }
  },
  methods: {
    date(date) {
      return formatDate(date);
    }
  }
};
</script>

<style lang="stylus" scoped>
@require '../styles/iconfont.css'

.iconfont
  display inline-block
  line-height 1.5rem
  &:not(:last-child)
    margin-right 2rem
  span
    font-size 0.9rem
    color #878787
.link
  float right
  display inline-block
  line-height 1.5rem
  text-decoration none
  color #878787
  font-size 0.9rem
</style>