
function permutations(data, k) {
  const arr = [];

  function getPermutations(data, k) {
    // 只剩一个可以选, 此时的data可以添加进去了
    if (k === 1) {
      arr.push(data.slice(0));
    } else {
      for (let i = 0; i < k; i++) {
        // 相当于每次为最后一个位取值
        let tmp = data[k - 1];
        data[k - 1] = data[i];
        data[i] = tmp;

        // 找到下一位的组合
        getPermutations(data, k - 1);

        // 回溯
        tmp = data[k - 1];
        data[k - 1] = data[i];   
        data[i] = tmp;
      }
    }
  }
  getPermutations(data, k);
  return arr;
}

let res = permutations([1, 2, 3, 4], 4);
console.log(res);