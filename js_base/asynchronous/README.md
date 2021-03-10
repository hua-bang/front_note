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
