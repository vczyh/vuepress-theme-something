<template>
  <div class="card" :style="{padding : padding, 'text-align' : align}" :class="hoverClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    padding: {
      type: String,
    },
    align: {
      type: String,
    },
    canHover: {
      type: Boolean,
      default: true
    },
  },
  computed: {
    hoverClass() {
      return {
        hover: this.canHover
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.card {
  text-align left
  overflow hidden
  box-sizing border-box
  transition all 0.3s
  border-radius 8px
  box-shadow 0 2px 7px 0 rgba(0, 0, 0, 0.1)
}
.hover {
  &:hover {
    box-shadow 0 5px 15px 0 rgba(0, 0, 0, 0.15)
  }
}
</style>