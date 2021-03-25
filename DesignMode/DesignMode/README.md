### 23种设计模式

#### 工厂模式

- 介绍

  - 将new进行封装
  - 遇到new，就考虑是否该使用工厂模式

- 例子：

  - 去购买汉堡，商店直接封装做汉堡的工作，做好直接给买者

- 传统UML图：

  传统uml图如图1

  ![image-20210325080442214](F:\github\js_note\DesignMode\DesignMode\image-20210325080442214.png)

  但由于js是弱类型语言，故会有所不同

  ![image-20210325080746295](F:\github\js_note\DesignMode\DesignMode\image-20210325080746295.png)

  传入相应的参数，实例化对象

#### 单例模式

- 介绍

  - 系统中唯一使用
  - 一个类只有一个实例（单例）

- 事例：

  - 登录框
  - 购物车

- UML图：

  ![image-20210325084623003](F:\github\js_note\DesignMode\DesignMode\image-20210325084623003.png)

- 实现

  - java实现
  - js实现