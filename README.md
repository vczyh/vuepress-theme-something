
[![Join the chat at https://gitter.im/vuepress-theme-something/community](https://badges.gitter.im/vuepress-theme-something/community.svg)](https://gitter.im/vuepress-theme-something/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Quick Start

```bash
npm install -g @vuepress-something/cli
```

```bash
vps init
```

如果你想在现有的项目里使用，可以这么做：
```bash
npm install vuepress vuepress-theme-something --save-dev
```

通过 `config.js` 使用主题：
```js
module.exports = {
  theme: 'vuepress-theme-something'
}
```

## 使用

除了支持默认主题的所有配置外，本主题提供了多个Layout

| layout          | 功能         |
| --------------- | ------------ |
| PostsLayout     | 显示文章列表 |
| TagsLayout      | 标签云       |
| ArchiveLayout   | 归档         |
| WaterfallLayout | 照片瀑布流   |

### PostsLayout

使用 `PostsLayout` 的页面会显示为博客列表页，先根据官方文档配置导航栏，例如 `/blog/`，然后创建 `docs/blog/README.md` ，那么列表的内容就是 `blog` 文件夹下的所有文章

```
---
layout: PostsLayout
---
```

### TagsLayout

使用 `TagsLayout` 的页面会显示为标签云

```
---
layout: TagsLayout
---
```

### ArchiveLayout

```
---
layout: ArchiveLayout
---
```

### WaterfallLayout

```
---
layout: WaterfallLayout
pictures:
  - src: http://p.vczyh.com/blog/IMG_1096(20200128-152110).JPG
    info: 科比绝杀
  - src: http://p.vczyh.com/blog/IMG_1097(20200128-153100).JPG
  - src: http://p.vczyh.com/blog/IMG_1102.GIF
---
```

| 参数     | 描述               |
| -------- | ------------------ |
| pictures | 表示图片数组       |
| src      | 图片链接           |
| info     | 图片描述，**可选** |

## 其他

vuepress-theme-something 刚刚起步，之后会不断改进，请大家多多指教~

