// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn8fsh/

var maxProfit = function(prices) {

    // 初始条件
    let noHold = 0;
    let hold = -prices[0];

    for(let i = 1; i < prices.length; i++) {
        noHold = Math.max(noHold, hold + prices[i]);
        hold = Math.max(hold, -prices[i]);
    }
    return noHold;
};

var maxProfit = function(prices) {

    // 初始条件
    let min = prices[0];
    let maxPro = 0

    for(let i = 1; i < prices.length; i++) {
        if(min > prices[i]) {
            min = prices[i];
            continue;
        }
        maxPro = Math.max(prices[i] - min, maxPro);
    }
    return maxPro;
};
var maxProfit = function (prices) {
	if (prices.length === 0) {
		return 0;
	}
	const dp = [];
	dp[0] = 0;
	let min = prices[0];

	for (let i = 1; i < prices.length; i++) {
		min = min > prices[i] ? prices[i] : min;
		let profit = prices[i] - min;
		dp[i] = dp[i - 1] > profit ? dp[i - 1] : profit;
	}

	return dp[prices.length - 1];
};

console.log(maxProfit([7,1,5,3,6,4]));
