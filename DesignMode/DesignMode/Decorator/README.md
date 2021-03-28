### 装饰器模式Decorator

装饰器模式（Decorator Pattern）允许向一个现有的对象添加新的功能，同时又不改变其结构。这种类型的设计模式属于结构型模式，它是作为现有的类的一个包装。

- 向一个对象添加新功能，不改变结果
- 结构型模式
- 例子：手机壳

##### 类图：

![image-20210328010540648](F:\github\js_note\DesignMode\DesignMode\Decorator\image-20210328010540648.png)

代码：

```js
class Circle {
    draw() {
        console.log("draw");
    }
}

class Decorator {
    constructor(circle) {
        this.circle = circle;
    }

    draw() {
        this.circle.draw();
        this.setTedBorder(this.circle);
    }

    setTedBorder(circle) {
        console.log("设置红色边框")
    }
}

let circle = new Circle();
circle.draw();
let decorator = new Decorator();
decorator.draw();

export {
    Decorator
};
```

- ##### 场景:

  - es7装饰器

#### Es7装饰器

- 配置环境

  - ```bash
    npm install babel-plugin-transform-decorators-legacy --save-dev
    ```

- 装饰类

  - 例子

    - 无参数条件，只需要传入target对象就行

      ```js
      @testDemo
      class Demo {
          
      }
      
      function testDemo(target) {
      	target.show = () => {
              console.log(target);
          }
      }
      ```

    - 有参数条件，需要先传递参数，返回一个传入target对象的方法

      ```js
      @testDemo2("name", "hug");
      class Demo{
          
      }
      
      function testDemo2(key, name) {
          return function(target) {
              target[key] = name;
          }
      }
      ```

  - 原理：

    ```js
    @decorator
    class A {};
    
    class A {};
    A = decorator(A) || A;
    ```

    

- 装饰方法

  - 声明

    ```js
    function fn(targat, name, descriptor)
    ```

  - 举例

    - readonly

      ```js
      /**
       * 
       * @param {*} target 类的原型对象
       * @param {*} name 修饰的属性名
       * @param {*} descriptor 该属性的描述对象 value, enumerable, configurable, writable
       */
      function readonly(target, name, descriptor) {
          descriptor.writable = false;
          return descriptor;
      }
      
      class Person {
          constructor(name) {
              this.name = name;
          }
      
          @readonly
          getName() {
              return this.name;
          }
      }
      
      let p = new Person("hug");
      console.log(p.getName());
      Person.getName = () => {
          return "name";
      }
      console.log(p.getName());   
      ```

    core_decorators

    ### 设计原则验证:

    - 将现有对象和装饰器分离，两者独立存在
    - 符合开放封闭原则

    



