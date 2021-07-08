# event-loop

## 介绍

**事件循环**是Node.js重要的方面之一。

Node异步与非阻塞I/O

Node.js JavaScript是单线程，每次只处理一件事。（不必考虑并发问题）。

### 阻塞事件循环

任何花费太长时间才能将控制权返回给事件循环的 JavaScript 代码，都会阻塞页面中任何 JavaScript 代码的执行，甚至阻塞 UI 线程，并且用户无法单击浏览、滚动页面等。

JavaScripyt几乎所有的I/O都是非阻塞的。网络请求、文件系统操作等。 被阻塞是个异常，这就是 JavaScript 如此之多基于回调（最近越来越多基于 promise 和 async/await）的原因。

### 调用堆栈

堆栈LIFO(后进先出)

事件循环不断地检查调用堆栈，以查看是否需要运行任何函数。

当执行时，它会将找到的所有函数调用添加到调用堆栈中，并按顺序执行每个函数。

### 一个简单的事件循环的阐释

```js
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  bar()
  baz()
}

foo()
```

![调用堆栈的第一个示例](http://nodejs.cn/static/270ebeb6dbfa7d613152b71257c72a9e/fcda8/call-stack-first-example.png)

每次迭代中的事件循环都会查看调用堆栈中是否有东西并执行它直到调用堆栈为空：

![执行顺序的第一个示例](http://nodejs.cn/static/ca404c319c6fc595497d5dc097d469ff/fc1a1/execution-order-first-example.png)

## 消息队列

当调用setTimeout(),游览器或Node启动定时器，到期后，将回调函数放入“消息队列”。

在消息队列中，用户触发的事件（如单击或键盘事件、或获取响应）也会在此排队，然后代码才有机会对其作出反应。 类似 `onLoad` 这样的 DOM 事件也如此。

事件循环会赋予调用堆栈优先级，首先处理堆栈的东西，一旦完毕，便处理消息队列的东西。

我们不必等待诸如 `setTimeout`、fetch、或其他的函数来完成它们自身的工作，因为它们是由浏览器提供的，并且位于它们自身的线程中。 例如，如果将 `setTimeout` 的超时设置为 2 秒，但不必等待 2 秒，等待发生在其他地方。

### ES6作业队列

Promise

ECMAScript 2015 引入了作业队列的概念，Promise 使用了该队列（也在 ES6/ES2015 中引入）。 这种方式会尽快地执行异步函数的结果，而不是放在调用堆栈的末尾。