# 18 | 散列表（上）：Word文档中的单词拼写检查功能是如何实现的？

![img](https://static001.geekbang.org/resource/image/b1/02/b1b5da27544870c9376004006387db02.jpg)

Word 的这个单词拼写检查功能，虽然很小但却非常实用。你有没有想过，这个功能是如何实现的呢？

### 散列思想

散列表的英文叫“Hash Table”，我们平时也叫它“哈希表”或者“Hash 表”。

**散列表用的是数组支持按照下标随机访问数据的特性，所以散列表其实就是数组的一种扩展，由数组演化而来。可以说，如果没有数组，就没有散列表。**

关键：映射。

我们将键或关键字作为标识，同时，我们会有一个映射方法叫做散列函数，计算得到的值，就是散列值。

![img](https://static001.geekbang.org/resource/image/92/73/92c89a57e21f49d2f14f4424343a2773.jpg)

散列表用的就是数组支持按照下标随机访问的时候，时间复杂度是 O(1) 的特性。我们通过散列函数把元素的键值映射为下标，然后将数据存储在数组中对应下标的位置。当我们按照键值查询元素时，我们用同样的散列函数，将键值转化数组下标，从对应的数组下标的位置取数据。

### 散列函数

映射关系很重要，即哈希函数

我们可以把它定义成 hash(key)，其中 key 表示元素的键值，hash(key) 的值表示经过散列函数计算得到的散列值。

```c++
int hash(String key) { 
    // 获取后两位字符 
    string lastTwoChars = key.substr(length-2, length); // 将后两位字符转换为整数 
    int hashValue = convert lastTwoChas to int-type; 
    return hashValue;
}
```

#### 该如何构造散列函数呢？我总结了三点散列函数设计的基本要求：

1. 散列函数得到非负整数
2. key1==key2 hash(key1) == hash(key2)
3. key1!=key2 hash(key1)!=hash(key2) (散列冲突)

### 散列冲突

1. 开放寻址法

   线性探测

   二次探测：线性探测每次探测的步长为1，即在数组中一个一个探测，而二次探测的步长变为原来的平方。

   双重探测：使用一组散列函数，直到找到空闲位置为止。

   用“装载因子”来表示空位多少，公式：散列表装载因子=填入表中的个数/散列表的长度。
   装载因子越大，说明空闲位置越少，冲突越多，散列表的性能会下降。

   ![img](https://static001.geekbang.org/resource/image/5c/d5/5c31a3127cbc00f0c63409bbe1fbd0d5.jpg)

2. 链表法

   ![img](https://static001.geekbang.org/resource/image/a4/7f/a4b77d593e4cb76acb2b0689294ec17f.jpg)

### 内容小结

**核心**：**散列函数设计**和**散列冲突设计**