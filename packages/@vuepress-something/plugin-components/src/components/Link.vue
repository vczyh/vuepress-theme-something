<template>
  <div class="wrapper">
    <div @click="go(url)" class="item">
      <div class="avatar">
        <img :src="avatar" />
      </div>
      <div class="content">
        <div class="content-item title">{{title}}</div>
        <div class="content-item desc">{{desc}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Link",
  props: ["title", "desc", "avatar", "url"],
  methods: {
    go(url) {
      window.open(url);
    }
  }
};
</script>

<style lang="stylus" scoped>
$width = 18rem
$height = 3.5rem
.wrapper {
  display inline-block
}
.item {
  display flex
  align-items center
  cursor pointer
  width $width
  height $height
  margin 1rem 1.5rem
  text-align left
  overflow hidden
  box-sizing border-box
  transition all 0.3s
  border-radius 0.25rem
  box-shadow 0 1px 1px 0 rgba(0, 0, 0, 0.2)
  &:hover {
    box-shadow 0 2px 10px 0 rgba(0, 0, 0, 0.1)
  }
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
    }
    .title {
      font-size 1rem
    }
    .desc {
      font-size 0.8rem
      color #acb3c2
      color #808080
    }
  }
}
</style>