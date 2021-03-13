class StackPrivate {
    #count = 0;
    #items = {};

    push(element) {
        this.#items[this.#count++] = element;
    }

    pop() {
        if (this.#count === 0) {
            return undefined;
        }
        let val = this.#items[--this.#count];
        delete this.#items[this.#count];
        return val;
    }

    size() {
        return this.#count;
    }

    isEmpty() {
        return this.#count <= 0;
    }

    peek() {
        if (this.#count === 0) {
            return undefined;
        }
        return this.#items[this.#count - 1];
    }

    clear() {
        this.#items = {};
        this.#count = 0;
    }
}

let stack = new StackPrivate();
console.log(stack.size());
console.log(stack.isEmpty());
stack.push(123);
console.log(stack.peek());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.size());
stack.push(456);
stack.clear();
console.log(stack.size());