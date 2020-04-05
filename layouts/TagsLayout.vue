<template>
  <main class="page">
    <div class="theme-default-content">
      <DefaultTransition delay="0.02">
        <div v-show="showTransition">
          <Tags
            :tags="$tags"
            :allTag="true"
            :currentTag="currentTag"
            color="#404040"
            @click="tagClick"
          />
        </div>
      </DefaultTransition>
      <PostsPagination :posts="currentTagPosts" :key="currentTag" />
    </div>
  </main>
</template>

<script>
import Tags from "@theme/components/Tags.vue";
import PostsPagination from "@theme/components/PostsPagination.vue";
import DefaultTransition from "@theme/components/DefaultTransition.vue";
import transitonMixin from "@theme/mixins/transition";
import { getCurrentTagPosts } from "../util/post";

export default {
  name: "TagsLayout",
  components: { Tags, PostsPagination, DefaultTransition },
  mixins: [transitonMixin],
  data() {
    return {
      currentTag: "",
      posts: []
    };
  },

  computed: {
    currentTagPosts() {
      return getCurrentTagPosts(this.$posts, this.currentTag);
    }
  },

  methods: {
    tagClick(tag) {
      this.currentTag = tag;
      console.log("dianji ");
    }
  },
  mounted() {
    this.currentTag = sessionStorage.getItem("tag");
    sessionStorage.setItem("tag", "");
  }
};
</script>

<style lang="stylus" scoped>
// @require '../styles/wrapper.styl'
.page {
  padding-bottom 2rem
  display block
}
</style>
