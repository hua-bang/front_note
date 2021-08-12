function subsets1(nums: number[]) {
  const ans = [];
  const n = nums.length;
  for (let mask = 0; mask < (1 << n); ++mask) {
    const t = [];
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        t.unshift(nums[i]);
      }
    }
    ans.push(t);
  }
  return ans;
}

function subsets(nums: number[]) {
  const t:number[] = [];
  const ans: number[][] = [];
  const n = nums.length;
  const dfs = (cur) => {
    if (cur === n) {
      ans.push(t.slice());
      return;
    }
    t.push(nums[cur]);
    dfs(cur + 1);
    t.pop();
    dfs(cur + 1);
  }
  dfs(0);
  return ans;
}