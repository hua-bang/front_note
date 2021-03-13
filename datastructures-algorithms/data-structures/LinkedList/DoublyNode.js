const Node = require("./mNode.js");

class DoublyNode extends Node {
    constructor(element, next, prev) {
        super(element, next);
        this.prev = prev;
    }
}

module.exports = DoublyNode;