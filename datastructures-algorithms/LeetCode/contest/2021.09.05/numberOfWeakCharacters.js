/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  properties = properties.sort((a, b) => {
    return (a[0] - b[0]) || (a[1] - b[1]);
  });
  console.log(properties);

  let n = properties.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (properties[i][1] < properties[j][1] && properties[i][0] != properties[j][0]) {
        count++;
        break;
      }
    }
  }
  return count;

};

const properties = [[1, 5], [10, 4], [4, 3]]
console.log(numberOfWeakCharacters(properties));