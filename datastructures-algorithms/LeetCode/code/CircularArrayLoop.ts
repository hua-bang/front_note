let circularArrayLoop = (nums: number[]): boolean => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      continue;
    }

    let slow: number = i, fast: number = next(nums, i);
    while ((nums[slow] * nums[fast] > 0) && (nums[slow] * nums[next(nums, fast)] > 0)) {
      if (slow === fast) {
        if (slow !== next(nums, slow)) {
          return true;
        } else {
          break;
        }
      }
      slow = next(nums, slow);
      fast = next(nums, next(nums, fast));
    }
    let add: number = i;
    while (nums[add] * nums[next(nums, add)] > 0) {
      const temp: number = add;
      add = next(nums, add);
      nums[temp] = 0;
    }
  }

  return false;
}


function next(nums: number[], curr: number): number {
  const n = nums.length;
  return (((curr + nums[curr]) % n + n) % n);
}

console.log(circularArrayLoop([-1, -1, -1]));