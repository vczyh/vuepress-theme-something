<template>
  <main class="page">
    <div class="theme-default-content">
      <DefaultTransition delay="0.02">
        <Tags v-show="showTransition" :tags="tags" @click="tagClick" />
      </DefaultTransition>
      <!-- <span>{{currentTag}}</span> -->
      <PostsPagination :posts="currentTagPosts" :key="currentTag" />
    </div>
  </main>
</template>

<script>
import Tags from "@theme/components/Tags.vue";
import PostsPagination from "@theme/components/PostsPagination.vue";
import transitonMixin from "@theme/mixins/transition";
import { tags, currentTagPosts } from "../util/storage";

export default {
  name: "TagsLayout",
  components: { Tags, PostsPagination },
  mixins: [transitonMixin],
  data() {
    return {
      tags: [],
      currentTag: "",
      posts: []
    };
  },

  computed: {
    currentTagPosts() {
      return currentTagPosts(this.currentTag);
    }
  },

  methods: {
    getTags() {
      this.tags = tags();
    },

    tagClick(tag) {
      this.currentTag = tag;
    }
  },

  mounted() {
    this.getTags();
  }
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block
</style>
