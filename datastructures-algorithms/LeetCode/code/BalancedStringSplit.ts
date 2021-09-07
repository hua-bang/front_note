function balancedStringSplit(s: string): number {
  let count = 0;
  let right = 0;
  let LCount = 0, RCount = 0;
  while (right < s.length) {
    if (s[right] === "L") {
      LCount += 1;
    } else {
      RCount += 1;
    }
    if (LCount === RCount) {
      count++;
    }
    right++;
  }
  return count;
};

let res = balancedStringSplit("RLRRRLLRLL");
console.log(res);