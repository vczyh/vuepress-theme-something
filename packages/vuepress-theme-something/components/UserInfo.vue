<template>
  <Card class="user-info-wrapper">
    <img :src="$themeConfig.logo" class="avatar" />
    <h3>{{$themeConfig.author}}</h3>
    <div>{{$site.description}}</div>
  </Card>
</template>

<script>
import Card from "@theme/components/Card.vue";
export default {
  name: "userInfo",
  components: {
    Card,
  },
};
</script>

<style lang="stylus" scoped>
.user-info-wrapper {
  display flex
  flex-direction column
  align-items center
  font-size 14px
  color #666
  .avatar {
    width 160px
    border-radius 50%
  }
}
</style>