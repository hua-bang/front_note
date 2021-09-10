/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
  let index = 0;
  let length = chalk.length;
  while (k > 0) {
    if (chalk[index] > k) {
      return index;
    }
    k = k - chalk[index];
    index = (++index % length);
    // index = (index === length - 1) ? 0 : index+1;
  }
  return index;
};
let chalk = [3, 4, 1, 2], k = 25;
console.log(chalkReplacer(chalk, k));