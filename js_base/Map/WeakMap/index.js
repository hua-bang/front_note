/**
 * @author hug
 * @date 2021/3/5 9:47
 */
let a = {};
const wm = new WeakMap([
    [a,"a-val"]
])
console.log(wm);

let container = {
    key: {}
}
wm.set(container.key,"container");
console.log(wm.get(container.key));
container.key = null;
console.log(wm.get(container.key));

