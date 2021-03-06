/**
 * @author hug
 * @date 2021/3/6 16:50
 */
function* objectEntries(obj) {
    let propKeys = Reflect.ownKeys(obj);
    for (let prop of propKeys) {
        yield {
            propName: prop,
            value: obj[prop]
        }
    }
}

let a = {
    name: "hug",
    age: 18
};
for (const aElement of objectEntries(a)) {
    console.log(aElement);
}
