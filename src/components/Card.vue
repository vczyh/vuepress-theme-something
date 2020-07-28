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
  border-radius 8px
  box-shadow 0 2px 8px 0 rgba(0, 0, 0, 0.15)
  &:hover
    box-shadow 0 5px 20px 0 rgba(0, 0, 0, 0.15)
</style>