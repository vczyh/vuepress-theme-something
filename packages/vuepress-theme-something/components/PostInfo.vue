<template>
  <div class="post-info">
    <i class="iconfont iconshijian1">
      <span>{{date(post.frontmatter.date)}}</span>
    </i>

    <i class="iconfont iconuser">
      <span>{{post.frontmatter.author || $themeConfig.author}}</span>
    </i>

    <!-- 阅读数 -->
    <i
      v-if="$site.themeConfig.valine && $site.themeConfig.valine.visitor && showCount"
      :id="$route.path"
      :data-flag-title="post.title"
      class="iconfont iconyuedu leancloud_visitors"
    >
      <span class="leancloud-visitors-count"></span>
    </i>

    <!-- 标签 -->
    <i class="iconfont iconbiaoqian2 tags" v-if="showTag && post.frontmatter.tags">
      <span v-for="tag in post.frontmatter.tags" @click="tagClick(tag)" class="tag">{{tag}}</span>
    </i>
  </div>
</template>

<script>
import Tags from "@theme/components/Tags.vue";
import { formatDate } from "../util/common";
export default {
  name: "PostInfo",
  components: { Tags },
  props: {
    post: {
      type: Object,
      required: true,
    },
    showTag: {
      type: Boolean,
      default: false,
    },
    showCount: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    date(date) {
      return formatDate(date);
    },
    tagClick(tag) {
      this.$router.push(`/tags/?tag=${tag}`);
      this.$store.setCurrentPageAction(1);
    },
  },
};
</script>

<style lang="stylus" scoped>
// @require '../styles/iconfont.css'
.post-info {
  .iconfont {
    display inline-block
    line-height 1.3rem
    height 1.3rem
    font-size 15px
    color #7F7F7F
    &:not(:last-child) {
      margin-right 2rem
    }
    span {
      margin-left 5px
      color #7F7F7F
      &.tag {
        &:not(:last-child) {
          margin-right 0.8rem
        }
        cursor pointer
      }
    }
  }
}
@media (max-width $MQNarrow) {
  .post-info {
    .tags {
      display none
    }
  }
}
</style>