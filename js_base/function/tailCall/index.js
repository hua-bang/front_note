/**
 * @author hug
 * @date 2021/3/10 9:02
 */

function innerFunction() {}

// 无优化 没有返回
function outerFunction() {
   innerFunction();
}

// 无优化 调用后不直接返回
function outerFunction() {
    let res = innerFunction();
    return res;
}

// 无优化 尾调用返回后转型为字符串
function outerFunction() {
    return innerFunction().toString();
}

//无优化 尾调用是个闭包
function outerFunction() {
    let foo = 'bat'
    function innerFunction() {
        return foo
    }
    return innerFunction();
}

// 有优化
function outerFunction() {
    return innerFunction(1,2);
}

// 有优化
function outerFunction(condition) {
    return condition ? innerFunctionA() : innerFunctionB();
}
