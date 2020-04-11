<template>
  <Card class="post">
    <div class="title">
      <router-link :to="post.path" class="link">{{ post.title }}</router-link>
    </div>
    <div class="excerpt" v-html="post.excerpt"></div>
    <hr />
    <PostInfo :post="post"></PostInfo>
  </Card>
</template>

<script>
import PostInfo from "@theme/components/PostInfo.vue";
import Card from "@theme/components/Card.vue";
export default {
  name: "Post",
  components: { Card, PostInfo },
  props: ["post"]
};
</script>

<style lang="stylus" scoped>
.post {
  padding 16px 20px
}
.title {
  font-size 1.2rem
  .link {
    color #2c3e50
    &:hover {
      text-decoration underline
    }
  }
}
</style>