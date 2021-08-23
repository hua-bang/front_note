/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.data = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  // 1. if data is empty, you just push num to arr
  if (this.data.length === 0) {
    this.data.push(num);
    return;
  }

  // 2. you should find the index
  let left = 0, right = this.data.length - 1;
  while (left < right) {
    let mid = (left + right) >> 1;

    if (this.data[mid] === num) {
      this.data.splice(mid, 0, num);
      return
    }else if (this.data[mid] < num) {
      left = mid + 1
    }else if (this.data[mid] > num) {
      right = mid - 1;
    }
  }

  if (this.data[right] >= num) {
    this.data.splice(right, 0, num);
  } else {
    this.data.splice(right + 1, 0, num);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let n = this.data.length;
  if (!n) {
    return 0;
  }
  let res;
  if (n % 2 === 0) {
    res = (this.data[n >> 1] + this.data[(n >> 1) - 1]) / 2;
  } else {
    res = this.data[n >> 1];
  }
  return res;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */