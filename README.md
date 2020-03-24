### 快速开始

```bash
npm install vuepress-theme-somethng --save-dev
```

通过 `config.js` 使用主题
```js
module.exports = {
  theme: 'vuepress-theme-something'
}
```

### 使用

除了支持默认主题的所有配置外，本主题提供了三个Layout

`PostsLayout`  显示文章列表

`TagsLayout`  标签云

`ArchiveLayout` 归档

如果你想要添加一个博客列表页，先根据官方文档配置导航栏，例如 `/blog`，然后创建文件夹 `docs/blog/index.md`

```
---
layout: PostsLayout
---
```

### 其他

vuepress-theme-something 刚刚起步，需要不断完善，之后会不断优化，如有不足，请大家多多指教~

