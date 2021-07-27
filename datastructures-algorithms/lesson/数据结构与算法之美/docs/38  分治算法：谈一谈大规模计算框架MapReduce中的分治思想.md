# 38 | 分治算法：谈一谈大规模计算框架MapReduce中的分治思想

![img](https://static001.geekbang.org/resource/image/24/1d/243f53ee8d8eebff5941d74340c2081d.jpg)

### 如何理解分治算法？

为什么说 MapRedue 的本质就是分治算法呢？我们先来看，什么是分治算法？

分治算法(divide and conquer)的核心思想是分而治之，也就是将原问题划分成 n 个规模较小，并且结构与原问题相似的子问题，递归地解决这些子问题，然后再合并其结果，就得到原问题的解。

##### 分治算法是一种处理问题的思想，递归是一种编程技巧。

分治算法的递归实现中，每次递归都会涉及三个操作

- 分解：将原问题分解成一系列子问题
- 解决：递归地求解各个子问题，若子问题足够小，则可以直接求解。
- 合并：将子问题的结果合并成原问题

##### 分治算法能解决的问题，一般满足以下条件：

- 原问题与分解成的小问题具有相同的模式
- 分解的子问题可以独立求解，子问题没有相关性（对比一下动态规划）
- 具有分解终止条件，即，当问题足够小，可以直接求解
- 可以将子问题合并成原问题，而这个合并操作的复杂度不能太高，否则就起不到减小算法总体复杂度的效果了。

### 分治算法应用举例分析

数组中的有序度和逆序度如何编码计算。

假设我们有 n 个数据，我们期望数据从小到大排列，那完全有序的数据的有序度就是 n(n-1)/2，逆序度等于 0；相反，倒序排列的数据的有序度就是 0，逆序度是 n(n-1)/2。除了这两种极端情况外，我们通过计算有序对或者逆序对的个数，来表示数据的有序度或逆序度。

![img](https://static001.geekbang.org/resource/image/f4/20/f41fd0a83bc5c5b059f7d02658179120.jpg)

两种思路：

- 暴力遍历

  - 即把每一个元素暴力遍历一遍。
  - 时间复杂度：O(n^2)

- 分治法

  - 思路

    - 我们可以将数组切成A1,A2
    - 分别计算A1、A2的逆序度
    - 最后再加上A1, A2排序后合并的A3的逆序度K3
    - 则结果K1+K2+k3

  - 问题：

    - 如何计算？

      借助归并排序。

      ![img](https://static001.geekbang.org/resource/image/e8/32/e835cab502bec3ebebab92381c667532.jpg)

  - 代码：

    ```java
    
    private int num = 0; // 全局变量或者成员变量
    
    public int count(int[] a, int n) {
      num = 0;
      mergeSortCounting(a, 0, n-1);
      return num;
    }
    
    private void mergeSortCounting(int[] a, int p, int r) {
      if (p >= r) return;
      int q = (p+r)/2;
      mergeSortCounting(a, p, q);
      mergeSortCounting(a, q+1, r);
      merge(a, p, q, r);
    }
    
    private void merge(int[] a, int p, int q, int r) {
      int i = p, j = q+1, k = 0;
      int[] tmp = new int[r-p+1];
      while (i<=q && j<=r) {
        if (a[i] <= a[j]) {
          tmp[k++] = a[i++];
        } else {
          num += (q-i+1); // 统计p-q之间，比a[j]大的元素个数
          tmp[k++] = a[j++];
        }
      }
      while (i <= q) { // 处理剩下的
        tmp[k++] = a[i++];
      }
      while (j <= r) { // 处理剩下的
        tmp[k++] = a[j++];
      }
      for (i = 0; i <= r-p; ++i) { // 从tmp拷贝回a
        a[p+i] = tmp[i];
      }
    }
    ```

#### 内容小结

分治算法用四个字概括就是“分而治之”，将原问题划分成 n 个规模较小而结构与原问题相似的子问题，递归地解决这些子问题，然后再合并其结果，就得到原问题的解。这个思想非常简单、好理解。

#### 创新并非离我们很远，创新的源泉来自对事物本质的认识。无数优秀架构设计的思想来源都是基础的数据结构和算法，这本身就是算法的一个魅力所在。