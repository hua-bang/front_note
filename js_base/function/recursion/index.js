/**
 * @author hug
 * @date 2021/3/10 8:47
 */
function factorial(num) {
    return num <= 1 ? 1 : num * arguments.callee(num - 1);
}

let factorial2 = (function f(num) {
    return num <= 1 ? 1 : num * f(num - 1);
})

console.log(factorial(5));
console.log(factorial(6));
