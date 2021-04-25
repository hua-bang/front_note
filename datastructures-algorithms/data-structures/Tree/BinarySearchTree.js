const Node = require("./TNode");

const {
    Compare,
    defaultCompare
} = require("./utils");

class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.root = null;
    }

    insert(key) {
        // 本来就无根
        if (this.root === null) {
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key);
        }
    }

    // 递归
    insertNode(node, key) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left === null) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left, key);
            }
        } else {
            if (node.right === null) {
                node.right = new Node(key);
            } else {
                this.insertNode(node.right, key);
            }
        }
    }

    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }

    // 中序 左根右
    inOrderTraverseNode(node, callback) {
        if (node.left) {
            this.inOrderTraverseNode(node.left, callback);
        }
        callback(node);
        if (node.right) {
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }

    // 先序 左根右
    preOrderTraverseNode(node, callback) {
        callback(node);
        if (node.left) {
            this.preOrderTraverseNode(node.left, callback);
        }
        if (node.right) {
            this.preOrderTraverseNode(node.right, callback);
        }
    }

    // 后序 左右根
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback);
    }

    // 后序 左右根
    postOrderTraverseNode(node, callback) {
        if (node.left) {
            this.postOrderTraverseNode(node.left, callback);
        }
        if (node.right) {
            this.postOrderTraverseNode(node.right, callback);
        }
        callback(node);
    }

    min() {
        return this.minNode(this.root);
    }

    minNode(node) {
        return node.left === null ? node.key : this.minNode(node.left);
    }

    max() {
        return this.maxNode(this.root);
    }

    maxNode(node) {
        return node.right === null ? node.key : this.maxNode(node.right);
    }

    search(key) {
        return this.searchNode(this.root, key);
    }

    searchNode(node, key) {
        if (node === null) {
            return false;
        }
        if (node.key === key) {
            return true;
        }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            return this.searchNode(node.left, key);
        } else {
            return this.searchNode(node.right, key);
        }
    }

    removeNode(node, key) {
        if (node === null) {
            return null;
        }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key);
        }
    }
}

let bst = new BinarySearchTree();
bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);
bst.inOrderTraverse((node) => {
    console.log(node.key);
})
console.log("==================");
bst.preOrderTraverse((node) => {
    console.log(node.key);
})
console.log("==================");
bst.postOrderTraverse((node) => {
    console.log(node.key);
})

console.log("==================");
console.log(bst.min());
console.log(bst.max());
console.log(bst.search(25));
console.log(bst.search(30));