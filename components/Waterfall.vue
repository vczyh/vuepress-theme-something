<template>
  <vue-waterfall-easy
    :imgsArr="imgsArr"
    @scrollReachBottom="getData"
    :maxCols="3"
    :imgWidth="300"
    :gap="30"
    linkRange="card"
    :enablePullDownEvent="true"
    @click="clickFn"
  >
    <div class="img-info item" slot-scope="props">
      <!-- <p>{{props.value.info}}</p> -->
      <span>{{props.value.info}}</span>
    </div>
  </vue-waterfall-easy>
</template>

<script>
import vueWaterfallEasy from "vue-waterfall-easy";
export default {
  name: "Waterfall",
  components: {
    vueWaterfallEasy
  },
  data() {
    return {
      imgsArr: [],
      group: 0, // request param
      base: "",
      // items: [
      //   {
      //     src: "http://p.vczyh.com/blog/1.jpg",
      //     href: "",
      //     info: "Gigi & Kobe"
      //   },
      //   {
      //     src: "http://p.vczyh.com/blog/2.jpg",
      //     info: "Kobe Bryant"
      //   }
      // ]
      items: []
    };
  },
  components: {
    vueWaterfallEasy
  },
  methods: {
    getData() {
      const limit = 10;
      const start = this.group * limit;
      const end = start + limit;
      this.imgsArr = this.imgsArr.concat(this.items.slice(start, end));
      this.group++;
    },

    getData1() {
      for (let i = 0; i < 100; i++) {
        let item = {};
        item.id = i;
        let random = this.items[Math.floor(Math.random() * this.items.length)];
        item.src = random.src;
        item.info = random.info;
        this.imgsArr.push(item);
      }
    },
    clickFn(event, { index, value }) {
      window.open(value.src);
    }
  },
  created() {
    this.items = this.$frontmatter.pictures;
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].href = this.items[i].src;
    }
    // for (let i = 0; i < 5; i++) {
    //   this.items = this.items.concat(this.items);
    //   console.log(this.items.length)
    // }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style lang="stylus" scoped>
.item {
  color #000
  text-align center
  overflow hidden
}
</style>
