function bf(str, target) {
  if (target === "") {
    return -1;
  }
  let n = str.length;
  let m = target.length;
  if (n < m) {
    return -1;
  }
  let index = -1;
  for (let i = 0; i < (n - m + 1); i++) {
    index = i;
    for (let j = 0; j < m; j++) {
      if (str[i + j] !== target[j]) {
        index = -1;
      }
    }
    if (index !== -1) {
      break;
    }
  }

  return index;
}

console.log(bf("aabaa", "aabaa"));