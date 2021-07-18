class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(val) {
    this.list.insert(val);
  }

  dequeue() {
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
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(val) {
    let node = new Node(val);

    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
  }

  pop() {
    if (!this.head) {
      return -1;
    }
    let val = this.head.val;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    return val;
  }
}


let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());