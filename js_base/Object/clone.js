function deepClone(object) {
    let res = object instanceof Array ? [] : {};
    for (const [key, value] of Object.entries(object)) {
        res[key] = typeof value === "object" ? deepClone(value) : value;
    }
    return res;
}

let a = {
    a:1,
    b:2
};
let cloneA = deepClone(a);
let b = deepClone(1);
console.log(a, cloneA);