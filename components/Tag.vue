<template>
  <span
    @click="tagClick"
    :style="{'background-color': color,'border-color':color }"
    :class="{large : size=='large', medium : size== 'medium' }"
  >
    <slot></slot>
  </span>
</template>

<script>
import { randomInt } from "../util/common";
export default {
  name: "Tag",
  // props: ["color", "size"],
  props: {
    color: {
      type: String
    },
    size:{
      type:String,
      defaul: 'large'
    }
  },
  data() {
    return {
      colors: ["#409eff", "#67c23a", "#909399", "#f56c", "#e6a"]
    };
  },
  methods: {
    randomColor() {
      colorIndex = this.colors[randomInt(0, this.colors.length - 1)];
    },
    tagClick() {
      this.$emit("tag-click");
    }
  }
};
</script>

<style lang="stylus" scoped>
.large {
  display inline-block
  height 32px
  padding 0 10px
  line-height 30px
  font-size 12px
  border 1px solid #d9ecff
  border-radius 4px
  box-sizing border-box
  white-space nowrap
  color #fff
}
.medium {
  display inline-block
  height 24px
  padding 0 6px
  line-height 22px
  font-size 12px
  border 1px solid #d9ecff
  border-radius 4px
  box-sizing border-box
  white-space nowrap
  color #fff
}
</style>