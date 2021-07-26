/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  let str = num.toString();
  if(str.length <= k) {
    return 0;
  }
  let count = 0;
  while(count < k) {
    let i = 0;
    for(; i < str.length - 1; i++) {
      if(str[i] > str[i+1]) {
        break;
      }
    }
    count++;
    str = str.substring(0, i).concat(str.substring(i + 1));
  }

  while (str.length > 1 && str[0] === "0") {
    str = str.substring(1);
  }

  return str;
};



var removeKdigits = function (num, k) {
  
  let stack = [];
  let numArr = [...num.toString()];
  
  if (numArr.length <= k) {
    return "0";
  }

  for (let i = 0; i < numArr.length; i++) {
    while (stack.length > 0 && (stack[stack.length - 1] > numArr[i]) && (k > 0)) {
      stack.pop();
      k--;
    }
    stack.push(numArr[i]);
  }

  for (; k > 0; k--) {
    stack.pop();
  }

  while (stack.length > 1 && stack[0] === "0") {
    stack.shift();
  }

  let str = stack.join("");
  return str.toString();
};

console.log(removeKdigits("1432219", 3));
