<template>
  <div class="layout-footer-wrapper">
    <div class="layout-wrapper posts-layout-wrapper">
      <Info class="info" />
      <PostsPagination :posts="$currentPathPosts" :key="key" class="posts-pagination" />
    </div>
  </div>
</template>

<script>
import PostsPagination from "@theme/components/PostsPagination.vue";
import Avatar from "@theme/components/Avatar.vue";
import Tags from "@theme/components/Tags.vue";
import Card from "@theme/components/Card.vue";
import Info from "@theme/components/Info.vue";
import UserInfo from "@theme/components/UserInfo.vue";
import DefaultTransition from "@theme/components/DefaultTransition.vue";
// import { resolveSidebarItems } from "../util";
import transitonMixin from "@theme/mixins/transition";
import deviceMixin from "@theme/mixins/device";

export default {
  name: "PostsLayout",
  components: {
    PostsPagination,
    Avatar,
    Tags,
    Card,
    Info,
    UserInfo,
    DefaultTransition,
  },
  mixins: [transitonMixin, deviceMixin],

  data() {
    return {
      key: 0,
      clientHeight: 0,
    };
  },

  watch: {
    $route(to, from) {
      this.key++;
    },
  },
};
</script>
<style lang="stylus" scoped>
.posts-layout-wrapper {
  display flex
  justify-content center
  .posts-pagination {
    max-width 750px
  }
}
@media (max-width $MQNarrow) {
  .posts-layout-wrapper {
    .info {
      display none
    }
  }
}
</style>
