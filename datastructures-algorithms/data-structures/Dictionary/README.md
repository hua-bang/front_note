+ # Dictionary
  + 根据键名查找元素
  + key最好都是字符串（所以采用了toString的方法）
  + api
    + hasKey(key)
    + set(key, value)
    + remove(key)
    + get(key)
    + clear()
    + size()
    + isEmpty()
    + keys()
    + values()
    + keyValues()
    + forEach(callbackFn)
  + HashTable
    + api
      + hasKey(key)
      + hashCode(key)
      + loseloseHashCode(key)
      + set(key, value)
      + remove(key)
      + get(key)
      + clear()
      + size()
      + isEmpty()
      + keys()
      + values()
      + keyValues()
      + forEach(callbackFn)
    + 哈希冲突
      + 分离链接
        + 使用链表
      + 线性探测
  + 创建更好的散列函数