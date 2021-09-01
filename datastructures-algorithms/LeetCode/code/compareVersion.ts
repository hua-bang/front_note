// function compareVersion(version1: string, version2: string): number {
//   let version1Arr = version1.split(".");
//   let version2Arr = version2.split(".");
//   for (let i = 0; i < version1Arr.length || i < version2Arr.length; i++) {
//     let x = 0, y = 0;
//     if (i < version1Arr.length) {
//       x = parseInt(version1Arr[i]);
//     }
//     if (i < version2Arr.length) {
//       y = parseInt(version2Arr[i]);
//     }
//     if (x > y) {
//       return 1;
//     }
//     if (x < y) {
//       return -1;
//     }
//   }
//   return 0
// };

var compareVersion = function (version1: string, version2: string) {
  const n = version1.length, m = version2.length;
  let i = 0, j = 0;
  while (i < n || j < m) {
    let x = 0;
    for (; i < n && version1[i] !== '.'; ++i) {
      x = x * 10 + version1[i].charCodeAt(0) - '0'.charCodeAt(0);
    }
    ++i; // 跳过点号
    let y = 0;
    for (; j < m && version2.charAt(j) !== '.'; ++j) {
      y = y * 10 + version2[j].charCodeAt(0) - '0'.charCodeAt(0);
    }
    ++j; // 跳过点号
    if (x !== y) {
      return x > y ? 1 : -1;
    }
  }
  return 0;
};


