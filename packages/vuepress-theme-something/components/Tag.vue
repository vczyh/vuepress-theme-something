<template>
  <span
    class="tag"
    :style="{'background-color': getColor() }"
    :class="[{active: active }, size, {dot: dot}]"
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
    },
    size: {
      type: String,
      default: "medium"
    },
    dot: {
      type: Boolean,
      default: false
    }
  },
  // #7b5d5f
  data() {
    return {
      col: "#404040",
      colors: ["#d54a94", "#ff3828","#6640ff", "#0033ff", "#2e8b57", "#0dbf8c"]
    };
  },
  methods: {
    randomColor() {
      return this.colors[randomInt(0, this.colors.length - 1)];
    },
    getColor() {
      return this.color || this.randomColor();
    }
  }
};
</script>

<style lang="stylus" scoped>
$tag-vertical-padding = 0px
$tag-horizontal-padding = 5px
$height = 1.2rem
// $height = $height - 0.1rem
.tag {
  display inline-block
  padding $tag-vertical-padding $tag-horizontal-padding
  // color #fff
  // color #808080
  color #fff
  border-radius 8px
  // border 1px solid #808080
  white-space nowrap
  // font-size 0.79rem
  // height $height
  // line-height $height
  // box-shadow 0 1px 6px 0 rgba(0, 0, 0, 0.2)
}
.medium {
  font-size 0.8rem
  // font-size 12px
  font-weight 500
  height $height
  line-height $height
}
.large {
  font-size 0.9rem
  height $height + 0.3rem
  line-height $height + 0.3rem
}
.active {
  // font-size 0.9rem
  // height 1.8rem
  // line-height 1.8rem
  box-shadow 0 1px 15px 0 rgba(0, 0, 0, 0.3)
}
.dark {
}
.dot {
  position relative
  padding 0 10px
  // margin-left $height + 3rem
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
    background #fff
    box-shadow: 0 0 0 1px rgba(0,0,0,0.3);
    top ($height / 2 - 0.125rem)
    left 0.2rem
  }
}
</style>