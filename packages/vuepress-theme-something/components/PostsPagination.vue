<template>
  <div class="posts-pagination">
    <DefaultTransition delay="0.02">
      <Posts
        v-show="showTransition"
        :posts="posts"
        :currentPage="currentPage"
        :pageSize="pageSize"
        :key="key"
        class="posts"
      />
    </DefaultTransition>

    <DefaultTransition delay="0.04">
      <Pagination
        :total="posts.length"
        :currentPage="currentPage"
        :key="key"
        @current-change="currentChange"
        v-show="showTransition"
        class="pagination"
      ></Pagination>
    </DefaultTransition>
  </div>
</template>

<script>
import Posts from "@theme/components/Posts.vue";
import Pagination from "@theme/components/Pagination.vue";
import DefaultTransition from "@theme/components/DefaultTransition.vue";
import transitonMixin from "@theme/mixins/transition";

export default {
  name: "PostsPagination",
  components: { Posts, Pagination, DefaultTransition },
  mixins: [transitonMixin],
  props: {
    posts: {
      type: Array,
      required: true,
    },
    pageSize: {
      type: Number,
      default: 6,
    },
    pagerCount: {
      type: Number,
      default: 5,
    },
    initCurrentPage: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      // currentPage: this.initCurrentPage,
      currentPage: this.$store.state.currentPage,
      key: 0,
    };
  },
  methods: {
    currentChange(current) {
      // window.scrollTo({
      //   top: 0,
      //   behavior: "instant"
      // });
      this.currentPage = current;
    },
  },
  watch: {
    currentPage() {
      // this.key++;
      // sessionStorage.setItem("currentPage", this.currentPage);
      this.$store.setCurrentPageAction(this.currentPage);
    },
  },
  mounted() {
    // sessionStorage.setItem("path", this.$route.path);
    // const currentPage = sessionStorage.getItem("currentPage");
    // if (currentPage) {
    //   this.currentPage = Number(currentPage);
    // }
  },
};
</script>
<style lang="stylus" scoped>
.posts-pagination {
  width 100%
  .pagination {
    margin-top 3rem
    margin-bottom 2rem
  }
}
</style>