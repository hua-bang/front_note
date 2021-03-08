/**
 * @author hug
 * @date 2021/3/8 21:12
 */
const target = {};
Object.defineProperty(target, "name", {
    value: "hug",
    writable: false,
    configurable: false
})
const handler = {
    get() {
        return "hello"
    }
}

const proxy = new Proxy(target, handler);
console.log(proxy.name);    //TypeError
