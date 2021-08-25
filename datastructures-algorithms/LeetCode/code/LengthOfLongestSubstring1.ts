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
    max = max > length ? max : length;
  }
  return max;
};

function lengthOfLongestSubstring(s: string): number {
  let map = new Map();
  let max = 0;
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(i, map.get(s[j]) + 1);
    }
    map.set(s[j], j);
    let length = j - i + 1;
    max = max > length ? max : length;
  }
  return max;
};




let res = lengthOfLongestSubstring("pwwkew");
console.log(res);