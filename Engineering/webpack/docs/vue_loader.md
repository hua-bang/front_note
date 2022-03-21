## Vue_loader

#### Vue_loader是什么

Vue Loader 是一个 [webpack](https://webpack.js.org/) 的 loader，它允许你以一种名为[单文件组件 (SFCs)](https://vue-loader.vuejs.org/zh/spec.html)的格式撰写 Vue 组件：

```vue
<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>
```

Vue Loader 还提供了很多酷炫的特性：

- 允许为 Vue 组件的每个部分使用其它的 webpack loader，例如在 `<style>` 的部分使用 Sass 和在 `<template>` 的部分使用 Pug；
- 允许在一个 `.vue` 文件中使用自定义块，并对其运用自定义的 loader 链；
- 使用 webpack loader 将 `<style>` 和 `<template>` 中引用的资源当作模块依赖来处理；
- 为每个组件模拟出 scoped CSS；
- 在开发过程中使用热重载来保持状态。

简而言之，webpack 和 Vue Loader 的结合为你提供了一个现代、灵活且极其强大的前端工作流，来帮助撰写 Vue.js 应用。

## 起步

#### Vue CLI

- 开箱即用

#### 手动设置

#### 安装

`vue-loader`和`vue-template-compiler`一起安装。

```shell
npm install -D vue-loader vue-template-compiler
```

### webpack 配置

Vue Loader 的配置和其它的 loader 不太一样。除了通过一条规则将 `vue-loader` 应用到所有扩展名为 `.vue` 的文件上之外，请确保在你的 webpack 配置中添加 Vue Loader 的插件：

```js
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  module: {
    rules: [
      // ... 其它规则
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
}
```

**这个插件是必须的！** 它的职责是将你定义过的其它规则复制并应用到 `.vue` 文件里相应语言的块。例如，如果你有一条匹配 `/\.js$/` 的规则，那么它会应用到 `.vue` 文件里的 `<script>` 块。

#### 处理资源文件

当 Vue Loader 编译单文件组件中的 `<template>` 块时，它也会将所有遇到的资源 URL 转换为 **webpack 模块请求**。

```html
<img src="../image.png">
```

```js
createElement('img', {
  attrs: {
    src: require('../image.png') // 现在这是一个模块的请求了
  }
})
```

```js
{
  video: ['src', 'poster'],
  source: 'src',
  img: 'src',
  image: ['xlink:href', 'href'],
  use: ['xlink:href', 'href']
}
```

### 转换规则

- 如果路径是绝对路径 (例如 `/images/foo.png`)，会原样保留。

- 如果路径以 `.` 开头，将会被看作相对的模块依赖，并按照你的本地文件系统上的目录结构进行解析。

- 如果路径以 `~` 开头，其后的部分将会被看作模块依赖。这意味着你可以用该特性来引用一个 Node 依赖中的资源：

  ```html
  <img src="~some-npm-package/foo.png">
  ```

- 如果路径以 `@` 开头，也会被看作模块依赖。如果你的 webpack 配置中给 `@` 配置了 alias，这就很有用了。所有 `vue-cli` 创建的项目都默认配置了将 `@` 指向 `/src`