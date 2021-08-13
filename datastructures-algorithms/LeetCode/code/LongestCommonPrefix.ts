function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }
  if (strs.length === 1) {
    return strs[0];
  }
  let str = "";
  let length = strs[0].length;
  for (let i = 0; i < length; i++) {
    let flag = true;
    let word = strs[0][i];
    for (let index = 1; index < strs.length; index++) {
      if (i >= strs[index].length || (word !== strs[index][i])) {
        flag = false;
        break;
      }
      if (word === strs[index][i]) {
        flag = true;
      }
    }
    if (flag) {
      str += strs[0][i];
    } else {
      break;
    }
  }
  return str;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));