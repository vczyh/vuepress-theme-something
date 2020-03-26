<template>
  <main class="page">
    <slot name="top" />
    <DefaultTransition delay="0.02">
      <div v-show="showTransition" class="theme-default-content">
        <h2>{{$page.title}}</h2>
        <PostInfo :post="$page" :showTag="true"></PostInfo>
        <Content />
      </div>
    </DefaultTransition>

    <PageEdit />
    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
    <Gitalk class="theme-default-content" />
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";
import PostInfo from "@theme/components/PostInfo.vue";
import Gitalk from "@theme/components/Gitalk.vue";
import transitonMixin from "@theme/mixins/transition";

export default {
  name: "Page",
  mixins: [transitonMixin],
  components: { PageEdit, PageNav, PostInfo, Gitalk },
  props: ["sidebarItems"]
};
</script>

<style lang="stylus">
// @require '../styles/wrapper.styl';
.page {
  padding-bottom 2rem
  display block
}
</style>
