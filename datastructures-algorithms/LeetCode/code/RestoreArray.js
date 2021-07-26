/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
  if(adjacentPairs.length === 1) {
    return adjacentPairs[0];
  }

  let map = {};
  for(const adj of adjacentPairs) {
    map[adj[0]] === undefined ? (map[adj[0]] = [adj[1]]) : (map[adj[0]].push(adj[1]));
    map[adj[1]] === undefined ? (map[adj[1]] = [adj[0]]) : (map[adj[1]].push(adj[0]));
  }
  
  let arr = new Array(adjacentPairs.length + 1).fill(0);
  for(const [ key, valArr ] of Object.entries(map)) {
    if (valArr.length === 1) {
      arr[0] = +key;
      break;
    }
  }

  arr[1] = map[arr[0]][0];

  for (let i = 2; i < arr.length; i++) {
    let currentArr = map[arr[i - 1]];
    if (currentArr.length === 1) {
      arr[i] = currentArr[0];
    } else {
      arr[i] = currentArr[0] === arr[i - 2] ? currentArr[1] : currentArr[0];
    }
  }

  return arr;
};

let adjacentPairs = [[4,-2],[1,4],[-3,1]];
console.log(restoreArray(adjacentPairs));