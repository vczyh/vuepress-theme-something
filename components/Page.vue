<template>
  <main class="page">
    <slot name="top" />
    <DefaultTransition delay="0.02">
      <Content v-show="showTransition" class="theme-default-content" />
    </DefaultTransition>

    <PageEdit />
    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";
import transitonMixin from "@theme/mixins/transition";

export default {
  name: "Page",
  mixins: [transitonMixin],
  components: { PageEdit, PageNav },
  props: ["sidebarItems"]
};
</script>

<style lang="stylus">
// @require '../styles/wrapper.styl';

.page {
  padding-bottom: 2rem;
  display: block;
}
</style>
