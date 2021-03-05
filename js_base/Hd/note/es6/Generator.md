### Generator函数用法

1. **定义：**Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。本章详细介绍 Generator 函数的语法和 API，它的异步编程应用请看《Generator 函数的异步应用》一章。

2. 特性：

   1. Generator 函数有多种理解角度。语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。
   2. 执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。
   3. 形式上Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”

   ```javascript
   function* helloWorldGenerator(){
       yield 'hello'
       yield 'world'
       return 'ending'
   }
   
   var hw = helloWorldGenerator()
   ```

3. ES6没有规定，function关键字与函数名之间的星号

   ```javascript
   function * foo(x,y){...}
   function *foo(x,y){...}
   function* foo(x,y){...}
   function*foo(x,y){...}
   ```


#### yield表达式

​	由于Generaor函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所有提供可以暂停执行的函数，yield就是暂停标志。

​	遍历器对象的next方法如下：

1. 遇到yield，就暂停后面操作，并将紧跟yield 后面表达式的值，作为返回对象的value
2. 下一次调用next方法，再继续往下执行，直到遇到下一个yield
3. 如果没有遇到新的，则运行到函数结束，直到return语句为止，并将return语句后面表达式的值，作为返回的对象value
4. 如果函数没有return,则返回对象的value属性值为undefined

注意，yield后表达式，只有调用next方法，才能执行。

#### for..of循环

```javascript
function* foo(){
        yield 1
        yield 2
        yield 3
        yield 4
        yield 5
        return 6
    }
    for(let v of foo()){
        console.log(v)
    }
```

for..of不用next方法，循环即可

#### Generator.prototype.return

​	Generator 函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历 Generator 函数

```javascript
function* gen(){
	yield 1;
    yield 2;
    yield 3;
}

let g = gen()

g.next()
g.return('foo')
g.next()
```

上面代码中，遍历器对象g调用return方法后，返回值的value属性就是return方法的参数foo。并且，Generator 函数的遍历就终止了，返回值的done属性为true，以后再调用next方法，done属性总是返回true。

!!如果Generator有try...finally，且正在执行try语句块，return发放会导致立刻进入finally代码块

#### Thunk函数

```javascript
let thunk = function(){
    return x + 5
}

function f(thunk){
	return thunk() * 2;
}
```

