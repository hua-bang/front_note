## Curry柯里化

#### 柯里化函数高阶技术，不仅用于js，其他语言也有。

#### 柯里化是一种函数的转化。f(a,b,c) --> f(a)(b)(c)

```js
function curry(f) {
    return function(a) {
		return function(b) {
            return f.call(this, a, b);
        }
    }
}

let addCurry = curry(add);
addCurry(1)(2);
```

#### 柯里化更高级的实现，例如 lodash 库的 [_.curry](https://lodash.com/docs#curry)，会返回一个包装器，该包装器允许函数被正常调用或者以偏函数（partial）的方式调用

```js
function sum(a, b) {
  return a + b;
}

let curriedSum = _.curry(sum); // 使用来自 lodash 库的 _.curry

alert( curriedSum(1, 2) ); // 3，仍可正常调用
alert( curriedSum(1)(2) ); // 3，以偏函数的方式调用
```

#### Curry?柯里化？目的是什么

可以生成更简短的偏函数（偏应用函数）

例如日志函数

```js
function log(date, importance, message) {
    console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

function curry(fn) {
    return function curried(...args) {
        if(args.length >= fn.length) {
            return fn.call(this, ...args);
        }else {
            return function(...args2) {
                return curried.call(this, ...args.concat(args2));
            }
        }
    }
}

let logCurry = curry(log)(new Date());
logCurry("ERROR")("测试");
```

#### 总结：

柯里化是一种转化，当参数量不足，返回偏函数，足够，则直接放回函数执行结果.