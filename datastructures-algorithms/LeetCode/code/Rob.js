// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnq4km/

let arr = [1,2,3,1];

var rob = function(nums) {
    let length = nums.length;
    return getOpt(nums, length - 1);

    function getOpt(nums, index) {
        if(index === 0) {
            return nums[0];
        }
        if(index === 1) {
            return Math.max(nums[0], nums[1]);
        }
        return Math.max(getOpt(nums, index-1), nums[index] + getOpt(nums, index-2));
    }
};

var rob = (nums) => {
    let len = nums.length;
    let dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for(let i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
    }
    return dp[nums.length - 1];
}

console.log(rob(arr));