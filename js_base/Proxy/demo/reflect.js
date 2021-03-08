/**
 * @author hug
 * @date 2021/3/8 21:02
 */
const target = {
    foo: 'bar'
};

const handler = {
    get: Reflect.get,
}

const proxy = new Proxy(target, handler);
console.log(target.foo);

// 创建一个捕捉所有方法，将每个方法转发给对应反射api的空代理，可以直接用Reflect
const proxy2 = new Proxy(target,Reflect);
console.log(proxy2.foo);
proxy2.foo = "foo";
console.log(proxy.foo,target.foo);
