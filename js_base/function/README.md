# function 函数
+ 函数内部
    + callee使用
        + 可以读取到自己函数的指针
    + this使用
        + 非箭头函数
            + this 在网页上下文调用函数时，this指向windows 
            + this 谁引用了函数this就指向它
        + 箭头函数
            + this 引用的是定义箭头函数的上下文
    + caller的使用
        + 查看调用该函数的函数
    + new.target
        + 构造函数既可以普通调用 也可以new调用
        + 普通调用 undefined
        + new调用 将引用被调用的构造函数。
+ 函数属性与方法（函数也是对象）
    + 函数的长度为他的参数个数
    + prototype不可以枚举
    + apply call
        + 这两个方法都会以指定的this来调用函数，即会设置调用函数时函数体内this的值
        + apply两个参数，函数内this的值和一个参数数组。第二个参数剋也是array 也可以是arguments。
        + call多个参数，第一个是this的值。其余为参数
        + 强大的地方不是传参 而是控制函数调用上下文内this值。
    + bind
        + bind方法创建一个新的函数实例 其this会绑定到bind()的对象中
+ 函数表达式
    + 函数声明
    + 函数表达式
+ 递归
    + 递归函数通常的形式是一个函数通过名称调用自己。
+ 尾调用
    + es6优化，让js引擎在满足条件是可重用堆栈
    ```js
    function outerFunction() {
      innerFunction();
    }
    ```
   + 优点
    + 不会多次嵌套调用
    + 如果函数的漏极允许基于尾调用将其销毁，则引擎就那么做。
   + 尾调用优化条件
    + 严格模式
    + 外部函数的返回值是对尾调用函数调用
    + 尾调用函数返回不需要执行额外的逻辑
    + 尾调用函数不是引用外部函数作用域自由变量的闭包
+ 闭包
    + 闭包指的是那些引用了另一个函数作用域中变量的函数，通常在嵌套函数中实现。
    + 闭包会更多占用内存，因为始终对外部函数有变量的引用。
    + this 对象
        + 非箭头函数的话，
        + 看调用函数的对象，如函数不是对象调用 则this非严格绑定在window 严格下为undefined
    + 内存泄漏
        ```js
        //element 至少被引用一次 会保存在内存中 不会自动小会
        function assignHandler(el) {
            let element = document.querySelector(el);
            element.onclick = () => {
                console.log(element.id);
            }
        }
        
        // 改进
        function assignHandler(el) {
            let element = document.querySelector(el);
            let id = element.id;
            element.onclick = () => {
                console.log(id);
            }
            element = null;
        }
        ```
+ 立即执行函数
    + 立即调用的函数表达式
    + 可以模拟块级作用域（原理 函数有函数作用域）
+ 私有变量
    + 任何定义在函数或块的变量，都可以认为是私有的，外部无法访问期中变量。
    + 原理是闭包。
    + 静态私有变量
    + 模块模式
        + 单例对象 就是只有一个实现的对象 js通过对象字面量创建单例对象。
        + 模块模式是在单例对象上扩展，通过作用域链关系私有变量和特权方法
    + 模块增强模式
        + 在返回对象之前先对其进行强化。
        + 适合单例对象是某个特定类型的实例。
    
