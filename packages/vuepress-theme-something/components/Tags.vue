<template>
  <div class="tags">
    <Tag
      v-if="allTag"
      :style="{margin: marginStyle}"
      :active="'all' == currentTag"
      :size="size"
      @click.native="tagClick('all')"
      class="tag"
    >全部</Tag>
    <Tag
      v-for="tag in tags"
      :key="tag"
      :style="{margin: marginStyle}"
      :active="tag == currentTag"
      :size="size"
      @click.native="tagClick(tag)"
      class="tag"
    >{{ tag }}</Tag>
  </div>
</template>

<script>
import Tag from "@theme/components/Tag.vue";
import { randomInt } from "../util/common";
export default {
  name: "Tags",
  components: { Tag },
  props: {
    tags: {
      type: Array,
      required: true
    },
    marginStyle: {
      type: String
    },
    allTag: {
      type: Boolean,
      default: false
    },
    currentTag: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "medium"
    }
  },
  data() {
    return {
      // colors: ["#409eff", "#67c23a", "#909399", "#f56c6c", "#e6a23c"]
      // colors: ["#ff4d40", "#ff7f50", "#1bbe36", "#0ec4ba", "#ff8f00"]
    };
  },

  methods: {
    // randomColor() {
    //   return this.colors[randomInt(0, this.colors.length - 1)];
    // },

    // getColor() {
    //   return this.$themeConfig.tagsColor
    //     ? this.$themeConfig.tagsColor
    //     : this.randomColor();
    // },

    tagClick(tag) {
      if (tag !== this.currentTag) {
        this.$emit("tag-click", tag);
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
