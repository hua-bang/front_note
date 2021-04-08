/**
 * 流程：1.新建一个对象
 *      2.对象的__proto__ === 函数的prototype
 *      3.将函数的this与对象进行绑定
 *      4.看返回值是否是引用值
 *      5.是则返回引用值， 不是的话则返回对象
 * 
 * @param {*} Fn 构造函数
 */
function _new(Fn, ...args) {
    let obj = {};
    obj.__proto__ = Fn.prototype;
    let res = Fn.call(obj, ...args);
    return typeof res === "object" ? res : obj;
}