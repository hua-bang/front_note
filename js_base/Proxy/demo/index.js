/**
 * @author hug
 * @date 2021/3/8 20:34
 */
const target = {
  id: "target"
};

// 空代理
const handler = {};

const proxy = new Proxy(target, handler);
console.log(target.id, proxy.id);

// 给目标赋值会反映在两个对象上
// 两个访问的是同一个值
target.id = "foo";
console.log(target.id, proxy.id);

// 给代理属性
proxy.id = "bar";
console.log(target.id, proxy.id);

//都用应用到目标和代理对象
console.log(target.hasOwnProperty("id"));
console.log(proxy.hasOwnProperty("id"));

console.log(target === proxy);
