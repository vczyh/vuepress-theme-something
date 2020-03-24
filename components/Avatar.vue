<template>
  <Card class="wrapper">
    <div class="contact">
      <i v-if="has('github')" class="iconfont link" @click="github">&#xe690;</i>
      <i v-if="has('mail')" class="iconfont link" @click="mail">&#xe61c;</i>
      <i v-if="has('qq')" class="iconfont link" @click="qq">&#xe603;</i>
    </div>
    <div class="posts-info">
      <div class="posts-info-item">
        <div class="iconfont">文章</div>
        <div class="number">{{$posts.length}}</div>
      </div>
      <div class="posts-info-item">
        <div class="iconfont">标签</div>
        <div class="number">{{$tags.length}}</div>
      </div>
    </div>
    <hr />
    <Tags :tags="$tags" color="#404040" @click="tagClick" marginStyle="3px 3px" />
  </Card>
</template>

<script>
import Card from "@theme/components/Card.vue";
import Tags from "@theme/components/Tags.vue";

export default {
  components: {
    Card,
    Tags
  },
  data() {
    return {
      links: []
    };
  },
  methods: {
    iconClick(link) {
      console.log(link.link);
      window.open(link.link);
    },
    has(type) {
      return this.$themeConfig.link[type];
    },
    github() {
      window.open(this.$themeConfig.link.github);
    },
    mail() {
      window.open(
        `mailto:${this.$themeConfig.link.mail}?subject=你好啊！有缘人~`
      );
    },
    qq() {
      window.open(`http://wpa.qq.com/msgrd?v=3&uin=${this.$themeConfig.link.qq}&site=qq&menu=yes"`)
    },
    tagClick(current) {
      sessionStorage.setItem('tag',current)
      this.$router.push('/tag')
        console.log(current)
    }
  }
};
</script>

<style lang="stylus" scoped>
// @require '../styles/iconfont.css'
.wrapper {
  padding 20px 10px
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
      text-align center
      .iconfont {
        font-size 15px
        font-weight 600
        margin-bottom 8px
      }
      .number {
        font-size 1.2rem
        font-weight 500
      }
    }
  }
}
</style>

