class MySet {
    constructor(data) {
        this.items = {};
        if (data instanceof Array) {
            data.forEach((v) => {
                this.add(v);
            })
        }
    }

    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }

    delete(element) {
        if (!this.has(element)) {
            return false;
        }
        delete this.items[element];
        return true;
    }

    clear() {
        this.items = {};
    }

    size() {
        return Object.keys(this.items).length;
    }

    values() {
        return Object.values(this.items);
    }

    union(otherSet) {
        let newSet = new MySet();
        for (const value of this.values()) {
            newSet.add(value)
        }
        for (const value of otherSet.values()) {
            newSet.add(value)
        }
        return newSet;
    }

    intersection(otherSet) {
        let newSet = new MySet();
        for (const value of otherSet.values()) {
            if (this.has(value)) {
                newSet.add(value);
            }
        }
        return newSet;
    }

    difference(otherSet) {
        let newSet = new MySet();
        for (const value of this.values()) {
            if (!otherSet.has(value)) {
                newSet.add(value);
            }
        }
        return newSet;
    }

    isSubSetOf(otherSet) {
        return this.values().every(val => otherSet.has(val));
    }
}

let a = new MySet([4, 5, 6, 9, 8, 10]);
let b = new MySet([5, 8, 9]);
let f = new MySet([5, 9]);
let c = a.union(b);
console.log(c.values());
let d = a.intersection(b);
console.log(d.values());
let e = a.difference(b);
console.log(e.values());
console.log(f.isSubSetOf(b));