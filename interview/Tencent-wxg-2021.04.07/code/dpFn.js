// 给定一个长度为n的整数数组 a，实现一个算法，计算出从 a 中选择出多个不相邻元素组成最大的和是多少。

// 样例

// ```javascript
// input:  [1, 4, 5, 3]
// output: 7

// input:  [12, 3, 6, 1, 2, 4]
// output: 22
// ```

let arr1 = [1, 4, 5, 3]
let arr2 = [12, 3, 6, 1, 2, 4]


// 动态规划
function dp_func(arr) {
    let len = arr.length
    if (len == 1){
        return arr[0];
    }
    else if (len == 2) {
        return Math.max(arr[0], arr[1]);
    }
    let dp = []
    dp[0] = arr[0];
    dp[1] = Math.max(dp[0], arr[1]);
    for (let i=2; i < len; i++){
        dp[i] = Math.max(dp[i-1], dp[i-2] + arr[i]);
    }
    return dp[len-1];
}
console.log(dp_func(arr1))
