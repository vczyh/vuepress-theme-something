<template>
  <main class="page">
    <div class="theme-default-content">
      <DefaultTransition delay="0.02">
        <div v-show="showTransition" class="tags-container">
          <Tags :tags="$tags" :allTag="true" :currentTag="currentTag" size="large" @tag-click="tagClick" />
        </div>
      </DefaultTransition>
      <PostsPagination :posts="currentTagPosts" :key="currentTag" />
      <!-- <PostsPagination :posts="currentTagPosts" /> -->
    </div>
  </main>
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
    }
  },

  methods: {
    tagClick(tag) {
      this.goTags(tag);
      this.$store.setCurrentPageAction(1);
    }
  },

  mounted() {}
};
</script>

<style lang="stylus" scoped>
// @require '../styles/wrapper.styl'
.page {
  padding-bottom 2rem
  display block
}
.tags-container {
  margin-bottom 2rem
}
</style>
