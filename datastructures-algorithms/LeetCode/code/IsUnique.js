/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
  let mark = 0;
  for (let i = 0; i < astr.length; i++) {
    let distance = astr[i].charCodeAt() - 97;
    if ((mark & (1 << distance)) !== 0) {
      return false;
    }
    mark = mark | (1 << distance);
  }
  return true;
};

isUnique("leetcode");