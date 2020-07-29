<template>
  <div class="layout-wrapper posts-layout-wrapper">
    <!-- <img src="http://p.vczyh.com/blog/background.jpg" class="img" /> -->

    <Info class="info" />
    <PostsPagination :posts="$currentPathPosts" :key="key" class="posts-pagination" />

    <!-- <div v-if="!isMobile" class="info">
        <DefaultTransition delay="0.02">
          <Avatar v-show="showTransition" :key="key"></Avatar>
        </DefaultTransition>
    </div>-->
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

  computed: {
    themeClass() {
      return this.isMobile ? "theme-default-content" : "theme-custom-content";
    },
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
    max-width 700px
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
