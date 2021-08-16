function permute(nums: number[]): number[][] {
  let res:number[][] = [];

  reduc(nums, 0);

  return res;


  function reduc(arr: number[], index: number) {
    console.log(arr, index);
    if (index === arr.length - 1) {
      res.push(arr.slice(0));
    } else {
      for (let i = index; i < arr.length; i++) {
        swap(arr, i, index);
        reduc(arr, index + 1);
        swap(arr, i, index);
      }
    }
  }

  function swap(arr: number[], i: number, j: number): void {
    let temp: number = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
};

console.log(permute([1, 2, 3]));


function permuteSet(nums: number[]): number[][] {
  let res: number[][] = [];
  let set: Set<number> = new Set();

  reduc();

  return res;


  function reduc() {
    if (set.size === nums.length) {
      res.push([...set]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (set.has(nums[i])) {
        continue;
      }
      set.add(nums[i]);
      reduc();
      set.delete(nums[i]);
    }
  }
};