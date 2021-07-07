// 思路： 动态规划
// 设有n个字符 同时开辟一个数组dp 存放翻译的次数
// dp[0] = 1 dp[1] 根据前两个字符去比较 大于25 则只有一种翻译 小于则有两种
// i>1 dp[i] 
//  1. 当num[i - 1]nump[i] < 25 可以拆分成前i-2个，和最后两位的翻译 也可为 拆分前i-1,最后一位的翻译
//  2. 当num[i - 1]nump[i] > 25 只可为 拆分前i-1,最后一位的翻译


/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  let arr = [...num.toString()];
  let length = arr.length;

  const dp = [];
  dp[0] = 1;
  dp[1] = (("1" == arr[0]) || (("2" == arr[0]) && (arr[1]) <= 5)) ? 2 : 1;

  for (let i = 2; i < length; i++) {
    
    if(("1" == arr[i-1]) || (("2" == arr[i-1]) && (arr[i]) <= 5)) {
      dp[i] = dp[i-1] + dp[i-2];
    }else {
      dp[i] = dp[i-1];
    }
  }

  return dp[length-1];
};

console.log(translateNum(12258));