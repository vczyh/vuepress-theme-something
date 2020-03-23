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
import { resolveSidebarItems } from "@parent-theme/util";

export default {
  name: "Layout",

  components: {
    Page
  },

  computed: {
    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    }
  }
};
</script>
