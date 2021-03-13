class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    enqueue(element) {
        this.items[this.count++] = element;
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        let val = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return val;
    }

    isEmpty() {
        return this.lowestCount >= this.count;
    }

    size() {
        return this.count - this.lowestCount;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        let val = this.items[this.lowestCount];
        return val;
    }

    clear() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
}

let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(3);
console.log(queue.peek()); //5
console.log(queue.size()); //3
console.log(queue.dequeue()); //5
console.log(queue.dequeue()); //4
queue.clear();
console.log(queue.isEmpty());