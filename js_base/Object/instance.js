/**
 * 目的： 检测函数的prototype是否在对象的原型链上
 * 流程： 1. 找到对象的__proto__
 *       2. 判断proto是否等于函数的prototype
 *       3. 如果是，返回true
 *       4. 不是，则继续在原型链上进行查找 即proto = proto.__proto__
 *       5. 为null 退出 返回false
 * @param {*} target 
 * @param {*} Fn 
 * @return boolean
 */
function _instance(target, Fn) {
    let proto = target.__proto__;
    let prototype = Fn.prototype;
    while(proto) {
        if(proto === null)
            return false;
        if(proto === prototype)
            return true;
        proto = proto.__proto__;
    }
    return false;
}

let a = new Array();
console.log(_instance(a,Array));