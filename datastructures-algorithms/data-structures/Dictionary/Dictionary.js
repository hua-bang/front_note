const {
    defaultToString
} = require("./util");

const ValuePair = require("./ValuePair")

class Dictionary {

    constructor(toStrFn = defaultToString) {
        this.table = {};
        this.toStrFn = toStrFn;
    }

    hasKey(key) {
        return this.table[this.toStrFn(key)] !== null;
    }

    set(key, value) {
        if (key && value) {
            this.table[this.toStrFn(key)] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    get(key) {
        if (this.hasKey(key)) {
            return this.table[this.toStrFn(key)].value;
        } else {
            return undefined;
        }
    }

    clear() {
        this.table = {};
    }

    size() {
        return Object.keys(this.table).length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    keys() {
        return this.keyValues().map(v => v.key);
    }

    values() {
        return this.keyValues().map(v => v.value);
    }

    keyValues() {
        const valuePairs = [];
        for (const key in this.table) {
            if (this.hasKey(key)) {
                valuePairs.push(this.table[key]);
            }
        }
        return valuePairs;
    }

    forEach(callbackFn = () => {}) {
        let arr = this.keyValues();
        for (const item of arr) {
            callbackFn(item.key, item.value);
        }
    }
}

let dict = new Dictionary();
dict.set("a", 123);
dict.set("B", 456);
// console.log(dict.get("a"));
// console.log(dict.keys());
// console.log(dict.values());
// console.log(dict.remove("a"));
// console.log(dict.values());
dict.forEach((k, v) => {
    console.log(`${k}---${v}`);
});