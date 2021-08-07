function productExceptSelf(nums) {
  const l = new Array(nums.length), r = new Array(nums.length);
  l[0] = 1, r[r.length - 1] = 1;
  for (let i = 1; i < l.length; i++) {
    l[i] = l[i - 1] * nums[i - 1];
  }
  for (let i = r.length - 2; i >= 0; i--) {
    r[i] = r[i + 1] * nums[i + 1];
  }

  let res = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    res[i] = r[i] * l[i];
  }
  return res;
}

function productExceptSelf(nums) {
  let res = new Array(nums.length);
  res[0] = 1;
  for (let i = 1; i < res.length; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }

  let R = 1;
  for (let i = res.length - 1; i >= 0; i--) {
    res[i] = res[i] * R;
    R *= nums[i];
  }
  return res;
}

console.log(productExceptSelf([1, 2, 3, 4]));