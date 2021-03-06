<template>
  <div>
    <ul v-show="paginationShow" :style="{'text-align' : align}">
      <li :class="{ht : preDisabled}" @click="pre()">Pre</li>
      <li :class="{active : activePage == 1}" @click="active(1)">1</li>
      <li v-show="preMore">...</li>

      <li
        v-for="index in items"
        :key="index"
        :class="{active : activePage == index}"
        @click="active(index)"
      >{{index}}</li>

      <li v-show="nextMore">...</li>
      <li :class="{active : activePage == pages}" @click="active(pages)">{{pages}}</li>
      <li :class="{ht : nextDisabled}" @click="next()">Next</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    total: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      default: 6
    },
    pagerCount: {
      type: Number,
      default: 5
    },
    currentPage: {
      type: Number,
      default: 1
    },
    align: {
      type: String,
      default: "center"
    }
  },

  data() {
    return {
      activePage: this.currentPage
    };
  },

  computed: {
    pages() {
      return Math.ceil(this.total / this.pageSize);
    },

    preDisabled() {
      return this.activePage == 1;
    },

    nextDisabled() {
      return this.activePage == this.pages;
    },

    preMore() {
      return this.activePage > 4;
    },

    nextMore() {
      return this.activePage < this.pages - 3;
    },

    paginationShow() {
      return this.pages > 1;
    },

    items() {
      const arr = [];
      let sum = 0;

      const left = this.left(this.activePage, 2);
      sum += left.length;
      arr.push(...left);

      if (this.activePage != 1 && this.activePage != this.pages) {
        arr.push(this.activePage);
        sum++;
      }

      const right = this.right(this.activePage, 2);
      sum += right.length;
      arr.push(...right);

      if (sum < 5) {
        if (left.length == 2) arr.splice(0, 0, ...this.left(left[0], 5 - sum));
        else if (right.length == 2) arr.push(...this.right(right[1], 5 - sum));
      }

      return arr;
    }
  },

  methods: {
    findLeft(num, step) {
      if (num - step > 1) {
        return true;
      }
      return false;
    },

    findRight(num, step) {
      if (num + step < this.pages) {
        return true;
      }
      return false;
    },

    left(num, step) {
      const stack = [];
      let i = 0;
      while (++i < step + 1 && this.findLeft(num, i)) {
        stack.push(num - i);
      }
      return stack.reverse();
    },

    right(num, step) {
      let i = 0;
      let arr = [];
      while (++i < step + 1 && this.findRight(num, i)) {
        arr.push(num + i);
      }
      return arr;
    },

    currentChange() {
      this.$emit("current-change", this.activePage);
    },

    active(index) {
      this.activePage = index;
      this.currentChange();
    },

    pre() {
      if (this.activePage > 1) {
        this.activePage--;
        this.currentChange();
      }
    },

    next() {
      if (this.activePage < this.pages) {
        this.activePage++;
        this.currentChange();
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
ul {
  padding 0
  margin 0
  list-style none
  li {
    cursor pointer
    min-width 30px
    font-size 13px
    font-weight 600
    display inline-block
    line-height 28px
    height 28px
    padding 0 4px
    box-sizing border-box
    // border 1px solid #ddd
    background-color #fff
    margin 0 5px
    text-align center
    border-radius 0.25rem
    box-shadow 0 2px 12px 0 rgba(0, 0, 0, 0.2)
    &:hover {
      box-shadow 0 2px 16px 0 rgba(0, 0, 0, 0.4)
    }
    &.active {
      color #fff
      background-color $accentColor
      border-color $accentColor
    }
    &.ht {
      cursor default
    }
  }
}
</style>