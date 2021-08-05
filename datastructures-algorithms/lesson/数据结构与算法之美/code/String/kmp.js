function kmp(str1, str2) {
  let next = getNexts(str2);
  let j = 0;  // 游标
  for (let i = 0; i < str1.length; i++) {
    while (j > 0 && str1[i] !== str2[j]) {
      j = next[j - 1] + 1;
    }
    if (str1[i] === str2[j]) {
      ++j;
    }
    if (j === str2.length) {
      return i - str2.length + 1;
    }
  }
  return -1;
}

function getNexts(str) {
  let next = new Array(str.length);
  next[0] = -1;
  let k = -1;
  for (let i = 1; i < str.length; i++) {
    while (k !== -1 && str[k + 1] !== str[i]) {
      k = next[k];
    }
    if (str[k + 1] === str[i]) {
      ++k;
    }
    next[i] = k;
  }
  return next;
}

console.log(kmp("abcaabcab", "cab"));