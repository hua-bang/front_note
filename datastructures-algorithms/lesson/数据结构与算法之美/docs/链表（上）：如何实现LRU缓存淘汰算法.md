# 06 | 链表（上）：如何实现LRU缓存淘汰算法?

### 链表（Linked list）

应用：

- LRU缓存淘汰算法
  - 解释：缓存时一种提高数据读取性能的技术，在硬件设计、软件开发中都有着非常广泛的应用，比如常见的 CPU 缓存、数据库缓存、浏览器缓存等等。
  - 策略：
    - FIFO(First in First out)
    - LFU(Least Frequently)
    - LRU(Least Recently Used)

#### 与数组的不同

**底层存储结构**

- **连续的内存空间**

- **零散的内存空间**

  ![img](d5d5bee4be28326ba3c28373808a62cd.jpg)

#### 链表种类

- 单链表

  - 结点
  - 后继指针
  - 头结点
  - 尾结点

  ![img](https://static001.geekbang.org/resource/image/b9/eb/b93e7ade9bb927baad1348d9a806ddeb.jpg)

  ![img](https://static001.geekbang.org/resource/image/45/17/452e943788bdeea462d364389bd08a17.jpg)

- 双向链表

  - 多了一个prev指针
  - 插入删除更为方便容易

  ![img](https://static001.geekbang.org/resource/image/cb/0b/cbc8ab20276e2f9312030c313a9ef70b.jpg)

- 循环链表

  - 特殊的单链表，尾结点的next指向头结点

  ![img](../../../../86cb7dc331ea958b0a108b911f38d155.jpg)

- 双向循环链表

  ![img](https://static001.geekbang.org/resource/image/d1/91/d1665043b283ecdf79b157cfc9e5ed91.jpg)

- 注意区分

  - 空间换时间
  - 时间换空间

#### 数组和链表性能方面

![img](https://static001.geekbang.org/resource/image/4f/68/4f63e92598ec2551069a0eef69db7168.jpg)

在实际项目中，要懂得权衡。

#### 设计思路

单链表，越靠近链表尾部的结点越早访问，当一个数据被访问的时候，我们从头遍历链表。

1. 如果此数据之前已经被缓存在链表中了，我们遍历得到这个数据对应的结点，并将其从原来的位置删除，然后再插入到链表的头部。
2. 如果此数据没有在缓存链表中，又可以分为两种情况：
   1. 如果此数据之前已经被缓存在链表中了，我们遍历得到这个数据对应的结点，并将其从原来的位置删除，然后再插入到链表的头部。
   2. 如果此数据没有在缓存链表中，又可以分为两种情况：
      - 未满，直接插入链表头部
      - 满，则链表尾结点删除，将新的数据结点插入链表的头部。

时间复杂度为O(n)

也可用哈希表

