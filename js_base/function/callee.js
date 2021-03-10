/**
 * @author hug
 * @date 2021/3/9 20:48
 */
function factorial(num) {
    return num > 1 ? num * arguments.callee(num - 1) : 1;
}

console.log(factorial(4));
