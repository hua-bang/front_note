### WebWorker

### 前言：

- js单线程（即一段任务时间只能做一个任务，任务完成后才能执行其他任务）
- webworker运行，游览器会在后台启动一个独立的worker线程来专门负责这段代码的运行
- 此时，页面再这段js代码运行期间依然可以相应用户的其他操作

### 简介:

- HTML5标准的一部分。允许一段js程序运行在主线程的另一个线程之外
- 两类工作线程
  - 专用线程Dedicated Worker 一个页面所用
  - 共享线程：Shared Worker 可以被多个页面所共享

#### 快速上手：

- ##### 创建worker

  - 调用Worker的构造函数并传入一个要在workder线程内运行的脚本uri，即可建立一个新的worker。

    ```js
    var myWorker = new Worker("my_task.js");
    
    // my_task.js中的代码 
    var i = 0;
    function timedCount(){
        i = i+1;
        postMessage(i);
        setTimeout(timedCount, 1000);
    }
    timedCount();
    ```

  - 另外，也可以通过URL.createObjectURl()对象创建URL对象，实现创建内嵌的worker

    ```js
    var myTask = `
        var i = 0;
        function timedCount(){
            i = i+1;
            postMessage(i);
            setTimeout(timedCount, 1000);
        }
        timedCount();
    `;
    
    var blob = new Blob([myTask]);
    var myWorker = new Worker(window.URL.createObjectURL(blob));
    ```

  - 注意：

    - 传入 Worker 构造函数的参数 URI 必须遵循同源策略
    - 异步加载创建，线程不会阻塞

### Worker线程数据通讯方式

- 通过onmessage和postmessage方法实现的
- 数据间传递的方式时拷贝，而不是共享。
- Worker 与其主页面之间只能单纯的传递数据，不能传递复杂的引用类型：如通过构造函数创建的对象等
- 数据一段的修改不会影响另外一端的数据

### 通过可转让对象传递数据

- 就是通过可转让对象将数据在主页面和Worker之间进行来回穿梭。
- 从上下文转移，不会进行如何拷贝操作
- 原来的上下文不复存在

### importScripts()

- Worker 线程能够访问一个全局函数imprtScripts()来引入脚本，该函数接受0个或者多个URI作为参数。
- 脚本的下载顺序不固定，但执行时会按照传入 importScripts() 中的文件名顺序进行。这个过程是同步完成的；直到所有脚本都下载并运行完毕， importScripts() 才会返回。

#### Worker上下文

1. 不予主页面同个上下文，this不指向window，而是指向WorkerGlobalScope。所以无法访问window,以及window相关的DOM API，但是可以与setTimeout、setInterval等协作。

2. 常用属性方法

   1. self

      本身对象的引用

   2. location

      location 属性返回当线程被创建出来的时候与之关联的 WorkerLocation 对象，它表示用于初始化这个工作线程的脚步资源的绝对 URL，即使页面被多次重定向后，这个 URL 资源位置也不会改变。

   3. close

      关闭当前线程

   4. importScripts

      我们可以通过importScripts()方法通过url在worker中加载库函数

   5. XmlHttpReuqest

      有了它，才能发出Ajax请求

   6. setTimeout/setInterval以及addEventListener/postMessage

#### 终止terminate()

在主页面上调用terminate()方法，可以立即杀死 worker 线程，不会留下任何机会让它完成自己的操作或清理工作。另外，Worker也可以调用自己的 close() 方法来关闭自己

```js
// 主页面调用
worker.terminate();

// Worker线程调用
self.close();
```

### 处理错误

当 worker 出现运行时错误时，它的 onerror 事件处理函数会被调用。它会收到一个实现了 ErrorEvent 接口名为 error的事件。该事件不会冒泡，并且可以被取消；为了防止触发默认动作，worker 可以调用错误事件的 preventDefault() 方法。

```js
myWorker.onerror
```

#### 强大的计算能力

可以加载一个JS进行大量的复杂计算而不挂起主进程，并通过postMessage，onmessage进行通信，解决了大量计算对UI渲染的阻塞问题。

#### 典型应用场景

1. 数字运算
2. 图像处理
3. 大数据处理