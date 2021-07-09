/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.trim();
  let len = s.length;
  let i = len - 1, j = i;
  let res = [];

  while (i >= 0) {
    while (i >= 0 && s[i] !== " ") {
      i--;
    }
    res.push(s.substring(i + 1, j + 1));

    while (i>=0 && s[i] === " ") {
      i--;
    }
    j = i;
  }

  return res.join(" ");
};

console.log(reverseWords("the sky is blue"));