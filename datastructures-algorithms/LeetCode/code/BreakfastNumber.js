/**
 * @param {number[]} staple
 * @param {number[]} drinks
 * @param {number} x
 * @return {number}
 */
var breakfastNumber = function(staple, drinks, x) {
  let count = 0;
  staple.sort((a, b) => a - b);
  drinks.sort((a, b) => a - b);

  for(let i = 0; i < staple.length; i++) {
    if(staple[i] >= x) {
      continue;
    }
    let j = drinks.length - 1;
    while(j >= 0 && ((drinks[j] + staple[i]) > x))
      j--;
    if (j === -1) {
      break;
    }
    count = (count + j + 1) % (1e9 + 7);
  }

  return count;

};

function breakfastNumber() {
  let count = 0;
  staple.sort((a, b) => a - b);
  drinks.sort((a, b) => a - b);

  let i = 0, j = drinks.length - 1;
  while (i < staple.length && j >= 0) {
    if (staple[i] + drinks[j] > x) {
      j--;
    } else {
      count = (count + j + 1) % (1e9 + 7);
      i++;
    }
  }
  return count;
}



let staple = [7,3,4,3,9,9,10,8,8,3]
let drinks = [7,10,6,7,5,2,8,4,5,8]
let x = 5;
breakfastNumber(staple, drinks, x);