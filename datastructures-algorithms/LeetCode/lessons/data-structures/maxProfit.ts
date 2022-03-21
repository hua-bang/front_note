function maxProfit(prices: number[]): number {
  let profit = 0;
  let prev = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    const diff = prices[i + 1] - prices[i];
    const current = prev + diff;
    prev = current > 0 ? current : 0;
    if (current >= profit) {
      profit = current;
    }
  }
  return profit;
};