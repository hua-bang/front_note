class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    isEmpty() {
        return this.lowestCount >= this.count;
    }

    size() {
        return this.count - this.lowestCount;
    }

    addBack(element) {
        this.items[this.count++] = element;
    }

    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.lowestCount !== 0) {
            this.items[--this.lowestCount] = element;
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.items[0] = element;
        }
    }

    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        let val = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return val;
    }

    removeEnd() {
        if (this.isEmpty()) {
            return undefined;
        }
        let val = this.items[this.count - 1];
        delete this.items[this.count - 1];
        this.count--;
        return val;
    }

    peedFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    peedEnd() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }

    clear() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
}

let deque = new Deque();
console.log(deque.isEmpty());
deque.addFront(1);
deque.addFront(2);
deque.addBack(2);
deque.addBack(3);
deque.addBack(4);
deque.addFront(5);
console.log(deque.items);