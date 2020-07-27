<template>
  <div class="theme-default-content">
    <DefaultTransition delay="0.02">
      <FriendLink v-show="showTransition" />
    </DefaultTransition>
    <DefaultTransition delay="0.04">
      <div v-show="showTransition" class="comments">
        <Valine />
        <Gitalk />
      </div>
    </DefaultTransition>
  </div>
</template>

<script>
import FriendLink from "@theme/components/FriendLink.vue";
import DefaultTransition from "@theme/components/DefaultTransition.vue";
import transitonMixin from "@theme/mixins/transition";
import Gitalk from "@theme/components/Gitalk.vue";
import Valine from "@theme/components/Valine.vue";
export default {
  name: "LinksLayout",
  mixins: [transitonMixin],
  components: {
    FriendLink,
    DefaultTransition,
    Gitalk,
    Valine
  }
};
</script>

<style lang="stylus" scoped>
.comments {
  margin-top 5rem
}
</style>