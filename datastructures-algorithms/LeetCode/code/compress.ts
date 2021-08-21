function compress(chars: string[]): number {
  let left = 0, write = 0;
  
  for (let read = 0; read < chars.length; read++) {
    if (read === chars.length - 1 || chars[read] !== chars[read + 1]) {
      chars[write++] = chars[read];
      let num = read - left + 1;
      if (num > 1) {
        const anchor = write;
        while (num > 0) {
          chars[write++] = '' + num % 10;
          num = Math.floor(num / 10);
        }
        reverse(chars, anchor, write - 1);
      }
      left = read + 1
    }
  }
  return write; 
};

function reverse(arr, left, right) {
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
}