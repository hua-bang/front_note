/**
 * 思路：1. 函数中this的指向是由调用方
 *      2. 所以只要让对象变成调用的主体即可
 * 
 * 流程：1. 检测是否有对象传入 有则用对象 否则用空对象
 *      2. 给其赋予函数，值设置为调用的函数
 *      3. 参数传递
 *      4. 删除在对象上定义的函数
 */
Function.prototype._apply = function(target, args) {
    let context = target ? target : {};
    context.fn = this;
    let res = context.fn(...args);
    delete context.fn;
    return res;
}

function getSum(...args) {
    return args.reduce((total, num) => total + num, this.begin);
}

console.log(getSum._apply({begin: 10}, [1,2,3,4]));