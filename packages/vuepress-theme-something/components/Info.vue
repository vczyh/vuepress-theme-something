<template>
  <div class="info">
    <UserInfo class="common" />
    <Card class="common desc">{{ $frontmatter.desc || '这个人很懒 ~'}}</Card>
    <Card class="common current-path-tags">
      <div class="title">
        <i class="iconfont iconbiaoqian2">{{' ' + $currentPathTags.length + ' 标签'}}</i>
        <i class="iconfont icon16">{{ ' ' + $currentPathPosts.length + ' 文章'}}</i>
      </div>
      <hr />
      <Tags :tags="$currentPathTags" @tag-click="tagClick" />
    </Card>
  </div>
</template>

<script>
import Card from "@theme/components/Card.vue";
import UserInfo from "@theme/components/UserInfo.vue";
import Tags from "@theme/components/Tags.vue";
export default {
  name: "Info",
  components: { Card, UserInfo, Tags },
  methods: {
    tagClick(current) {
      this.$store.setCurrentPageAction(1);
      this.$router.push(`/tags/?tag=${current}`);
    },
  },
};
</script>

<style lang="stylus" scoped>
.info {
  display flex
  flex-direction column
  margin-right 40px
  .common {
    width 330px
    padding 8px 16px
    margin-bottom 20px
  }
  .desc {
    font-size 16px
    color #666
  }
  .current-path-tags {
    .title {
      display flex
      justify-content space-between
      .iconfont {
        color #666
        font-size 14px
      }
    }
  }
}
</style>