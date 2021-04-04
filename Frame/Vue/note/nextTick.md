### NextTick

Vue对nextTick这个API的描述：在下次DOM更新循环结束之后执行延迟回调。在修改数据之后立刻使用这个方法，获取更新后的DOM。

- Vue异步执行DOM更新。

  只要观察到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作上非常重要

#### Vue思想是数据驱动，不要直接操作dom

- 当设置vm.xxx = xxx  组件不会立即重新渲染，而是当刷新队列，组件会在事件循环队列清空的下一个tick更新
- 使用异步函数的另外一个作用当然是要确保同步代码执行完毕Dom更新性能优化（例如同步操作对响应式数据使用for循环更新一千次，那么这里只有一次DOM更新而不是一千次）。



#### 源码分析：

**作用**：`Vue.nextTick`用于延迟执行一段代码，它接受2个参数（回调函数和执行回调函数的上下文环境），如果没有提供回调函数，那么将返回`promise`对象。

##### 图示：

![image-20210404120726066](F:\github\js_note\Frame\Vue\note\image-20210404120726066.png)

**参数**：

- callbacks

  - 用于存储所有需要执行的回调哈数

- pending

  - 用于标志是否正在执行回调函数

- timeFunc

  - 用来触发执行回调函数

- nextTickHandler函数

  - 用来执行callbacks中所有的回调函数

    ```js
    function nextTickHandler () {
        pending = false
        const copies = callbacks.slice(0)
        callbacks.length = 0
        for (let i = 0; i < copies.length; i++) 	{
          copies[i]()
        }
    }
    ```

- ##### timerFunc

  - 先判断是否原生支持promise，如果支持，则利用promise来触发执行回调函数；
  - MutaionObserver
  - setTimeout

- ##### queueNextTick

  - 最后是`queueNextTick`函数。因为`nextTick`是一个即时函数，所以`queueNextTick`函数是返回的函数，接受用户传入的参数，用来往callbacks里存入回调函数。

