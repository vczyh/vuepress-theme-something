<template>
  <Card class="wrapper">
    <!-- <img :src="$withBase('/avatar.jpg')" /> -->
    <div class="contact">
      <!-- <hr /> -->
      <!-- github -->
      <!-- <div>
        <i class="iconfont">&#xe690;</i>
        <span>https://github.com/vczyh</span>
      </div>-->
      <!-- mail -->
      <!-- <div>
        <i class="iconfont">&#xe61c;</i>
        <span>2939531323@qq.com</span>
      </div>-->

      <i class="iconfont link">&#xe690;</i>
      <i class="iconfont link">&#xe61c;</i>
      <i class="iconfont link">&#xe603;</i>
      <!-- <hr /> -->
    </div>
    <div class="posts-info">
      <div class="posts-info-item">
        <!-- <div class="iconfont">&#xe600;</div> -->
        <div class="iconfont">文章</div>
        <div class="number">{{posts.length}}</div>
      </div>
      <div class="posts-info-item">
        <!-- <div class="iconfont">&#xe62c;</div> -->
        <div class="iconfont">标签</div>
        <div class="number">{{tags.length}}</div>
      </div>
    </div>
  </Card>
</template>

<script>
import Card from "@theme/components/Card.vue";
import postsMixin from "@theme/mixins/posts";

export default {
  components: {
    Card
  },
  mixins: [postsMixin],
  data() {
    return {
      links: []
    };
  },
  methods: {
    iconClick(link) {
      console.log(link.link);
      window.open(link.link);
    }
  }
};
</script>

<style lang="stylus" scoped>
@require '../styles/iconfont.css'

.wrapper {
  padding 20px 10px
  text-align center
  img {
    border-radius 50%
    width 100px
  }
  i {
    cursor pointer
    vertical-align middle
    font-size 16px
  }
  .link {
    font-size 30px
  }
  .posts-info {
    display flex
    justify-content center
    .posts-info-item {
      padding 20px 30px
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

