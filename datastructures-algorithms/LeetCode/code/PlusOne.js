/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    for(let index = digits.length - 1; index >= 0; index--) {
        if(digits[index] === 9) {
            digits[index] = 0;
        }else {
            digits[index]++;
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};