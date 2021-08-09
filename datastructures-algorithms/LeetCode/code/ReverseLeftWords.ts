// https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/

function reverseLeftWords(s: string, n: number): string {
  let length = s.length;
  let arr: string[] = new Array(length);
  for (let i = 0; i < length; i++) {
    arr[(i - n + length) % length] = s[i];
  }
  return arr.join("");
};

console.log(reverseLeftWords("lrloseumgh", 6));