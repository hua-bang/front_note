/**
 * @author hug
 * @date 2021/3/8 20:44
 */
const target = {
    foo: "bar"
};

const handler = {
    // get捕获器
    get(trapTarget, property, receiver) {
        console.log(trapTarget, property, receiver);    // 目标对象， 查询的属性， 代理对象
        return trapTarget[property];
    }
};

let proxy = new Proxy(target, handler);
console.log(target.foo);
console.log(proxy.foo);

console.log(target['foo']);
console.log(proxy['foo']);
