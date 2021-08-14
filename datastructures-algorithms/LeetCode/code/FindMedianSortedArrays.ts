function findMedianSortedArrays1(nums1: number[], nums2: number[]): number {
  let nums = nums1.concat(nums2);
  nums.sort((a, b) => a - b);
  let length = nums.length;
  if (length % 2 === 1) {
    return nums[length >> 1];
  } else {
    console.log(nums[length>>1] , nums[length >> 1 - 1])
    return (nums[length >> 1] + nums[length >> 1 - 1]) / 2;
  }
};

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length === 0) {
    if (nums2.length === 0) {
      return 0;
    }
    if (nums2.length % 2 === 1) {
      return nums2[nums2.length >> 1];
    } else {
      console.log(nums2.length >> 1,)
      return (nums2[nums2.length >> 1] + nums2[(nums2.length >> 1) - 1] / 2);
    }
  }

  if (nums2.length === 0) {
    if (nums1.length % 2 === 1) {
      return nums1[nums1.length >> 1];
    } else {
      return (nums1[nums1.length >> 1] + nums1[(nums1.length >> 1) - 1] / 2);
    }
  }

  let p1 = 0, p2 = 0, index = 0, n1, n2;
  let length = nums1.length + nums2.length;
  let mid = length >> 1;
  while (index < mid - 1) {
    if (p1 >= nums1.length) {
      index++;
      p2++;
    } else if (p2 >= nums2.length) {
      index++;
      p1++;
    }else if (nums1[p1] < nums2[p2]) {
      index++;
      p1++;
    } else {
      index++;
      p2++;
    }
  }

  if (p1 >= nums1.length) {
    n1 = nums2[p2++]
  } else if (p2 >= nums2.length) {
    n1 = nums1[p1++];
  } else {
    n1 = nums1[p1] < nums2[p2] ? nums1[p1++] : nums2[p2++];
  }
  
  if (length % 2 === 1) {
    if (p1 >= nums1.length) {
      n2 = nums2[p2++]
    } else if (p2 >= nums2.length) {
      n2 = nums1[p1++];
    } else {
      n2 = nums1[p1] < nums2[p2] ? nums1[p1++] : nums2[p2++];
    }
    return n2;
  } else {
    if (p1 >= nums1.length) {
      n2 = nums2[p2++]
    } else if (p2 >= nums2.length) {
      n2 = nums1[p1++];
    } else {
      n2 = nums1[p1] < nums2[p2] ? nums1[p1++] : nums2[p2++];
    }
    return (n1 + n2) / 2;
  }
};

console.log(findMedianSortedArrays([], [2, 3]));