let target = {
};
// 空捕获器
let proxy = new Proxy(target, {
    get(...args) {
        return Reflect.set(...args);
    }
});
proxy.test = 10;
console.log(target.test);

let numbers = [0,1,2];
let numProxy = new Proxy(numbers, {
    get(target, prop) {
        if(prop in target) {
            return target[prop];
        }else {
            return 0;
        }
    },
    set(target, prop, value) {
        target[prop] = value * 2;
        return true;   
    }
});
numProxy[5] = 10;

console.log(numbers);
console.log(numProxy[5]);
console.log(numProxy[10]);


let dictionary = {
    hello: "halo",
    bye: "拜"
}

let dictionaryProxy = new Proxy(dictionary, {
    get(target, prop) {
        if(prop in target) {
            return target[prop];
        }else {
            return prop;
        }
    }
})

console.log(dictionaryProxy["hello"]);
console.log(dictionaryProxy["hello world"]);