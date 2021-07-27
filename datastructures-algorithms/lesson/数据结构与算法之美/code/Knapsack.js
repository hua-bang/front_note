let max = 0;

// 有n个商品
// items表示物品的重量
// w表示背包最大中重量
// cw表示当前的重量

function knapsack(i, cw, items, n, w) {
  if (cw === w || i === n) {
    if (cw > max) max = cw;
    return;
  }

  knapsack(i + 1, cw, items, n, w);
  if (cw + items[i] <= w) {
    knapsack(i + 1, cw + items[i], items, n, w);
  }
}

let items = [5,1,6,8,1,0];
knapsack(0, 0, items, items.length, 10);
console.log(max);