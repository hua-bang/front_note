# Node.js 简介

Node.js开源 跨平台的js运行环境。

Node.js在游览器外运行V8Js引擎(Google chrome的内核)。

Node.js 应用程序运行于单个进程中，**无需为每个请求创建新的线程**。 Node.js 在其标准库中

提供了一组**异步的 I/O 原生功能**（用以防止 JavaScript 代码被阻塞），并且 Node.js 中的库

通常是使用非阻塞的范式编写的（从而使阻塞行为成为例外而不是规范）。

当Node.js执行I/O时（读取文件、访问数据库、网络请求等），Node.js会在响应完成后恢复操作（回调，异步），而不是阻塞线程。

这使 Node.js 可以在一台服务器上处理数千个并发连接，而无需引入管理线程并发的负担（这

可能是重大 bug 的来源）。

在 Node.js 中，可以毫无问题地使用新的 ECMAScript 标准，因为不必等待所有用户更新其浏览器，你可以通过更改 Node.js 版本来决定要使用的 ECMAScript 版本，并且还可以通过运行带有标志的 Node.js 来启用特定的实验中的特性。

# Node.js 与浏览器的区别

浏览器和 Node.js 均使用 JavaScript 作为其编程语言。

构建运行于浏览器中的应用程序与构建 Node.js 应用程序完全不同。

尽管都是 JavaScript，但一些关键的差异使体验相当不同。

从广泛使用 JavaScript 的前端开发者的角度来看，Node.js 应用程序具有巨大的优势：使用单一语言轻松编程所有一切（前端和后端）。

不同的还有生态系统。

在浏览器中，大多数时候做的是与 DOM 或其他 Web 平台 API（例如 Cookies）进行交互。 当然，那些在 Node.js 中是不存在的。 没有浏览器提供的 `document`、`window`、以及所有其他的对象。

而且在浏览器中，不存在 Node.js 通过其模块提供的所有不错的 API，例如文件系统访问功能。

Node可以选择环境，而游览器不行。

由于 JavaScript 发展的速度非常快，但是浏览器发展得慢一些，并且用户的升级速度也慢一些，因此有时在 web 上，不得不使用较旧的 JavaScript / ECMAScript 版本。

可以使用 Babel 将代码转换为与 ES5 兼容的代码，再交付给浏览器，但是在 Node.js 中，则不需要这样做。

Node.js: CommonJS

Broswer: ES模块。