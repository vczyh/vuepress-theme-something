<template>
  <div class="theme-default-content">
    <DefaultTransition delay="0.02">
      <FriendLink v-show="showTransition" />
    </DefaultTransition>
  </div>
</template>

<script>
import FriendLink from "@theme/components/FriendLink.vue";
import DefaultTransition from "@theme/components/DefaultTransition.vue";
import transitonMixin from "@theme/mixins/transition";
export default {
  name: "FriendlyLinkLayout",
  mixins: [transitonMixin],
  components: {
    FriendLink,
    DefaultTransition
  }
};
</script>

<style lang="stylus" scoped>
.theme-custom-content {
  width 950px
  margin 0 auto
  padding 5rem 2.5rem
}
</style>