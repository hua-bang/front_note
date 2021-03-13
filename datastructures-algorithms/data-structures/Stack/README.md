+ 栈
    + 栈式一种遵从后进先出的有序集合。（Last in First Out)
    + api
      + push(Element)   进栈 
      + pop()   出栈 返回栈顶元素
      + peek()  返回栈顶元素 不修改
      + isEmpty()   判断栈是否为空
      + clear() 清空栈
      + size() 栈元素个数
    + 数组实现
      + 由于js数组比较成熟，所以实现堆栈相当简单。
      + 当时间复杂度有待商议。
    + 对象实现
      + 用count和items来实现
    + WeakMap
      + 保证数据不会被公开访问
    + 私有对象的实现
    + 实例
      + 实现进制转化