// https://www.kancloud.cn/alex_wsc/dataalg/1853989

// 1. 求出每个n时候的最长序列
// 2. 自底向上
//   2.1 dp[i] = 1;
//   2.2 i<j  if(dp[i] < dp[j] && dp[i] < dp[j] + 1)  --> dp[i] = dp[j] + 1
//   2.3 max
// 3. res

// 时间复杂度o(n2)
// 空间复杂度o(n)

function getLTS(arr) {
    let dp = [], max = 1;

    // 默认均为1
    for (let i = 0; i < arr.length; i++) {
        dp[i] = 1;
    }

    // 构造数组
    for (let i = 0; i < arr.length; i++) {
        // 遍历每个元素 num[j]和num[i]比较， 若num[i] > num[j] 则上升
        if (nums[i] > nums[j] && dp[i] < dp[j] + 1) {
            dp[i] = dp[j] + 1;
        }
    }

    max = max < dp[i] ? dp[i] : max;

    return max;
}