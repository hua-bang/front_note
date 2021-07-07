// LeetCode 第 04 题：给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m+n))。你可以假设 nums1 和 nums2 不会同时为空。
// 1. 实际上即可理解为两个数组合并排序后，中位数的值。
// 2. 难点，在于如何排序呢？ 可以暴力（效率慢） 这里讨论切分法
// 设m+n=L L为奇数时 int(L/2)+1小的数 L为偶数 (arr[k+1] + arr[k]) / 2

// 问题：如何找到k
// 设第一个数组前面有k1个数, 第二个数组有k2个数 (k1+k2===k)
//  1. a[k1-1] === b[k2-1] 则a[k1-1]和b[k2-2]都是第k小的值
//  2. a[k1-1] < b[k2-1]  第k小的数一定在nums1后半段或num2前半段中
//  3. a[k1-1] > b[k2-1]  第k小的数一定在nums1前半段或num2后半段中

function findMedianSortedArray(num1, num2) {
  
  let m = num1.length;
  let n = num2.length;

  let k = Math.floor((m + n) / 2);

  if ((k % 2) === 0) {
    return findKth(num1, 0, m - 1, num2, 0, n - 1, k);
  } else {
    return (findKth(num1, 0, m - 1, num2, 0, n - 1, k) + findKth(num1, 0, m - 1, num2, 0, n - 1, k + 1)) / 2;
  }


  function findKth(num1, l1, h1, num2, l2, h2, k) {
    let m = h1 - l1 + 1;
    let n = h2 - l2 + 1;
    
    if (m > n) {
      return findKth(num2, l2, h2, num1, l1, h1, k);
    }

    if (m === 0) {
      // right
      return nums[l2 + k - 1];
    }

    if (k === 1) {
      return Math.min(num1[l1], num2[l2]);
    }

    // 取得k1长度
    let na = Math.min(k / 2, m);
    // 取得k2长度
    let nb = k - na;

    let va = num1[l1 + na - 1];
    let vb = nums2[l2 + nb - 1];

    if (va === vb) {
      return va;
    } else if (va < vb) {
      // a[k1-1]<b[k2-2] 去掉较小的值
      return findKth(num1, l1 + na, h1, num2, l2, l2 + nb - 1, k - na);
    } else {
      // 去掉较小的值
      return findKth(num1, l1, l1 + na - 1, num2, l2 + nb, h2, k - nb);
    }
  }
}