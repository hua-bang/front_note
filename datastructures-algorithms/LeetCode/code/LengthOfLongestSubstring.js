function lengthOfLongestSubstringBySet(s) {
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
}

// console.log(lengthOfLongestSubstringBySet("cbdabc"));

function lengthOfLongestSubstringByHash(s) {
  let map = new Map();
  let max = 0;

  for (let i = 0, j = 0; j < s.length; j++) {
    
    // 遇到重复元素，将i直接移动到重复元素的下一个位置
    // 注意 这里有一种情况 如果 存在 [c,b,d,a,b,c] 这个顺序
    // 很显然 我们遇到b 就会到第一个b的位置，当我们遇到c则不应该回到c的位置，这样子的结果是有错误的,我们要判断，需不需要移动位置
    if (map.has(s[j])) {
      i = Math.max(i, map.has(s[j]) + 1);
    }

    map.set(s[j], j);

    let length = j - i + 1;
    max = max < length ? length : max;
  }
  
  return max;
}

// console.log(lengthOfLongestSubstringByHash("cbdabc"));


function lengthOfLongestSubstringByDP(s) {
  
  if (s.length === 0) {
    return 0;
  }

  const dp = [];
  const map = new Map();
  
  let max = dp[0] = 1;
  map.set(s[0], 0);
  
  for (let j = 1, i = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]), i);
      dp[j] = j - i;
    } else {
      dp[j] = dp[j - 1] + 1;
    }
    map.set(s[j], j);
    max = max < dp[j] ? dp[j] : max;
  }
  
  return max;
}

console.log(lengthOfLongestSubstringByDP("abcabcbb"));