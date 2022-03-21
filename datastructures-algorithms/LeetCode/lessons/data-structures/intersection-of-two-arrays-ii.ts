function intersect(nums1: number[], nums2: number[]): number[] {
  const result: Array<number> = [];
  const map = new Map<number, number>();
  for (let num of nums1) {
    const val = map.get(num);
    if (val) {
      map.set(num, val + 1);
    } else {
      map.set(num, 1);
    }
  }
  for(let num of nums2) {
    const val = map.get(num);
    if (val) {
      result.push(num);
      map.set(num, val - 1);
    }
  }
  return result;
};