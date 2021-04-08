// obj.__proto__ === Fn.prototype;
function _instanceof(target, Fn) {
    let proto = target.__proto__;
    while(proto) {
        if(proto === Fn.prototype) return true;
        proto = proto.__proto__;
    }
    return false;
}

let a = new Array();
console.log(_instanceof(a, Array));
console.log(_instanceof(a, String));
console.log(_instanceof(a, Object));