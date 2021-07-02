// https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/50fxu1/

// 之前是用递归的方式去做，导致空间复杂度很高
// 而这次使用了动态规划存放，时间复杂度和空间复杂度下降很多 O(n) O(n) 优化空间复杂度也许可以下降到O(1)

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const dp = [0, 1];
    if(n < 1) {
        return dp[n];
    }
    for(let i = 2; i <= n ; i++) {
        dp[i % 2] = (dp[(i-1) % 2] + dp[(i-2) % 2 ]) % 1000000007;
    }  
    return dp[n % 2];
};

console.log(fib(81));