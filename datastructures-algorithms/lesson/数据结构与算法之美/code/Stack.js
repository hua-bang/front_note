class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(val) {
    this.list.append(val);
  }

  pop() {
    return this.list.pop();
  }

}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(node) {
    this.head = node;
  }

  append(val) {
    let node = new Node(val);
    node.next = this.head;
    this.head = node;
  }

  pop() {
    if (!this.head) {
      return -1;
    }
    let val = this.head.val;
    this.head = this.head.next;
    return val;
  }
}

let stack = new Stack();
stack.push(111);
console.log(stack.pop());
console.log(stack.pop());
stack.push(222);
console.log(stack.pop());