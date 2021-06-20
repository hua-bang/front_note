## 前端模块化

#### 理解模块模式

1. 模块标识符
2. 模块依赖
3. 模块加载
4. 入口
5. 异步依赖
6. 动态依赖
7. 静态分析
8. 循环依赖

#### 凑合的模块系统

- 为了按照模块模式提供必要封装，es6前会使用函数作用域和立即执行函数表达式。

  - 实际上就是为模块创建了命名空间

    ```js
    (function() {
        console.log(1);
    })();
    ```

  - 暴露公共api

    ```js
    let Foo = (function() {
        return {
            bar: "bar",
            baz: () => {
                console.log("baz");
            }
        }
    })();
    ```

  - 参数传递

    ```js
    let Foo3 = ((bar) => {
        return {
            bar,
            baz() {
                return "baz";
            }
        }
    })(globalBar);
    ```

  - 实现扩展

    ```js
    let Foo4 = ((FooMoudle, fName, fn = () => {}) => {
        FooMoudle[fName] = fn;
        return FooMoudle;
    })(Foo, "test", () => {
        console.log("i am just test");
    })
    ```

- 实际开发中不建议

#### 使用ES6之前的模块加载器

#### CommonJS

- ##### 认识

  - 同步加载

  - 只能在服务器环境运行，游览器不支持。

  - node.js不完全采用CommonJS的规范

  - 方法

    - 导入: require

      ```js
      require("./xxx.js")
      ```

    - 导出: module.exports

      ```js
      module.exports = {
          
      }
      ```

    - 多次导入只会加载一次，同时是单例，也就是说导入的都是同一个对象

      ```js
      const a = require("./module/a");
      const b = require("./module/a");
      // 表明加载的都是一样的
      console.log(a === b);
      ```

    - 动态加载

      ```js
      if(condition) {
          require(".../");
      }
      ```

  - 全局属性requrie和module.exports

  - 无法游览器使用，可以使用第三方，或者，将模块文件打包好，转成js，将模块代码封装在函数闭包中，最终提供一个文件。

#### 异步模块定义（AMD）

- 异步加载
- AMD以游览器为执行环境，需要考虑网络延迟。
- 策略：模块声明依赖，按需获取依赖，并在加载后立即执行他们的模块。
- 核心：函数包装模块定义。（防止全局变量），允许加载器库合适加载模块。

#### **通用模板定义（UMD）**

- 统一commonJs和AMD，通用模块定义(UMD)
- 为了实现两个环境下共存
- 不应该期望手写这个包装函数，应该有构建函数自动生成

##### 正是由于commonJS和AMD之间的冲突，Es6诞生新的模块规范



### 使用ES6模块

- 模块标签与定义

  - 需要在script中加上type="module"的标识，才会解析为模块执行

    ```html
    <script type="module"></script>
    ```

  - 模块脚本解析后，会立即下载文件，但会延迟执行（文档解析后）

  - 会比传统的脚本晚执行

  - 无论引入几次，只会加载一次。

- 模块加载

  - 游览器环境下可以用
  - 有些游览器还没有适配，所以可以用第三方的库。
  - 与AMD风格相似，模块文件按需加载。

- 模块行为

  - 借用了CommonJS和AMD优秀特性
    - 模块代码后加载后执行 
    - 模块只能加载一次
    - 模块是单例
    - 模块可定义公共接口，其他模块可以基于这个公共接口观察和交互
    - 模块可以请求其他模块
    - 支持循环依赖
    - ES6默认严格模式
    - ES6模块不共享全局
    - this不为winow 为undefined
    - var声明不会添加到全局
    - es6异步加载执行

- 模块导出

  - 关键字:export

  - 命名导出

    ```js
    export const num = 123; //命名导出
    ```

  - 默认导出

    - 默认导出的时候奴能出现变量声明

    ```js
    export default A;   //默认导出
    export {
    	A as default
    }
    ```

- 模块导入

  - 关键字:import

  - 导入的只读问题

    - 导入对于模块是只读的,但读入赋予变量，变量可以修改值
    - 但若是使用*则不可以修改

    - ```js
      import A, {num} from "./module/a.js";
      import obj, {c,num as cNum} from "./module/b.js";
      import * as D from "./module/d.js";
      console.log(D.bar);//D可读取
      // D.bar = 123;    //但不能修改
      
      let a = new A();
      console.log(num);
      console.log(c, cNum);
      
      console.log(obj);
      
      ```

- 转移导出

  ```js
  export * from "./c.js";
  export default {
      name: "hug",
      age: 20
  };
  ```


#### Dynamic imports

Export and import are called "static". The syntax is very simple and strict;

1. The module path must be a primitive string, can't be a function call
2. We can't import conditionally or at run-time

#### The import() expression

This expression loads the module and returns a promise that resolves into a moudle object that contains all its exports. It can be called from any plcae in the code

```js
let modulePath = prompt("Which module to load?");

import(modulePath)
  .then(obj => <module object>)
  .catch(err => <loading error, e.g. if no such module>)
```

