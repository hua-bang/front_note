### Module

1. ### 概述

   ```javascript
   let { stat, exists ,readfile } = require('fs')
   
   let _fs = require('fs')
   let stat = _fs.stat
   let exists = _fs.exists
   let readfile = _fs.readfile
   ```

   实质是整体加载fs模块，运行时候加载

   ES6模块不是对象，而是通过export命令显式指定输出的代码，在import

   ```javascript
   import {stat,exist,readFile} from 'fs'
   ```

   

2. #### 严格模式

   以下的限制

   ​	变量必须声明后再使用
   ​	函数的参数不能有同名属性，否则报错
   ​	不能使用with语句
   ​	不能对只读属性赋值，否则报错
   ​	不能使用前缀 0 表示八进制数，否则报错
   ​	不能删除不可删除的属性，否则报错
   ​	不能删除变量delete prop，会报错，只能删除属性delete global[prop]
   ​	eval不会在它的外层作用域引入变量
   ​	eval和arguments不能被重新赋值
   ​	arguments不会自动反映函数参数的变化
   ​	不能使用arguments.callee
   ​	不能使用arguments.caller
   ​	禁止this指向全局对象
   ​	不能使用fn.caller和fn.arguments获取函数调用的堆栈
   ​	增加了保留字（比如protected、static和interface)

3. **export命令**

   两个主要命令：export 和 import

   一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。下面是一个 JS 文件，里面使用export命令输出变量。

   ```javascript
   export var firstName = "Michael"
   export var lastName =  "Jackson"
   export var year = 1958
   
   //相当于
   var firstName = 'Michael';
   var lastName = 'Jackson';
   var year = 1958;
   
   export { firstName, lastName, year };
   ```

   export除了输出变量，还可以输出函数或类

   ```javascript
   export function multiply(x,y){
       return x * y;
   }
   ```

   另外，export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。

4. **import命令**

   使用export命令定义模块的对外接口以后，其他js文件就可以通过import加载这个模块

   ```javascript
   import {firstName,lastName,year} from "./profile.js"
   ```

   import命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。

5. ##### **模块的整体加载**

   circle.js文件

   ```javascript
   export function area(r){
       return Math.PI * r * r
   }
   
   export function circumference(r){
       return 2 * Math.PI * r
   }
   ```

   加载模块，main.js

   ```javascript
   import {area,circumference} from "./circle"
   import * as circle from "./circle"
   ```

6. **export default命令**

   ```javascript
   export default function(){
       console.log('foo')
   }
   ```

7. **export和import的复合写法**