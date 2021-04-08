// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn3cg3/

// 步骤：1.确定状态
//      2.转移方程
//      3.确定初始条件和边界条件
//      4.计算结果


var maxSubArray = function(nums) {
    let dp = [];
    dp[0] = nums[0] > 0 ? nums[0] : 0;
    let max = dp[0];
    for(let i = 1; i < nums.length; i++) {
        dp[i] = dp[i - 1] > 0 ? (dp[i - 1] + nums[i]) : nums[i];
        max = max < dp[i] ? dp[i] : max;
    }
    return max;
};

let nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));