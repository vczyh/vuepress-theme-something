## Install

```shell
yarn add -D @vuepress-something/vuepress-plugin-dplayer dplayer
```

## Usage

1. 修改 `config.js`

   ```js
   module.exports = {
     plugins: ['@vuepress-something/vuepress-plugin-dplayer']
   }
   ```

2. 在Markdown 文件中使用 Vue 组件

   ```html
   <DPlayer :options="{
     		screenshot: true,
           video: {
             url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
             pic: 'demo.jpg',
             thumbnails: 'thumbnails.jpg',
           },
           subtitle: {
             url: 'webvtt.vtt',
           },
           danmaku: {
             id: 'demo',
             api: 'https://api.prprpr.me/dplayer/',
           },
   }"/>
   ```

## Thanks

- [**upcwangying/vuepress-plugin-dplayer**](https://github.com/upcwangying/vuepress-plugin-dplayer)

