const DoublyLinkedList = require("./DoublyLinkedList");

class StackLinkedList {
    constructor() {
        this.items = new DoublyLinkedList();
    }

    push(element) {
        this.items.push(elemnt);
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.removeAt(this.size() - 1).element;
    }

    isEmpty() {
        return this.items.isEmpty();
    }

    size() {
        return this.items.size();
    }

    clear() {
        this.items.clear();
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.getElementAt(this.size() - 1).element;
    }
}