# 了解 process.nextTick()

Node中一个部分process.nextTick();

每当事件循环进行一次完整的行程时，我们都将其称为一个滴答

当将一个函数传给 `process.nextTick()` 时，则指示引擎在当前操作结束（在下一个事件循环滴答开始之前）时调用此函数：

```js
process.nextTick(() => {
    // do somethings
})
```

事件循环正在忙于处理当前的函数代码。

当该操作结束时，JS 引擎会运行在该操作期间传给 `nextTick` 调用的所有函数。

这是可以告诉 JS 引擎异步地（在当前函数之后）处理函数的方式，但是尽快执行而不是将其排入队列。

```js
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve("3").then(res => {
  console.log(res);
})

process.nextTick(() => {
  console.log("4");
})

console.log("5");

// 1 5 4 3 2
```

## SetImmediate

当要异步地（但要尽可能快）执行某些代码时，其中一个选择是使用 Node.js 提供的 `setImmediate()` 函数：

作为 setImmediate() 参数传入的任何函数都是在事件循环的下一个迭代中执行的回调。

延迟 0 毫秒的 setTimeout() 回调与 setImmediate() 非常相似。 执行顺序取决于各种因素，但是它们都会在事件循环的下一个迭代中运行。