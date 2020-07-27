<template>
  <div class="friend-wrapper">
    <div v-for="category in Object.keys($frontmatter.links)" class="category">
      <h2>{{category}}</h2>
      <div class="friend-items">
        <Card v-for="item in $frontmatter.links[category]" @click.native="go(item.url)" class="friend-item">
          <div class="avatar">
            <img :src="item.avatar" />
          </div>
          <div class="content">
            <div class="content-item title">{{item.title}}</div>
            <!-- <div class="content-item title">vczyh</div> -->
            <div class="content-item desc">{{item.desc}}</div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@theme/components/Card.vue";
export default {
  name: "FriendLink",
  components: {
    Card
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    go(url) {
      window.open(url);
    }
  },
  mounted() {
    const user = {
      title: "Zhang Yuheng's Blog",
      desc: "不会写诗 但志在远方",
      avatar: "http://p.vczyh.com/blog/TIM图片20200321204313.jpg",
      url: "https://baidu.com"
    };
    let i = 10;
    while (i-- > 0) this.items.push(user);
  }
};
</script>

<style lang="stylus" scoped>
$width = 18rem
$height = 3.5rem
.friend-items {
  display flex
  flex-wrap wrap
  justify-content space-around
  .friend-item {
    display flex
    align-items center
    cursor pointer
    width $width
    height $height
    margin 1rem 1rem
    .avatar {
      img {
        display block
        width $height
      }
    }
    .content {
      padding-left 1rem
      min-width 0
      .content-item {
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        line-height 1.6rem
        // color $accentColor
      }
      .title {
        font-size 1rem
      }
      .desc {
        font-size 0.8rem
        color #acb3c2
        color #808080
        // color $accentColor
      }
    }
  }
}
</style>