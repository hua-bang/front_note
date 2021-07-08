## javaScript-asynchronous-programming-and-callbacks

#### 编程语言中的异步性

异步意味着事情可以独立于主程序流而发生。

程序是异步的切回暂停执行指导需要关注，使得计算机可以同时执行其他操作。

#### JavaScript

JavaScript默认是同步的，单线程的。这意味着代码无法创建新的线程并且不能并行运行。

#### 回调

事件处理程序会接受一个函数，函数在该事件被触发时调用，即回调函数。

```js
document.getElementById('button').addEventListener('click', () => {
  //被点击
})
```

回调函数是一个简单的函数，会作为值传递给另一个函数，并在事件发生的时候执行。

回调无处不在。

#### 处理回调中的错误

如何处理回调的错误？ 一种非常常见的策略是使用 Node.js 所采用的方式：任何回调函数中的第一个参数为错误对象（即错误优先的回调）。error-first

```js
fn((err, data) => {
    if(err) {
        
    }else {
        
    }
})
```

## 回调的问题

回调适用于简单的场景！

但是，每个回调都可以添加嵌套的层级，并且当有很多回调时，代码就会很快变得非常复杂(回调地狱)

```js
window.addEventListener('load', () => {
  document.getElementById('button').addEventListener('click', () => {
    setTimeout(() => {
      items.forEach(item => {
        //你的代码在这里。
      })
    }, 2000)
  })
})
```

