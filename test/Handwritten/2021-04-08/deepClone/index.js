function deepClone(obj) {
    let instance = obj instanceof Array ? [] : {};
    for (const key in obj) {
        instance[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    } 
    return instance;
}

let a = {
    b:1,
    c:2
};
let b = deepClone(a);
b.b = 2
console.log(a,b);

let c = [1,2,3];
d = deepClone(c);
d.push(3);
console.log(c,d);