<template>
  <main class="page">
    <div :class="themeClass">
      <div v-if="!isMobile" class="info">
        <DefaultTransition delay="0.02">
          <Avatar v-show="showTransition" :key="key"></Avatar>
        </DefaultTransition>
      </div>
      <div class="posts">
        <PostsPagination :posts="$currentPathPosts" :key="key" class="post-pagination" />
      </div>
    </div>
  </main>
</template>

<script>
import PostsPagination from "@theme/components/PostsPagination.vue";
import Avatar from "@theme/components/Avatar.vue";
import Tags from "@theme/components/Tags.vue";
import Card from "@theme/components/Card.vue";
// import { resolveSidebarItems } from "../util";
import transitonMixin from "@theme/mixins/transition";
import deviceMixin from "@theme/mixins/device";

export default {
  name: "PostsLayout",
  components: {
    PostsPagination,
    Avatar,
    Tags,
    Card
  },
  mixins: [transitonMixin, deviceMixin],

  data() {
    return {
      key: 0,
      clientHeight: 0
    };
  },

  computed: {
    themeClass() {
      return this.isMobile ? "theme-default-content" : "theme-custom-content";
    }
  },

  watch: {
    $route(to, from) {
      this.key++;
    }
  },

  mounted() {
    this.$forceUpdate()
  }
};
</script>
<style lang="stylus" scoped>
// @require '../styles/wrapper.styl';
.page {
  padding-bottom 2rem
  display block
}
.theme-custom-content {
  display flex
  justify-content center
  width 100%
  margin-top 6rem
  .info {
    display flex
    width 300px
    flex-direction column
    margin-right 30px
    .tags-info {
      margin-top 30px
      padding 10px
    }
  }
  .post-pagination {
    width 700px
  }
}
</style>
