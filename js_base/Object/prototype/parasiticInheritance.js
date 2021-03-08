/**
 * @author hug
 * @date 2021/3/8 9:28
 */

// 寄生式继承
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function createAnother(original) {
    let clone = object(original);
    clone.sayHi = function () {
        console.log("say hi");
    }
    return clone;
}


