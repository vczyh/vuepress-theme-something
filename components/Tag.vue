<template>
  <span
    class="tag medium"
    :style="{'background-color': color,'border-color':color }"
    :class="{active: active }"
  >
    <slot></slot>
  </span>
</template>

<script>
import { randomInt } from "../util/common";
export default {
  name: "Tag",
  props: {
    color: {
      type: String
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      col: "#404040"
    };
  }
};
</script>

<style lang="stylus" scoped>
$tag-vertical-padding = 0px
$tag-horizontal-padding = 8px
$height = 1.5rem
// $height = $height - 0.1rem
.tag {
  display inline-block
  padding $tag-vertical-padding $tag-horizontal-padding
  color #fff
  border-radius 0.25rem
  white-space nowrap
  font-size 0.77rem
  height $height
  line-height $height
  // box-shadow 0 1px 6px 0 rgba(0, 0, 0, 0.2)
}
.active {
  // font-size 0.9rem
  height 1.8rem
  line-height 1.8rem
  box-shadow 0 1px 6px 0 rgba(0, 0, 0, 0.6)
}
.dark {
}
.dot {
  position relative
  margin-left $height + 1.5rem
  // &::before{
  // content ''
  // position absolute
  // width 0
  // height 0
  // top 0
  // left - $height
  // border ($height/2) solid transparent
  // border-right-color red
  // }
  &::after {
    content ''
    position absolute
    width 0.25rem
    height 0.25rem
    border-radius 50%
    background #bfbfbf
    top ($height / 2 - 0.125rem)
    left 0.25rem
  }
}
</style>