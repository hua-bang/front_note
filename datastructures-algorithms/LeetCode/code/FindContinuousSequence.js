/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  let res = [];
  for(let i = 1; i < (target << 1); i++) {
    let sum = i;
    for(let j = i + 1 ; j <= (target << 1); j++ ) {
      sum += j;
      if(sum > target) {
        sum = 0;
        break;
      }else if(sum === target) {
        sum = 0;
        let arr = [];
        for(let index = i; index <= j; index++) {
          arr.push(index);
        }
        res.push(arr);
        break;
      }
    }
  }
  return res;
};


var findContinuousSequence = function(target) {
  let res = [];
  for(let i = 1; i < (target << 1); i++) {
    let delta = 1 + 4 * 1 * (i * i - i + 2 * target);

    // 无解
    if (delta < 0) {
      continue;
    }

    let delta_sqrt = Math.floor(Math.sqrt(delta + 0.5));
    if (delta_sqrt * delta_sqrt == delta && (delta_sqrt - 1) % 2 == 0) {
      let y = (-1 + delta_sqrt) / 2;
      if (i < y) {
        let arr = [];
        for(let index = i; index <= y; index++) {
          arr.push(index);
        }
        res.push(arr);
      }
    }
  }
  return res;
};


var findContinuousSequence = function (target) {
  let res = [];
  if (target === 0 || target === 1) {
    return [target];
  }

  let left = 1, right = 2;
  while (left < right) {
    let sum = (left + right) * (right - left + 1) / 2;
    if (sum < target) {
      right++;
    } else if (sum > target) {
      left++;
    } else {
      let arr = [];
      for (let index = left; index <= right; index++) {
        arr.push(index);
      }
      res.push(arr);
      left++;
    }
  }

  return res;
};

console.log(findContinuousSequence(9));

var findContinuousSequence = function (target) {
  let res = [];
  if (target === 0 || target === 1) {
    return [target];
  }

  let left = 1, right = 2;
  let sum = left + right;

  while (left <= (target << 2)) {
    if (sum < target) {
      right++;
      sum += right;
    } else if (sum > target) {
      sum -= left;
      left++;
    } else {
      if (left === right) {
        break;
      }
      let arr = [];
      for (let index = left; index <= right; index++) {
        arr.push(index);
      }
      res.push(arr);
      sum -= left;
      left++;
    }
  }

  return res;
};