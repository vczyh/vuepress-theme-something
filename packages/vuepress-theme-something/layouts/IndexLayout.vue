<template>
  <DefaultTransition delay="0.05">
    <div v-show="showTransition" class="index">
      <img class="image" :src="$withBase($frontmatter.url)" />
    </div>
  </DefaultTransition>
</template>

<script>
import DefaultTransition from "@theme/components/DefaultTransition.vue";
import transitonMixin from "@theme/mixins/transition";
export default {
  name: "IndexLayout",
  components: { DefaultTransition },
  mixins: [transitonMixin]
};
</script>

<style lang="stylus">
.index {
  text-align center
}
</style>