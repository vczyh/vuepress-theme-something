<template>
  <div class="footer" ref="footerFixed">
    <div class="item">VuePress Theme Something</div>
    <div class="item">Copyright © {{start}}-{{date}} @vczyh</div>
    <div class="item">冀ICP备18009676号</div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    start: 2019,
  }),
  computed: {
    date() {
      return new Date().getFullYear();
    },
  },
  methods: {
    footerPosition() {
      this.$refs.footerFixed.classList.remove("fixed-bottom");
      const contentHeight = document.body.scrollHeight;
      console.log("contentHeight", contentHeight);

      // 可见高度
      const clientHeight = document.body.clientHeight;
      console.log("clientHeight", clientHeight);

      const winHeight = window.innerHeight;
      console.log("winHeight", winHeight);

      if (contentHeight < winHeight) {
        this.$refs.footerFixed.classList.add("fixed-bottom");
      }
    },
  },
  mounted() {
    // this.footerPosition();
  },
  watch: {
    "$route.path": function () {
      // this.footerPosition();
    },
  },
};
</script>

<style lang="stylus" scoped>
.footer {
  display flex
  justify-content center
  border-top 1px solid #eaecef
  padding 12px 0
  position absolute
  bottom 0
  left 0
  right 0
  .item {
    font-size 14px
    color #666
    font-weight 600
    &:not(:last-child) {
      margin-right 50px
    }
  }
  &.fixed-bottom {
    position fixed
    left 0
    right 0
    bottom 0
  }
}
</style>