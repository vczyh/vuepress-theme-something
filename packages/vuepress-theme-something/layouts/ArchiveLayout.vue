<template>
  <div class="layout-wrapper archive-layout-wrapper">
    <DefaultTransition delay="0.02">
      <Archive :archive="$archive" v-show="showTransition"></Archive>
    </DefaultTransition>
  </div>
</template> 

<script>
import Archive from "@theme/components/Archive.vue";
import DefaultTransition from "@theme/components/DefaultTransition.vue";
import transitonMixin from "@theme/mixins/transition";
export default {
  components: { Archive, DefaultTransition },
  mixins: [transitonMixin],
};
</script>

<style lang="stylus" scoped>
.archive-layout-wrapper {
  display flex
  justify-content center
}
@media (max-width $MQMobile) {
  .archive-layout-wrapper {
    justify-content flex-start
  }
}
</style>