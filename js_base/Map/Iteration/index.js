/**
 * @author hug
 * @date 2021/3/5 9:19
 */
const m = new Map([
    ["a","A"],
    ["b","B"]
]);

// use entries can get iterator
console.log(m.entries === m[Symbol.iterator]);

// use entries
for (const [key, value] of m.entries()) {
    console.log(key,value);
}

//use Symbol.iterator
for (const [key, value] of m[Symbol.iterator]()) {
    console.log(key,value);
}

// forEach
m.forEach((k,v) => {
    console.log(k,v);
})

// get arr of key
let keys = m.keys();
// get arr of value
let values = m.values();
