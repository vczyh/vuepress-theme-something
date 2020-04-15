<template>
  <DefaultTransition delay="0.02">
    <Card class="wrapper">
      <div class="contact">
        <i v-if="has('github')" class="iconfont link" @click="github">&#xe690;</i>
        <i v-if="has('mail')" class="iconfont link" @click="mail">&#xe61c;</i>
        <i v-if="has('qq')" class="iconfont link" @click="qq">&#xe603;</i>
      </div>
      <!-- <hr /> -->
      <div class="posts-info">
        <div class="posts-info-item">
          <div>文章</div>
          <div class="number">{{$currentPathPosts.length}}</div>
        </div>
        <div class="posts-info-item">
          <div>标签</div>
          <div class="number">{{$currentPathTags.length}}</div>
        </div>
      </div>
      <hr />
      <Tags :tags="$currentPathTags" @tag-click="tagClick" marginStyle="4px 3.5px" class="tags" />
    </Card>
  </DefaultTransition>
</template>

<script>
import Card from "@theme/components/Card.vue";
import Tags from "@theme/components/Tags.vue";
import DefaultTransition from "@theme/components/DefaultTransition.vue";
import transitonMixin from "@theme/mixins/transition";

export default {
  mixins: [transitonMixin],
  components: {
    Card,
    Tags,
    DefaultTransition
  },
  data() {
    return {
      links: []
    };
  },
  methods: {
    iconClick(link) {
      // console.log(link.link);
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
    }
  }
};
</script>

<style lang="stylus" scoped>
// @require '../styles/iconfont.css'
.wrapper {
  padding 40px 10px 30px
  .contact {
    text-align center
  }
  .link {
    font-size 30px
    cursor pointer
  }
  .posts-info {
    display flex
    justify-content center
    .posts-info-item {
      padding 20px 30px
      font-size 0.9rem
      // font-weight 500
      text-align center
      font-weight 600
      .number {
        font-size 1.2rem
        margin-top 10px
        // font-weight 600
      }
    }
  }
  .tags {
    margin-top 20px
  }
}
</style>

