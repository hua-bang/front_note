# Why TypeScript

> Typed JavaScript at Any Scale.
> 添加了类型系统的 JavaScript，适用于任何规模的项目。

以上描述是官网[[1\]](https://ts.xcatliu.com/introduction/what-is-typescript.html#link-1)对于 TypeScript 的定义。

[TypeScript](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2F) 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。

TypeScript 提供最新的和不断发展的 JavaScript 特性，包括那些来自 2015 年的 ECMAScript 和未来的提案中的特性，比如异步功能和 Decorators，以帮助建立健壮的组件。下图显示了 TypeScript 与 ES5、ES2015 和 ES2016 之间的关系：

![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/abcaa2a4d7b5416f95091b78492f8d6a~tplv-k3u1fbpfcp-zoom-1.image)

#### different from JavaScript

|                   TypeScript                   |                JavaScript                |
| :--------------------------------------------: | :--------------------------------------: |
| JavaScript 的超集用于解决大型项目的代码复杂性  |      一种脚本语言，用于创建动态网页      |
|          可以在编译期间发现并纠正错误          | 作为一种解释型语言，只能在运行时发现错误 |
|           强类型，支持静态和动态类型           |         弱类型，没有静态类型选项         |
| 最终被编译成 JavaScript 代码，使浏览器可以理解 |          可以直接在浏览器中使用          |
|              支持模块、泛型和接口              |          不支持模块，泛型或接口          |

## TypeScript 的特性

- **类型系统**

- ##### TypeScript 是静态类型

- ##### TypeScript 是弱类型

  - 类型系统按照「是否允许隐式类型转换」来分类，可以分为强类型和弱类型。

- ##### 适用于任何规模

## Install

```bash
npm install -g typescript
```

compiler

```bash
tsc hello.ts
```