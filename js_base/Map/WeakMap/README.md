# WeakMap
#### WeakMap不影响垃圾回收

#### WeakMap是es6新增的弱映射。这里的weak描述的是Js垃圾回收机制对待弱映射中键的方法。

#### WeakMap中的键只能是Object后继承Object的类型，不是的话会抛出异常

#### WeakMap的不可迭代键

#### WeakMap的用法
+ ##### 私有成员的实现
    + 即用wm保存每个对象的this值 this指向对象本身，也是一个对象，利用wm的get和set可以实现 

#### 基本api
+ ##### has
+ ##### get
+ ##### set

#### WeakMap和Map引用值情况
    1.如Map引用的值，没有别的变量在引用这个值，这时候也不会垃圾回收。
    2.如果是WeakMap的话，没有别的变量引用这个值，则会发生回收。


