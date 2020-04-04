<template>
  <div class="tags">
      <Tag
        v-if="allTag"
        v-show="showTransition"
        :style="{margin: marginStyle}"
        :color="getColor()"
        :active="'' == currentTag"
        @tag-click="tagClick('')"
        class="tag"
      >全部</Tag>
      <Tag
        v-for="tag in tags"
        v-show="showTransition"
        :key="tag"
        :style="{margin: marginStyle}"
        :color="getColor()"
        :type="type"
        :active="tag == currentTag"
        @tag-click="tagClick(tag)"
        class="tag"
      >{{ tag }}</Tag>
  </div>
</template>

<script>
import Tag from "@theme/components/Tag.vue";
import transitonMixin from "@theme/mixins/transition";
import { randomInt } from "../util/common";
export default {
  name: 'Tags',
  components: { Tag },
  mixins: [transitonMixin],
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
    color: String, // #123,  no param(random color)
    type: String // dot, no param(default)
  },
  data() {
    return {
      tagTypes: ["", "success", "info", "danger", "warning"],
      // currentTag: "",
      colors: ["#409eff", "#67c23a", "#909399", "#f56c6c", "#e6a23c"]
    };
  },

  methods: {
    // randomTagType() {
    //   return this.tagTypes[Math.floor(Math.random() * this.tagTypes.length)];
    // },
    randomColor() {
      return this.colors[randomInt(0, this.colors.length - 1)];
    },

    getColor() {
      return this.color ? this.color : this.randomColor();
    },

    tagClick(tag) {
      console.log(tag);
      if (tag !== this.currentTag) {
        // this.currentTag = tag;
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
