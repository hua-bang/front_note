function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let res = [];
  let i = 0, j = 0;
  while ((i < left.length) && (j < right.length)) {
    if (left[i] < right[j]) {
      res.push(left[i++]);
    } else {
      res.push(right[j++]);
    }
  }

  while (i < left.length) { 
    res.push(left[i++]);
  }

  while (j < right.length) { 
    res.push(right[j++]);
  }

  return res;
}

console.log(mergeSort([1, 8, 6, 10, 4, 6, 98, 1]));