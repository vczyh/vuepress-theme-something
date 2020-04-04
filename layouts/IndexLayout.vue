<template>
  <DefaultTransition delay="0.05">
    <div v-show="showTransition" class="index">
      <img class="image" :src="$withBase($frontmatter.url)" />
    </div>
  </DefaultTransition>
</template>

<script>
import transitonMixin from "@theme/mixins/transition";
export default {
  name: 'IndexLayout',
  mixins: [transitonMixin]
};
</script>

<style lang="stylus">
.index {
  text-align center
}
</style>