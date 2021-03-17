const {
    defaultToString
} = require("./util");

const ValuePair = require("./ValuePair")

class HashTableLinear {

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
        if (key) {
            const postion = this.hashCode(key);
            if (this.table[postion] === null) {
                this.table[postion] = new ValuePair(key, value);
            } else {
                while (this.table[postion] !== null) {
                    postion = postion + 1;
                }
                this.table[postion] = value;
            }
            return true;
        }
        return false;
    }

    get(key) {
        if (key) {
            const postion = this.hashCode(key);
            if (this.table[postion] !== null) {
                if (this.table[postion].key === key) {
                    return this.table[postion].value;
                }
                let index = postion + 1;
                while (this.table[index] !== null && this.table[index].key !== key) {
                    index++;
                }
                if (this.table[index] !== null && this.table[index].key === key) {
                    return this.table[postion].value;
                }
            }
            return undefined;
        }
        return undefined;
    }

    verifyRemoveSideEffect(key, removedPosition) {
        const hash = this.hashCode(key);
        let index = removedPosition + 1;
        while (this.table[index] !== null) {
            const posHash = this.hashCode(this.table[index].key);
            if (posHash <= hash || posHash <= removedPosition) {
                this.table[removedPosition] = this.table[index];
                delete this.table[index];
                removedPosition = index;
            }
        }
        index++;
    }

    remove(key) {
        const postion = this.hashCode(key);
        if (this.table[postion] !== null) {
            if (this.table[postion].key === key) {
                delete this.table[postion];
                this.verifyRemoveSideEffect(key, postion);
                return true;
            }
            let index = postion + 1;
            while (this.table[index] !== null && this.table[index].key !== key) {
                index++;
            }
            if (this.table[index] !== null && this.table[index].key === key) {
                delete this.table[postion];
                this.verifyRemoveSideEffect(key, postion);
                return true;
            }
        }
        return false;
    }
}