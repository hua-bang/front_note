# JavaScript深入之执行上下文栈

## 顺序执行？

### 参考来源

[JavaScript深入之执行上下文栈]: https://github.com/mqyqingfeng/Blog/issues/4

如果要问到 JavaScript 代码执行顺序的话，想必写过 JavaScript 的开发者都会有个直观的印象，那就是顺序执行，毕竟：

```js
var foo = function () {

    console.log('foo1');

}

foo();  // foo1

var foo = function () {

    console.log('foo2');

}

foo(); // foo2
```

然而去看这段代码：

```js
function foo() {

    console.log('foo1');

}

foo();  // foo2

function foo() {

    console.log('foo2');

}

foo(); // foo2
```

打印的结果却是两个 `foo2`。

这是因为js中的函数声明提升和变量提升。

第一个例子是**变量提升**，第二个例子是**函数提升**。

## 可执行代码

有三种

- 全局代码
- 函数代码
- eval代码

每执行到一个函数，都会产生执行上下文。

### 执行上下文栈

JS中创建了执行上下文栈(Execution content stack, ECS)来管理执行上下文；

下方我们进行模拟。

```js
ECStack = [];
```

开始执行的时候，遇到的就是全局作用域，程序结束前，ECStack的底部也只有globalContext

```js
ECStack = [
    globalContext
]
```

```js
function fun3() {
    console.log('fun3')
}

function fun2() {
    fun3();
}

function fun1() {
    fun2();
}

fun1();
```

当执行一个函数的时候，就会创建一个执行上下文。并压入执行上下文栈，当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出。

```js
// 伪代码

// fun1()
ECStack.push(<fun1> functionContext);

// fun1中竟然调用了fun2，还要创建fun2的执行上下文
ECStack.push(<fun2> functionContext);

// 擦，fun2还调用了fun3！
ECStack.push(<fun3> functionContext);

// fun3执行完毕
ECStack.pop();

// fun2执行完毕
ECStack.pop();

// fun1执行完毕
ECStack.pop();

// javascript接着执行下面的代码，但是ECStack底层永远有个globalContext
```

### 解答思考题

好啦，现在我们已经了解了执行上下文栈是如何处理执行上下文的，所以让我们看看上篇文章[《JavaScript深入之词法作用域和动态作用域》](https://github.com/mqyqingfeng/Blog/issues/3)最后的问题：

```js
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();
```

两段代码执行的结果一样，但是两段代码究竟有哪些不同呢？

答案就是执行上下文栈的变化不一样。

让我们模拟第一段代码：

```js
ECStack.push(<checkscope> functionContext);
ECStack.push(<f> functionContext);
ECStack.pop();
ECStack.pop();
```

让我们模拟第二段代码：

```js
ECStack.push(<checkscope> functionContext);
ECStack.pop();
ECStack.push(<f> functionContext);
ECStack.pop();
```