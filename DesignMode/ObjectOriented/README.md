### **面向对象**

- #### 概念

  - 类

    - 类，即模板，可以实例化对象

      ```js
      class Person {
          constructor(name) {
              this.name = name;
          }
          getName() {
              return this.name;
          }
      }
      ```

      

  - 对象

    - 创建实例

      ```js
      let zhang = new Person("zhang")
      ```

- #### 三要素

  - 封装  数据权限和保密

    - 特性
      - public
      - protected
      - private
      - js中无上面的特性
    - 减少耦合，不该外露和的不外露
    - 数据，接口的权限管理
    - _为private

  - 继承 子类继承父类

    - 有些类是父类 公共的

    - 继承可以抽离公共方法，提高复用，减少冗余

    - 代码：

      ```js
      import Person from "./People";
      
      class Student extends Person {
          constructor(name, age) {
              super(name, age);
          }
      
          study() {
              console.log(`${this.name} - study`)
          }
      }
      
      export default Student;
      ```

  - 多态 

    - 同一接口不同实现
    - js用的少
    - 因为弱面向对象

- #### js应用举例

  - jQuery

    ```js
    class jQuery {
        constructor(selector) {
            let slice = Array.prototype.slice;
            let dom = [...document.querySelectorAll(selector)];
            let len = dom ? dom.length : 0;
            for(let i = 0; i < len; i++) {
                this[i] = dom[i];
            }
            this.length = len;
            this.selector = selector || "";
        }
    
        append(node) {
    
        }
    
        addClass(name) {
    
        }
    
        html(data) 
        {}
    }
    
    window.$ = (selector) => {
        // 工厂函数
        return new jQuery(selector)
    }
    
    export default $;
    ```

- #### 面向对象的意义

  - 数据结构化

- #### 为什么使用面向对象

  - 程序执行：顺序、判断、循环 ---结构化
  - 面向对象 ----- 数据结构化
  - 编程应该 简单 & 抽象

  ### UML（Unified Modeling Language ）

  - 类图：本课主要类图

  - 关系：主讲泛化和关联

    - 泛化：表示继承
    - 关联： 表示引用

  - 举例：

    ![image-20210323220605194](F:\github\js_note\DesignMode\ObjectOriented\image-20210323220605194.png)

    ```js
    class People {
        constructor(name, house) {
            this.name = name;
            this.house = house;
        }
    }
    
    class A extends People {
        constructor(name, house) {
            super(name, house);
        }
    }
    
    class B extends People {
        constructor(name, house) {
            super(name, house);
        }
    }
    
    class House {
        constructor(city) {
            this.city = city;
        }
    }
    ```

    

