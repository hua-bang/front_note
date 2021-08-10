function numberOfArithmeticSlices1(nums: number[]): number {
  if (nums.length < 3) {
    return 0;
  }
  if (nums.length === 3) {
    if ((nums[2] - nums[1]) === (nums[1] - nums[0])) {
      return 1;
    }
  }
  let sum = 0, diff = 0, count = 0;
  for (let i = 1; i < nums.length; i++) {
    if ((nums[i] - nums[i - 1]) !== diff) {
      if (count >= 2) {
        let arr = nums.slice(i - 1 - count, i);
        sum += getSubArrLength(arr);
      }
      count = 1;
      diff = nums[i] - nums[i - 1];
    } else {
      count++;
    }
  }

  let arr = nums.slice(nums.length - 1 - count, nums.length);
  sum += getSubArrLength(arr);
  
  return sum;
};

function getSubArrLength(arr: number[]): number {
  let n:number = arr.length;
  let sum:number = 0;
  for (let i = 1; i <= n - 3 + 1; i++) {
    sum += i;
  }
  return sum;
}

console.log(numberOfArithmeticSlices([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));

function numberOfArithmeticSlices2(nums: number[]): number {
  const n = nums.length;
  if (n === 1) {
    return 0;
  }
  let d = nums[0] - nums[1], t = 0;
  let ans = 0;
  for (let i = 2; i < n; ++i) {
    if (nums[i - 1] - nums[i] === d) {
      ++t;
    } else {
      d = nums[i - 1] - nums[i];
      t = 0;
    }
    ans += t;
  }
  return ans;
}

function numberOfArithmeticSlices(nums: number[]): number {
  const n = nums.length;
  let ans = 0, dp = new Array(n), diff = nums[1] - nums[0];
  dp[0] = 0;
  dp[1] = 0;
  for (let i = 2; i < n; i++) {
    if (nums[i] - nums[i - 1] === diff) {
      dp[i] = dp[i - 1] + 1;
    } else {
      dp[i] = 0;
      diff = nums[i] - nums[i - 1];
    }
    ans += dp[i];
  }
  return ans;
}