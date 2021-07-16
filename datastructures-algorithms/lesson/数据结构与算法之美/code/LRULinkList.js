class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LRULinkList {
  constructor(size, head) {
    this.size = size;
    this.head = head;
  }

  display() {
    let str = "begin: "
    let root = this.head;
    while (root) {
      str += ` ${root.val} `
      root = root.next;
    };
    str += "  end;";
    console.log(str);
  }

  appendNode(node) {
    node.next = this.head;
    this.head = node;
  }

  find(val) {
    let root = this.head;
    let count = 0;
    let prev;
    while (root) {
      if (val == root.val) {
        this.replaceNode(root, prev);
        return root;
      }
      count++;
      prev = root;
      root = root.next;
    }
    if (count < this.size) {
      this.appendNode(new Node(val));
    } else {
      this.appendAndRemove(new Node(val));
    }
    return this.head;
  }

  replaceNode(node, prev) {
    if (prev === undefined) {
      return ;
    }
    prev.next = node.next;
    node.next = this.head;
    this.head = node;
  }

  appendAndRemove(node) {
    let root = this.head;
    while (root) {
      if (root && root.next.next === null) {
        root.next = null;
      }
      root = root.next;
    }
    this.appendNode(node);
  }

}

let head = new Node("1");
let node = new Node("2");

let list = new LRULinkList(5, head);
list.display();
list.appendNode(node);
list.display();
list.find(3);
list.display();
list.find(2);
list.display();
list.find(1);
list.display();
list.find(1);
list.display();
list.find(4);
list.display();
list.find(5);
list.display();
list.find(3);
list.display();
list.find(6);
list.display();

