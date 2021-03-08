/**
 * @author hug
 * @date 2021/3/8 21:19
 */
const target = {
    foo: 'bar'
};

const handler = {
    get() {
        return "handler";
    }
}

const {proxy,revoke} = Proxy.revocable(target,handler);
console.log(proxy.foo);
revoke();
// console.log(proxy.foo); TypeError
