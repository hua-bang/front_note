function lengthOfLongestSubstring(s: string): number {
  let set = new Set();
  let max = 0;
  for (let i = 0, j = 0; j < s.length; j++) {
    while (set.has(s[j])) {
      set.delete(s[i]);
      i++;
    }
    set.add(s[j]);
    let length = set.size;
    max = max < length ? length : max;
  }
  return max;
};

function lengthOfLongestSubstringByMap(s: string): number {
  let map = new Map();
  let max = 0;
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(i, map.get(s[j]) + 1);
    }
    map.set(s[j], j);
    let length = j - i + 1;
    max = max < length ? length : max;
  }
  return max;
};


function lengthOfLongestSubstringByDP(s: string): number {
  if (s.length === 0) {
    return 0;
  }

  const dp = [];
  let map = new Map();

  let max = dp[0] = 1;
  map.set(s[0], 0);
  for (let i = 0, j = 1; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(i, map.get(s[j]) + 1);
      dp[j] = j - i + 1;
    } else {
      dp[j] = dp[j - 1] + 1;
    }
    map.set(s[j], j);
    max = max < dp[j] ? dp[j] : max;
  }
  return max;
};

console.log(lengthOfLongestSubstringByDP("abcabcbb"));