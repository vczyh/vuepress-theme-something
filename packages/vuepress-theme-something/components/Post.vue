<template>
  <Card class="post">
    <div class="title">
      <router-link
        :to="post.path"
        @mouseover.native="over"
        @mouseout.native="out"
        :class="{underline: underline}"
        class="link"
      >{{ post.title }}</router-link>
    </div>
    <div class="excerpt" v-html="post.excerpt"></div>
    <hr class="division" />
    <PostInfo :post="post" :showTag="true"></PostInfo>
  </Card>
</template>

<script>
import PostInfo from "@theme/components/PostInfo.vue";
import Card from "@theme/components/Card.vue";
export default {
  name: "Post",
  components: { Card, PostInfo },
  props: ["post"],
  data() {
    return {
      underline: false
    };
  },
  methods: {
    over() {
      this.underline = true;
    },
    out() {
      this.underline = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.post {
  padding 16px 20px
}
.underline {
  // border-bottom 1.5px solid #707477
  border-bottom 1.5px solid $accentColor
  padding-bottom 2px
}
.division {
  margin 10px 0
}
.title {
  font-size 1.2rem
  .link {
    // color #2c3e50
    color $accentColor
    &:hover {
      text-decoration none
    }
  }
}
</style>