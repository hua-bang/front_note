function singleNumbers(nums: number[]): number[] {
  let res = nums.reduce((prev, curr) => prev ^ curr, 0);
  let div = 1;

  while ((res & div) === 0) {
    div = div << 1;
  }

  let a = 0;
  let b = 0;

  nums.forEach(num => {
    if (num & div) {
      a ^= num
    } else {
      b ^= num
    }
  });
  return [a, b];
};
const nums = [4, 1, 4, 6];
console.log(singleNumbers(nums));