// https://leetcode-cn.com/problems/gou-jian-cheng-ji-shu-zu-lcof/solution/mian-shi-ti-66-gou-jian-cheng-ji-shu-zu-biao-ge-fe/
// 思路： 使用两个数组来存放， 一个数组存放i之前的乘积和 left[i] i之前的数字的乘积之和 right[i] 表示之后的数字乘积之和

/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  if (a.length === 0) {
    return [];
  }
  let left = new Array(a.length); 
  let right = new Array(a.length);
  let res = [];

  left[0] = right[a.length - 1] = 1;

  for (let i = 1; i < a.length; i++) {
    left[i] = left[i - 1] * a[i - 1];
  }

  for (let i = a.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * a[i + 1];
  }

  for (let i = 0; i < a.length; i++) {
    res[i] = left[i] * right[i];
  }
  return res;
};

// constructArr([1, 2, 3, 4, 5]);

var constructArr = function (a) {
  if(a.length === 0) {
    return [];
  }
  let arr = [];
  arr[0] = 1;
  for (let i = 1; i < a.length; i++) {
    arr[i] = arr[i - 1] * a[i - 1];
  }
  let temp = 1;
  for (let i = a.length - 2; i >= 0; i--) {
    temp *= a[i + 1];
    arr[i] *= temp;
  }
  return arr;
}

console.log(constructArr([1, 2, 3, 4, 5]));