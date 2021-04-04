// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2zsx1/

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let fit = 0;
    for(let i = 0; i < prices.length - 1; i++) {
        let profit = prices[i+1] - prices[i]
        if(profit > 0) {
            fit += profit
        }
    }
    return fit;
};