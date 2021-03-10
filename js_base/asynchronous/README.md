# 契约与异步函数 Promise
+ ### 异步编程
    + 同步与异步
        + 同步行为对应内存中顺序执行的处理器指令
        + 一部行为类似于系统中断，即当前进程外部的实体可以触发代码执行。
    + 以往的异步编程
        + 回调解决
            + 传入函数
        + 异步返回值
            callback
        + 失败处理
            error
        + 嵌套回调
            回调地狱
+ 期约(promise)
    + promises/A+规范
    + 期约基础
        + es6新增Promise，通过new操作符，传入执行器(executor)作为参数
        + status
            + pending
            + fulfilled
            + rejected
            + 状态不可逆 外部不可读写
        + 解决值 拒绝理由
            + value
            + reason
        + change status
            + executor (执行器)
            + 一般用resolve 切换成兑现 reject切成拒绝
            + 状态不可逆
            + Promise.resolve()
                + 实例化一个已经解决的契约
                + 期约额值传给Promise.resolve的第一个参数，将任何值转化成一个promise
                + 幂等方法，如果传入的参数本身就是一个promise，相当于空包装
            + Promise.reject()
                + 实例化一个拒绝的promise并抛出一个异步错误。
                + 没有幂等漏极，传入一个promise，直接作为返回拒绝promise的理由
            + 同步/异步执行的二元性
                + 同步操做中并不能捕获到异步代码抛出的错误
    + promise实例方法
        + 连接外部同步代码与内部异步代码之间的桥梁 这些方法可以访问返回的数据 成功或失败的解构，或者期约结束前执行的代码。
        + 实现Thenable接口
        + Promise.prototype.then()
            + onResolved、onRejected函数处理程序，分别对应resolved rejected
            + 返回的是一个新的promise实例
                + 若有值，且是Promise对象 直接返回该Promise
                + 若有值且不是Promise对象，则用Promise.resolve(value)返回。
                + 若无值，则返回的是Promise.resolve(undefined)
        + Promise.prototype.catch()
            + 用于处理给promise拒绝处理程序，只接收一个参数,onRejected() 相当于Promise.prototype.then(null,onRejected)
        + Promise.prototype.finally()
            + 用于给promise添加onFinally处理程序，解决或拒绝状态都会执行。
            + 返回的是一个新的promise实例
            + 变现为父亲promise得传递
            + 如果返回得是一个待定得期约，或抛出错误，会返回相应得promise（待定或拒绝）
        + 非重入期约方法
        + 邻近处理程序得执行顺序
        + 传递解决值和拒绝理由
        + 拒绝期约于拒绝错误处理
            + 不能用try(){}catch
            + 可以用Promise的catch
    + 期约连锁与期约合成
        + 期约连锁：一个期约一个期约拼接而成
        + 期约合成：多个期约组合成一个期约。
        + 期约图
        + Promise.all(并行)
            + 参数传一个可迭代对象 返回一个新promise
            + 如果参数中都是promise 则都是promise
            + 如果不是promise 会使用Promise.resolve转化成promise对象
            + 一个失败 整体失败 会触发catch
            + 全部成功 触发then
            + then res 返回的是个promise成功时的返回值集合
            + catch 返回第一个失败
        + Promise.race(并行)
            + 返回一个promise，是一组集合中最先解决或拒绝的promise的镜像。
            + 接收一个迭代的对象，返回一个promise。
        + 串行promise合成
    + 期约扩展
        + 期约取消
        + 期约进度通知
+ 异步函数 async/await
    + 让同步方式写的代码能够异步执行
    + async
        + async关键字用于声明异步函数。这个关键字可以用在函数声明，函数表达式，箭头函数方法上。
        + async中使用return的话（无return返回undefined）,这时候会被Promise.resolve包装一个期约对象。
        + 异步函数始终返回promise对象
        + 函数中报错也可以用catch，不过，拒绝promise错误不会被捕获
    + await
        + await 可以暂停异步函数代码的执行，等待promise解决
        + await 会暂停执行异步函数后面的代码，让出js运行的执行线程。类似yield 然后将这值传给表达式
        + 对拒绝的期约使用await则会释放(unwrap)错误值。
        + await的限制
            + 必须在await中使用
    + 停止和恢复执行
        + 异步函数如果不用await 则和普通函数没有太大区别
    + 异步函数策略
        + 实现sleep
        + 利用平行执行 见equal.js
        + 串行执行promise
        + 栈追踪和内存管理
