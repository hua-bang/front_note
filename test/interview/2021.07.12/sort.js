function sort(arr1, arr2) {
  let p1 = 0, p2 = 0;
  let arr = [];

  let index = 0;
  while (p1 < arr1.length && p2 < arr2.length) {
    arr[index++] = arr1[p1] < arr2[p2] ? arr1[p1++] : arr2[p2++];
  }

  while (p1 < arr1.length) {
    arr[index++] = arr1[p1++];
  }

  while (p2 < arr2.length) {
    arr[index++] = arr2[p2++];
  }
  return arr;
}

console.log(sort([1, 3], [2, 4, 5, 6]))

function sortMutil(...arr) {
  let p = new Array(arr.length);
  p.fill(0);
  let res = [];
}