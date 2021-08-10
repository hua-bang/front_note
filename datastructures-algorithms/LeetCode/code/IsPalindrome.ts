function isPalindrome1(x: number): boolean {
  if (x < 0) {
    return false;
  }
  let str = x.toString(), length = str.length;
  let left, right, mid = str.length >> 1;
  if (length % 2 === 0) {
    left = mid - 1;
    right = mid;
  } else {
    left = mid - 1;
    right = mid + 1;
  }
  while (left >= 0 && right < length) {
    if (str[left] !== str[right]) {
      return false;
    }
    left--;
    right++;
  }
  return true;
};


function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  let reserveNumber:number = 0;
  while (x > reserveNumber) {
    reserveNumber = reserveNumber * 10 + x % 10;
    x = x / 10;
  }
  return x === reserveNumber || x === reserveNumber / 10;
};