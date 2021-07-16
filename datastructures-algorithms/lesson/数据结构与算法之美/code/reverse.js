class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

function reverse(root) {
  if (!root) {
    return root;
  }
  let stack = [];

  while (root) {
    stack.push(root);
    root = root.next;
  }

  let head = stack.pop();
  let current = head;

  while (stack.length) {
    let node = stack.pop();
    node.next = null;
    current.next = node;
    current = current.next;
  }
  return head;
}

function reverse(root) {
  if (!root) {
    return root;
  }
  let head = null;
  while (root) {
    let current = new Node(root.val);
    if (!head) {
      head = current;
    } else {
      current.next = head;
      head = current;
    };
    root = root.next;
  }
  return head;
}

console.log(reverse(node1));

