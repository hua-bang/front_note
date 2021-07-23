/**
 * @param {number[]} questions
 * @return {number}
 */
var halfQuestions = function (questions) {
  let n = questions.length / 2;
  let map = {};
  
  questions.forEach(v => {
    if (!map[v]) {
      map[v] = 1;
    } else {
      map[v] = map[v] + 1;
    }
  })

  let arr = Array.from(Object.values(map));
  arr.sort((a, b) => b - a);

  let count = 0;
  for (let index = 0; index < arr.length; index++) {
    n = n - arr[index];
    count++;
    if (n <= 0) {
      break;
    }
  }

  return count;
};

console.log(halfQuestions([1, 5, 1, 3, 4, 5, 2, 5, 3, 3, 8, 6]));