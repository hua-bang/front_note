/**
 * @author hug
 * @date 2021/3/8 21:53
 */
const target = {
    foo: "bar"
};

const firstProxy = new Proxy(target,{
    get() {
        console.log("first proxy");
        return Reflect.get(...arguments);
    }
})

const secondProxy = new Proxy(firstProxy,{
    get() {
        console.log("second proxy");
        return Reflect.get(...arguments);
    }
})

console.log(secondProxy.foo);
