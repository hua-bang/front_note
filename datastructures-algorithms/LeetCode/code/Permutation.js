function permutation(s) {
  const res = [];
  const perm = [];
  const vis = [];
  let arr = Array.from(s).sort();
  backtrack(arr, 0, s.length, perm);

  return res;


  function backtrack(arr, i, n, perm) {
    if (i === n) {
      res.push(perm.join(""));
      return;
    } else {
      for (let j = 0; j < arr.length; j++) {
        if (vis[j] || ((j>0) && (!vis[j-1]) && (arr[j-1] === arr[j]))) {
          continue;
        } else {
          
          perm.push(arr[j]);
          vis[j] = true;
          backtrack(arr, i + 1, n, perm);
          perm.pop();
          vis[j] = false;
        }
      }
    }
  }
}
console.log(permutation("aab"));