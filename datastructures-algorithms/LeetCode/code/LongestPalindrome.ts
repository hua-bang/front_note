// https://leetcode-cn.com/problems/longest-palindromic-substring/
() => {
  function longestPalindrome(s: string): string {
    let length: number = s.length;
    if (length < 2) {
      return s[0];
    }

    let maxLength: number = 1;
    let index: number = 0;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 1; j < length; j++) {
        if (checkPalindrome(s, i, j)) {
          if ((j - i + 1) > maxLength) {
            maxLength = j - i + 1;
            index = i;
          }
        }
      }
    }

    return s.substr(index, maxLength);
  };

  function checkPalindrome(s: string, left: number, right: number): boolean {
    while (left <= right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
}

() => {
  function longestPalindrome(s: string): string {
    let length: number = s.length;
    if (length < 2) {
      return s[0];
    }

    let start: number = 0, end: number = 0;
    for (let i = 0; i < length; i++) {
      let len1: number = expandAroundCenter(s, i, i);
      let len2: number = expandAroundCenter(s, i, i + 1);
      let len: number = Math.max(len1, len2);
      if (len > end - start) {
        start = i - ((len - 1) >> 1);
        end = i + ((len) >> 1);
      }
    }
    return s.substring(start, end + 1);
  };


  function expandAroundCenter(s: string, left: number, right: number): number {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // notice 这是跳出的时候 的left 和 right值 right - 1 - (left + 1) + 1
    return right - left - 1;
  }
}

function longestPalindrome(s: string): string {
  let len = s.length;
  if (len < 2) {
    return s[0];
  }

  let maxLen = 1, begin = 0;
  const dp = [];
  for (let i = 0; i < len; i++) {
    dp[i] = [];
    for (let j = 0; j < len; j++) {
      // base case 当i==j时，dp[i][j]为true，1个字符是回文初始化为true，其他元素都初始化为false
      if (i === j) {
        dp[i][j] = true;
      } else {
        dp[i][j] = false;
      }
    }
  }

  for (let L = 2; L <= len; L++) {
    for (let i = 0; i < len; i++) {
      let j = L + i - 1;
      if (j >= len) {
        break;
      }
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }
  return s.substring(begin, begin + maxLen);
}

longestPalindrome("babad")