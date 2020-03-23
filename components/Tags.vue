<template>
  <div class="tags">
    <!-- <el-tag
      v-for="tag in tags"
      :key="tag"
      :type="randomTagType()"
      size="medium"
      :hit="true"
      effect="dark"
      @click="tagClick(tag)"
      class="tag"
    >{{ tag }}</el-tag>-->

    <Tag
      v-for="tag in tags"
      :key="tag"
      :size="size"
      :style="{margin: marginStyle}"
      :color="randomColor()"
      @tag-click="tagClick(tag)"
      class="tag"
    >{{ tag }}</Tag>
  </div>
</template>

<script>
import Tag from "@theme/components/Tag.vue";
import { randomInt } from "../util/common";
export default {
  components: { Tag },
  props: {
    tags: {
      type: Array,
      required: true
    },
    size: {
      type: String,
      default: "large"
    },
    marginStyle: {
      type: String
    }
  },
  data() {
    return {
      tagTypes: ["", "success", "info", "danger", "warning"],
      currentTag: "",
      colors: ["#409eff", "#67c23a", "#909399", "#f56c6c", "#e6a23c"]
    };
  },

  methods: {
    randomTagType() {
      return this.tagTypes[Math.floor(Math.random() * this.tagTypes.length)];
    },
    randomColor() {
      return this.colors[randomInt(0, this.colors.length - 1)];
    },

    tagClick(tag) {
      if (tag !== this.currentTag) {
        this.currentTag = tag;
        this.$emit("click", tag);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@require '../styles/wrapper.styl'

.tags {
  .tag {
    margin 4px 4px 10px
    cursor pointer
  }
}
</style>
