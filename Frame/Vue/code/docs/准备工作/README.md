### 准备工作

前置内容：flow，源码目录，构建方法，编译入口。

#### 认识flow

[Flow](https://flow.org/en/docs/getting-started/) 是 facebook 出品的 JavaScript 静态类型检查工具。Vue.js 的源码利用了 Flow 做了静态类型检查，所以了解 Flow 有助于我们阅读源码

####  为什么用 Flow

1. js动态语言，逻辑上可能会有错误
2. 项目越复杂就越需要通过工具的手段来保证项目的维护性和增强代码的可读性。 

#### Flow 的工作方式

- **类型推断**：通过变量的使用上下文来推断出变量类型，然后根据这些推断来检查类型。
- **类型注释**：事先注释好我们期待的类型，Flow 会基于这些注释来判断。

#### Vue.js 源码目录设计

源码都在src目录下

![image-20210402111418707](F:\github\js_note\Frame\Vue\code\准备工作\image-20210402111418707.png)

##### 结构

- compiler
  - compiler 目录包含 Vue.js 所有编译相关的代码。它包括把模板解析成 ast 语法树，ast 语法树优化，代码生成等功能。
  - 编译的工作可以在构建时做（借助 webpack、vue-loader 等辅助插件）；也可以在运行时做，使用包含构建功能的 Vue.js。显然，编译是一项耗性能的工作，所以更推荐前者——离线编译。
- core
  - 核心代码，包括内置组件，全局api封装、Vue实例化，观察者，虚拟DOM，工具函数等等
- platform
  - 可以在web端，也可以配合weex跑在native上
  - platform 是 Vue.js 的入口，2 个目录代表 2 个主要入口，分别打包成运行在 web 上和 weex 上的 Vue.js。
- server
  - Vue.js 2.0 支持了服务端渲染，所有服务端渲染相关的逻辑都在这个目录下。注意：这部分代码是跑在服务端的 Node.js，不要和跑在浏览器端的 Vue.js 混为一谈。
  - 服务端渲染主要的工作是把组件渲染为服务器端的 HTML 字符串，将它们直接发送到浏览器，最后将静态标记"混合"为客户端上完全交互的应用程序。
- sfc
  - 通常开发会以webpack.js作为协助构建，然后通过.vue编写组件
  - 这个目录下的逻辑会把.vue内容解析成js对象
-  shared
  - Vue.js 会定义一些工具方法，这里定义的工具方法都是会被浏览器端的 Vue.js 和服务端的 Vue.js 所共享的。

总结：功能划分模块，复用代码抽离

# Vue.js 源码构建

Vue.js 源码是基于 [Rollup](https://github.com/rollup/rollup) 构建的，它的构建相关配置都在 scripts 目录下

scripts/build.js

1. 先从配置文件中都配置，在通过命令行参数做过滤，构建不同用途的vue.js
2. rollup构建规则
   - entry 入口js文件
   - dest 构建js文件
   - format构建规范
     - cjs: CommonJs
     - es: ES Module
     - umd: UMD

##### Runtime Only VS Runtime + Compiler

- Runtime Only

  - 借助webpack中vue-loader工具将.vue编译成js

- Runtime+Compiler

  - 我们如果没有对代码做预编译，但又使用了 Vue 的 template 属性并传入一个字符串，则需要在客户端编译模板，如下所示：

    ```js
    // 需要编译器的版本
    new Vue({
      template: '<div>{{ hi }}</div>'
    })
    
    // 这种情况不需要
    new Vue({
      render (h) {
        return h('div', this.hi)
      }
    })
    ```

    

- 更推荐使用Runtime-Only的vue.js

#### 总结

- vue.js的打包过程
- 用的Runtime-only较多，但这门课重点分析Runtime+Compiler

##### 从入口开始

路劲 config.js->plaftforms/web/entry-runtime-with-compiler.js->plaftforms/web/runtime/index.js->core/index->core/instance/index

会发现VUE是一个构造函数

![image-20210402125156375](F:\github\js_note\Frame\Vue\code\准备工作\image-20210402125156375.png)

```js
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
```

并且使用了es5进行了方法的混入MiXin

```js
initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)
```

GlobalAPI定义VUE的全局api