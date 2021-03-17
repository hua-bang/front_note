const {
    defaultToString
} = require("./util");

const ValuePair = require("./ValuePair")

class HashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    loseloseHashCode(key) {
        if (typeof key === "number") {
            return key;
        }
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (const key in tableKey) {
            hash += tableKey.charCodeAt(key);
        }
        return hash % 37;
    }

    hashCode(key) {
        return this.loseloseHashCode(key);
    }

    put(key, value) {
        if (key && value) {
            const postion = this.hashCode(key);
            this.table[postion] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    get(key) {
        if (key) {
            return this.table[this.hashCode(key)].value;
        }
        return undefined;
    }

    remove(key) {
        const hash = this.hashCode(key);
        let data = this.table[hash];
        if (data) {
            delete this.table[hash];
            return true;
        }
        return false;
    }

    toString() {
        if (this.isEmpty()) {
            return "";
        }
        const keys = Object.keys(this.table);
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
        for (let index = 1; index < keys.length; index++) {
            objString = `${objString}, {${keys[i]} => ${this.table[keys[i]].toString()}}`;
        }
        return objString;
    }

    hasKey(key) {
        return this.table[this.hashCode(key)] !== null;
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

}

const hashTable = new HashTable();
hashTable.put("a", 123);
console.log(hashTable.get("a"));
console.log(hashTable.toString());