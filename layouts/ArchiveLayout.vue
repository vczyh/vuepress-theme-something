<template>
  <main class="page">
    <div class="theme-default-content">
      <DefaultTransition delay="0.02">
        <Archive :archive="$archive" v-show="showTransition"></Archive>
      </DefaultTransition>
    </div>
  </main>
</template>

<script>
import Archive from "@theme/components/Archive.vue";
import DefaultTransition from "@theme/components/DefaultTransition.vue";
import transitonMixin from "@theme/mixins/transition";
export default {
  components: { Archive, DefaultTransition },
  mixins: [transitonMixin]
};
</script>

<style lang="stylus" scoped>
// @require '../styles/wrapper.styl';
.page {
  padding-bottom 2rem
  display block
}
</style>