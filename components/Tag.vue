<template>
  <span
    @click="tagClick"
    class="tag medium"
    :style="{'background-color': color,'border-color':color }"
    :class="{dot: type=='dot' }"
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
    type: {
      type: String,
      default: "dark"
    }
  },
  data() {
    return {
      col: "#404040"
    };
  },
  methods: {
    tagClick() {
      this.$emit("tag-click");
    }
  }
};
</script>

<style lang="stylus" scoped>
$tag-vertical-padding = 0px
$tag-horizontal-padding = 8px
$height = 1.4rem
// $height = $height - 0.1rem
.tag {
  display inline-block
  padding $tag-vertical-padding $tag-horizontal-padding
  color #fff
  border-radius 4px
  white-space nowrap
  font-size 0.7rem
  height $height
  line-height $height
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