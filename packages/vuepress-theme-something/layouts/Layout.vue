<template>
  <Page :sidebar-items="sidebarItems">
    <template #top>
      <slot name="page-top" />
    </template>
    <template #bottom>
      <slot name="page-bottom" />
    </template>
  </Page>
</template>

<script>
import Page from "@theme/components/Page.vue";
import Card from "@theme/components/Card.vue";
import { resolveSidebarItems } from "@parent-theme/util";

export default {
  name: "Layout",

  components: {
    Page,
    Card,
  },

  computed: {
    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },
  },
};
</script>
