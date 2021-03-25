#### 工厂模式

- 介绍

  - 将new进行封装
  - 遇到new，就考虑是否该使用工厂模式

- 例子：

  - 去购买汉堡，商店直接封装做汉堡的工作，做好直接给买者

- 传统UML图：

  传统uml图如图1

  ![image-20210325080442214](F:\github\js_note\DesignMode\DesignMode\Factory\image-20210325080442214.png)

  但由于js是弱类型语言，故会有所不同

  ![image-20210325080746295](F:\github\js_note\DesignMode\DesignMode\Factory\image-20210325080746295.png)

  传入相应的参数，实例化对象。

- 代码：

  ```js
  class Product {
      constructor(name) {
          this.name = name;
      }
  
      getName() {
          return this.name;
      }
  }
  
  class Creator {
      static create(name) {
          return new Product(name);
      }
  }
  ```

- 思想

  我们不暴露创建对象的具体逻辑，而是将将逻辑封装在一个函数中，那么这个函数就可以被视为一个工厂。

  ```js
  //工厂模式的思想
  window.$ = function(selector) {
      return new jQuery(selector);
  }
  ```

  