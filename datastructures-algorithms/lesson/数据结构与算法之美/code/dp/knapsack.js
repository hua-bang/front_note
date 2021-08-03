function knapsack(weight, n, w) {
  let status = new Array(n).fill(new Array(w + 1));
  status[0][0] = true;
  if (weight[0] <= w) {
    status[0][weight[0]] = true;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= w; j++) {
      if (status[i - 1][j] === true) {
        status[i][j] = true;
      }
    }
    for (let j = 0; j < w - weight[i]; ++j) {
      if (status[i - 1][j] === true) {
        status[i][j + weight[i]] = true;
      }
    }
  }
  for (let i = w; i >= 0; i--) {
    if (status[n - 1][i] === true) {
      return i;
    }
  }

  return 0;

}

function knapsack2(weight, n, w) {
  let status = new Array(w+1);
  status[0] = true;
  if (weight[0] <= w) {
    status[weight[0]] = true;
  }
  for (let i = 1; i < n; i++) {
    for (let j = w - weight[i]; j >= 0; j++) {
      if (state[j] === true) {
        state[j + weight[i]] = true;
      }
    }
  }
  for (let i = w; i >= 0; --i) {
    if (states[i] == true) return i;
  }
  return 0;
}