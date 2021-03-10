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
