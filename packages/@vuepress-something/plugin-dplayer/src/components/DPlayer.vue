<template>
  <div id="dplayer" />
</template>

<script>
export default {
  name: "DPlayer",
  props: {
    options: Object,
  },
  methods: {
    load() {
      import("dplayer").then(({ default: DPlayer }) => {
        const dp = new DPlayer({
          container: document.getElementById("dplayer"),
          ...this.options,
        });
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