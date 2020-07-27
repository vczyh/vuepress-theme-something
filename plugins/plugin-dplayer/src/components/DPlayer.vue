<template>
  <div id="dplayer" />
</template>

<script>
import DPlayer from "dplayer";
export default {
  name: "DPlayer",
  props: {
    options: Object,
  },
  methods: {
    load() {
      const dp = new DPlayer({
        container: document.getElementById("dplayer"),
        ...this.options,
      });
    },
  },

  mounted() {
    this.load();
  },
};
</script>

<style>
</style>