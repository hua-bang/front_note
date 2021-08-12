/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1, p2 = n - 1;
  let index = nums1.length - 1;
  while (p1 >= 0 && p2 >= 0) {
    if (nums2[p2] > nums1[p1]) {
      nums1[index--] = nums2[p2];
      p2--;
    } else {
      nums1[index--] = nums1[p1];
      p1--;
    }
  }
  while (p2 >= 0) {
    nums1[index--] = nums2[p2--];
  }
};

let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);