<template>
  <main class="page">
    <div class="theme-default-content">
      <DefaultTransition delay="0.02">
        <Archive :archive="archive" v-show="showTransition"></Archive>
      </DefaultTransition>
    </div>
  </main>
</template>

<script>
import Archive from "@theme/components/Archive.vue";
import Card from "@theme/components/Card.vue";
import transitonMixin from "@theme/mixins/transition";
import { archive } from "../util/storage";
export default {
  components: { Card, Archive },
  mixins: [transitonMixin],
  data() {
    return {
      archive: []
    };
  },
  mounted() {
    this.archive = archive();
  }
};
</script>

<style lang="stylus" scoped>
// @require '../styles/wrapper.styl';
.page {
  padding-bottom 2rem
  display block
}
</style>