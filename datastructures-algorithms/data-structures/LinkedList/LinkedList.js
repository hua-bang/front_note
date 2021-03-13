const Node = require("./mNode.js");
const {
    equals
} = require("./Util.js")

class LinkedList {
    constructor() {
        this.count = 0;
        this.head = null;
        this.equalsFn = equals;
    }

    push(element) {
        let node = new Node(element);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }

    removeAt(index) {
        // 判断index是否有效
        if (index >= 0 && index < this.count) {
            let current = this.head;
            // 如果是开头
            if (index === 0) {
                // head = head.next
                this.head = current.next;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--; //count--
            return current.element;
        }
        return undefined;
    }

    getElementAt(index) {
        if (index >= 0 && index < this.count) {
            let node = this.head;
            for (let i = 0; i < index && node !== null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    insert(element, index) {
        if (index < 0 || index > this.count) {
            return false;
        }
        let node = new Node(element);
        let current = this.head;
        if (index === 0) {
            node.next = current;
            this.head = node;
        } else {
            let previous = this.getElementAt(index - 1);
            current = previous.next;
            node.next = current;
            previous.next = node;
        }
        this.count++;
        return true;
    }

    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.count && current !== null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }

    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }

    getHead() {
        return this.head;
    }
}

let linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
console.log(linkedList);