<template>
  <div>
    <Card class="item">
      <div class="title">{{$frontmatter.desc || '这个人很懒 ~'}}</div>
      <div class="info-items">
        <div class="info-item">
          <div class="item-title">文章</div>
          <div class="item-num">{{$currentPathPosts.length}}</div>
        </div>
        <div class="info-item">
          <div class="item-title">标签</div>
          <div class="item-num">{{$currentPathTags.length}}</div>
        </div>
      </div>
    </Card>

    <Card class="item">
      <div class="title">标签</div>
      <Tags :tags="$currentPathTags" @tag-click="tagClick" marginStyle="4px 3.5px" />
    </Card>
  </div>
</template>

<script>
import Card from "@theme/components/Card.vue";
import Tag from "@theme/components/Tag.vue";
import Tags from "@theme/components/Tags.vue";
import DefaultTransition from "@theme/components/DefaultTransition.vue";
import transitonMixin from "@theme/mixins/transition";

export default {
  mixins: [transitonMixin],
  components: {
    Card,
    Tags,
    DefaultTransition,
    Tag,
  },
  data() {
    return {
      links: [],
    };
  },
  methods: {
    iconClick(link) {
      window.open(link.link);
    },
    has(type) {
      return this.$themeConfig.contact && this.$themeConfig.contact[type];
    },
    github() {
      window.open(this.$themeConfig.contact.github);
    },
    mail() {
      window.open(
        `mailto:${this.$themeConfig.contact.mail}?subject=你好啊！有缘人~`
      );
    },
    qq() {
      window.open(
        `http://wpa.qq.com/msgrd?v=3&uin=${this.$themeConfig.contact.qq}&site=qq&menu=yes"`
      );
    },
    tagClick(current) {
      this.$store.setCurrentPageAction(1);
      this.$router.push(`/tags/?tag=${current}`);
    },
  },
};
</script>

<style lang="stylus" scoped>
.item {
  padding 10px 20px
  margin-bottom 20px
  .title {
    font-weight 600
    line-height 2.7rem
    border-bottom 1px solid #d8e2eb
    margin-bottom 0.6rem
  }
  .info-items {
    display flex
    justify-content space-around
    font-size 1.2rem
    .info-item {
      display flex
      flex-direction column
      align-items center
      .item-title {
        font-size 1rem
        font-weight 600
      }
      .item-num {
        margin-top 10px
      }
    }
  }
  .content {
    margin-top 30px
    text-align center
    img {
      width 120px
      border-radius 50%
    }
    .name {
      font-size 1.2rem
      font-weight 600
    }
  }
}
</style>

