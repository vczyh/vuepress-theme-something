<template>
  <div class="layout-wrapper tags-layout-wrapper">
    <!-- <DefaultTransition delay="0.02"> -->
      <Tags
        :tags="$tags"
        :allTag="true"
        :currentTag="currentTag"
        size="large"
        @tag-click="tagClick"
        v-show="showTransition"
        class="tags-container"
      />
    <!-- </DefaultTransition> -->
    <PostsPagination :posts="currentTagPosts" :key="currentTag" class="posts-pagination" />
  </div>
</template>

<script>
import Tags from "@theme/components/Tags.vue";
import PostsPagination from "@theme/components/PostsPagination.vue";
import DefaultTransition from "@theme/components/DefaultTransition.vue";
import transitonMixin from "@theme/mixins/transition";
import { getCurrentTagPosts } from "../util/post";
import { getNavPaths } from "@theme/util/post";

export default {
  name: "TagsLayout",
  components: { Tags, PostsPagination, DefaultTransition },
  mixins: [transitonMixin],

  computed: {
    currentTagPosts() {
      return getCurrentTagPosts(
        this.$posts,
        this.currentTag == "all" ? "" : this.currentTag
      );
    },
    currentTag() {
      return this.$route.query.tag;
    },
  },

  methods: {
    tagClick(tag) {
      this.goTags(tag);
      this.$store.setCurrentPageAction(1);
    },
  },

  mounted() {},
};
</script>

<style lang="stylus" scoped>
.tags-layout-wrapper {
  display flex
  flex-wrap wrap
  justify-content center
  .tags-container {
    width 400px
    margin-right 40px
  }
  .posts-pagination {
    max-width 750px
  }
}
@media (max-width $MQNarrow) {
  .tags-layout-wrapper {
    .tags-container {
      width 750px
      margin-right 0
    }
  }
}
</style>
