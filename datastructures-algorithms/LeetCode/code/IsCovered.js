var isCovered = function(ranges, left, right) {
  const diff = new Array(52).fill(0); // 差分数组
  console.log(ranges);
    for (const [l, r] of ranges) {
        diff[l]++;
        diff[r + 1]--;
  }
  console.log(diff);
    // 前缀和
    let curr = 0;
    for (let i = 1; i < 51; i++) {
        curr += diff[i];
        if (left <= i && i <= right && curr <= 0) {
            return false;
        }
    }
    return true;
};

let arr = [[1,2],[3,4],[5,6]]
let left = 2
let right = 5
console.log(isCovered(arr, left, right));

var isCovered = function (ranges, left, right) {
  for (let i = left; i <= right; i++) {
    let flag;
    for (const arr of ranges) {
      if ((arr[0] <= i) && (arr[1] >= i)) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      return false;
    }
  }
  return true;
}


function isCovered(ranges, left, right) {
  ranges.sort((a, b) => a[0] - b[0]);
  for (const arr of ranges) {
    if (arr[0] <= left && arr[1] >= left) {
      left = arr[1] + 1;
    }
  }
  return left > right;
}

var isCovered = function(ranges, left, right) {
  let arr = new Array(51).fill(0);
  // 差分数组 对应变化量
  for(const [i, j] of ranges) {
    arr[i]++;
    arr[j + 1]--;
  }

  let count = 0;
  for(let i = 0; i <= right; i++) {
    count = count + arr[i];
    if (count === 0 && (left <= i) && (i <= right)) {
      return false;
    }
  }
  return true;
};