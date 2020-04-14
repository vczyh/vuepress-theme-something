<template>
  <main class="page">
    <slot name="top" />
    <div class="theme-default-content">
      <h1>{{$page.title}}</h1>
      <hr />
      <PostInfo :post="$page" :showTag="true"></PostInfo>
    </div>

    <DefaultTransition delay="0.1">
      <Content v-show="showTransition" class="theme-default-content" />
    </DefaultTransition>

    <PageEdit />
    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
    <div class="theme-default-content">
      <Valine />
      <Gitalk />
    </div>
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";
import PostInfo from "@theme/components/PostInfo.vue";
import Gitalk from "@theme/components/Gitalk.vue";
import Valine from "@theme/components/Valine.vue";
import DefaultTransition from "@theme/components/DefaultTransition.vue";
import transitonMixin from "@theme/mixins/transition";

export default {
  name: "Page",
  mixins: [transitonMixin],
  components: {
    PageEdit,
    PageNav,
    PostInfo,
    Gitalk,
    DefaultTransition,
    Valine
  },
  props: ["sidebarItems"]
};
</script>

<style lang="stylus" scoped>
// @require '../styles/wrapper.styl';
.page {
  padding-bottom 2rem
  display block
}
</style>
