# WeakSet

#### WeakSet 值只能为Object和继承Object的类型
#### 弱值 不影响垃圾回收
#### 不可以迭代
#### WeakSet和Set引用值情况
    1.如Set引用的值，没有别的变量在引用这个值，这时候也不会垃圾回收。
    2.如果是WeakSet的话，没有别的变量引用这个值，则会发生回收。
