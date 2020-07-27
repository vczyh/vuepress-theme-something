<template>
  <div class="card" :style="{padding : padding, 'text-align' : align}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    padding: {
      type: String
    },
    align: {
      type: String
    }
  }
};
</script>

<style lang="stylus" scoped>
.card
  text-align left
  // padding 16px 20px
  overflow hidden
  box-sizing border-box
  transition all 0.3s
  border-radius 0.25rem
  box-shadow 0 1px 6px 0 rgba(0, 0, 0, 0.2)
  &:hover
    box-shadow 0 2px 16px 0 rgba(0, 0, 0, 0.2)
</style>