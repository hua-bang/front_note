const DoublyNode = require("./DoublyNode.js");
const {
    equals
} = require("./Util")

class DoublyLinkedList extends DoublyNode {
    constructor(equals = equals) {
        super(equals);
        this.tail = undefined;
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            let current = this.head;
            if (index === 0) {
                if (this.head === null) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    this.head = node;
                }
            } else if (index === this.count) {
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                node.prev = previous;
                previous.next = node;
                node.next = current;
                current.prev = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next;
                if (this.count === 1) {
                    this.tail = undefined;
                } else {
                    this.head.prev = undefined;
                }
            } else if (index === this.count - 1) {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = undefined;
            } else {
                current = this.getElementAt(index);
                const previous = current.prev;
                previous.next = current.next;
                current.prev = previous;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}

module.exports = DoublyLinkedList;