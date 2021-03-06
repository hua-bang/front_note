# 生成器 Generator
+ 生成器基础
    + 生成器的形式是一个函数，函数名称前面加一个星号(*)表示他是一个生成器。只要是函数定义的地方，就可以定义生成器。箭头函数不能来定义生成器函数。
        + ```js
          // 生成器函数声明
          function* generatorFn() {}
          
          // 生成器函数表达式
          let generatorFn = function* () {}
          
          // 作为对象字面量方法的生成器函数
          let foo = {
            * generatorFn() {}
          }
          
          // 作为类实例方法的生成器函数
          class Foo{
            * generatorFn() {}
          }
          
          // 作为类静态方法的生成器函数
          class Bar {
            static * generation() {}
          }
          ```
    + 调用生成器函数也产生了一个生成器对象。生成器对象一开始处于暂停执行**（suspended）**的状态，实现了Iterator接口，具有next方法，调用next方法让生成器开始或恢复执行。
    + next()方法返回值类型迭代器，有一个done和一个value，函数体为空的生成器函数中间不会停留，调用一次next()就会让生成器到done:true状态。
    + value属性是生成器函数的返回值，默认为undefined.
    + 生成器函数只有在初次调用next()方法后开始执行
    + 生成器的迭代器是自引用的。
        + ```js
          function * generator() {
              console.log("foo");
              return "foo";
          }
          const g = generator();
          console.log(g === g[Symbol.iterator]());
          ```
+ 通过yield中断执行
    + yield关键字可以让生成器停止或开始执行，也是生成器最有用的地方。生成器函数遇到yield关键字之前会正常执行，遇到这个关键字后，执行会停止，函数作用域的状态保留。只能通过调用next()方法恢复执行。
    + yield关键字关键有点像函数的中间返回语句，他生成的值会出现在next()方法返回的对象里。通过yield关键字退出的生成器函数会处于done:false状态；通过return关键字退出的生成器函数会处于done:true状态。
        + ```js
          function * generatorFn() {
            yield "foo";
            yield "bar";
            return "baz";
          }       
          ```
    + yield关键字只能在生成器函数内部使用。
    + yield实现输入和输出，可以作为中间参数使用。让上一次生成器函数暂停的yield关键字接收到传递给next()方法的值。由于next方法的参数表示上一个yield表达式的返回值，所以在第一次使用next方法时，传递参数是无效的。这里第一次调用next()的值不被使用，因为这一次调用是为了开始执行生成器函数
    + 必须对整个表达式求值了才能返回，遇到yield关键字时暂停执行并计算出产生的值，下一次调用next传入bar,作为交给同一个yield的值 这个值作为本次生成函数要返回的值
    + 多次yield可以简写
        + ```js
          yield * [1,2,3,4]
          ```
    + yield的值是关联迭代器返回done:true时候的value值。对于普通迭代器来说，这个值是undefined:
        + ```js
          // 普通迭代器
          yield * [1,2,3];    //undefined;
          
          // 生成器函数产生的迭代器来说，这个值就是生成器函数返回的值
          yield innerGenertaorFn();
          ```
    + yield实现递归
    + yield生成器做默认迭代器
+ 提前终止生成器
    + return throw 可以提前终止
    + return 强制进入了关闭状态（同时需要看到暂停状态是否在try{}finally中，若是的话，也会执行finally的代码块，若中有yield，则状态不会立刻变成done:true）。提供给return方法的值，就是终止迭代器对象的值，关闭之后，无法恢复了。done:true.
    + throw 抛出异常生成器函数内部不处理即关闭 抛出异常生成器函数处理了则跳过这一个值（但是是执行了next函数，会自动执行next并跳过这次返回的结果）
    + next,throw,return共同点
        + next()是将yield表达式替换成一个值。
            + ```js
              const g = function* (x, y) {
                let result = yield x + y;
                return result;
              };
              
              const gen = g(1, 2);
              gen.next(); // Object {value: 3, done: false}
              
              gen.next(1); // Object {value: 1, done: true}
              // 相当于将 let result = yield x + y
              // 替换成 let result = 1;
              ```
        + throw()是将yield表达式替换成一个throw语句。
            + ```js
              gen.throw(new Error('出错了')); // Uncaught Error: 出错了
              // 相当于将 let result = yield x + y
              // 替换成 let result = throw(new Error('出错了'));
              ```
        + return() 是将yield表达式返回一个return语句
            +   ```js
                gen.return(2); // Object {value: 2, done: true}
                // 相当于将 let result = yield x + y
                // 替换成 let result = return 2;
                ```
    + Generator函数不能做构造函数
