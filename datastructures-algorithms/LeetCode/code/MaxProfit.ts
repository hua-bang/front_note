function maxProfit(prices: number[]): number {
  let min = prices[0];
  let maxPro = 0;
  for (let i = 1; i < prices.length; i++) {
    maxPro = Math.max(prices[i] - min, maxPro);
    if (prices[i] < min) {
      min = prices[i];
    }
  }
  return maxPro;
};

function maxProfit(prices: number[]): number {
  let noHold = 0;
  let hold = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    noHold = Math.max(noHold, hold + prices[i]);
    hold = Math.max(hold, -prices[i]);
  }
  return noHold;
};