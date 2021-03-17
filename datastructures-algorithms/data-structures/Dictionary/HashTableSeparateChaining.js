const {
    defaultToString
} = require("./util");

const ValuePair = require("./ValuePair")
const LinkedList = require("../LinkedList/LinkedList");

class HashTableSeparateChaining {
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
            let position = this.hashCode(key);
            // 无节点
            if (this.table[position] == null) {
                this.table[position] = new LinkedList();
            }
            this.table[position].push(new ValuePair(key, value));
            return true;
        }
        return false;
    }

    get(key) {
        if (key) {
            const position = this.hashCode(key);
            const linkedList = this.table[position];
            if (linkedList === null || linkedList.isEmpty()) {
                return undefined;
            }
            let current = linkedList.getHead();
            while (current !== null) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }
        }
        return undefined;
    }

    remove(key) {
        if (key) {
            const position = this.hashCode(key);
            const linkedList = this.table[position];
            if (linkedList === null || linkedList.isEmpty()) {
                return false;
            }
            let current = linkedList.getHead();
            while (current !== null) {
                if (current.element.key === key) {
                    linkedList.remove(current.element);
                    if (linkedList.isEmpty()) {
                        delete this.table[position];
                    }
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }

}

let hashTable = new HashTableSeparateChaining();
hashTable.put("Jonathan", 45);
hashTable.put("Jamie", 50);
console.log(hashTable)
console.log(hashTable.get("Jonathan"));
console.log(hashTable.get("Jamie"));