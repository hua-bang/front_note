function singleNumbers(nums) {
  // 最终得到的是两个只出现一次的数字的异或结果
  let ret = nums.reduce((prev, current) => {
    return prev ^ current;
  });
  console.log(ret);

  // 我们去找到第一个1出现的位置， 该位置和其中一个数字进行与操作 则一个为1 一个为0
  let div = 1;
  while (!(ret & div)) {
    div = div << 1;
  }

  let a = 0 , b = 0;
  for (const num of nums) {
    // 该位置和其中一个数字进行与操作 则一个为1 一个为0 从而保证 相同的在用一组 同时 两个唯一出现一次的数在不同组
    if (div & num) {
      a ^= num;
    } else {
      b ^= num;
    }
  }
  console.log(a,b)

  return [a, b];
}

console.log(singleNumbers([1, 2, 10, 4, 1, 4, 3, 3]));