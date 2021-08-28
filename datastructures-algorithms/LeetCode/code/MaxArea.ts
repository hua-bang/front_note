function maxArea(height: number[]): number {
  let left = 0, right = height.length - 1;
  let max = 0;

  while (left < right) {
    let area = (right - left) * Math.min(height[right], height[left]);
    max = max > area ? max : area;
    if (height[right] > height[left]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));