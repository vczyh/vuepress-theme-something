<template>
  <div class="posts-pagination">
    <DefaultTransition delay="0.02">
      <Posts
        v-show="showTransition"
        :posts="posts"
        :currentPage="currentPage"
        :pageSize="pageSize"
        :key="key"
      />
    </DefaultTransition>

    <!-- <DefaultTransition delay="0.04">
      <Pagination
        v-show="showTransition"
        :total="posts.length"
        :page-size="pageSize"
        :pager-count="pagerCount"
        :current-page="currentPage"
        @current-change="currentChange"
        :key="key"
      />
    </DefaultTransition>-->

    <DefaultTransition delay="0.04">
      <Pagination
        :total="posts.length"
        :currentPage="currentPage"
        :key="key"
        @current-change="currentChange"
        v-show="showTransition"
      ></Pagination>
    </DefaultTransition>
  </div>
</template>

<script>
import Posts from "@theme/components/Posts.vue";
import Pagination from "@theme/components/Pagination.vue";
import transitonMixin from "@theme/mixins/transition";
import { setCurretnPage, getCurretnPage } from "../util/storage";

export default {
  name: "PostsPagination",
  components: { Posts, Pagination },
  mixins: [transitonMixin],
  props: {
    posts: {
      type: Array,
      required: true
    },
    pageSize: {
      type: Number,
      default: 6
    },
    pagerCount: {
      type: Number,
      default: 5
    },
    initCurrentPage: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      currentPage: this.initCurrentPage,
      key: 0
    };
  },
  methods: {
    currentChange(current) {
      this.currentPage = current;
      // window.scrollTo(0, 0);
    }
  },
  watch: {
    currentPage() {
      console.log('page'+ this.currentPage)
      this.key++;
    }
  }
};
</script>
<style lang="stylus" scoped></style>