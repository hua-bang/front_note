/**
 * @author hug
 * @date 2021/3/10 8:06
 */
function sum(num1, num2) {
    return num1 + num2;
}

function applySum(num1,num2) {
    return sum.apply(null,[num1,num2]);
}

function callSum(num1,num2) {
    return sum.call(null,num1,num2);
}

console.log(applySum(5,8));
console.log(callSum(3,9));
