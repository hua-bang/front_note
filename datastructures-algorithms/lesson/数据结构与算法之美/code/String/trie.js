class TrieNode {
  constructor(data) {
    this.data = data;
    this.children = new Array(26);
    this.isEndingChar = false;
  }
}

class Trie {
  root = new TrieNode("/"); // 根节点

  insert(text) {
    let p = this.root;
    for (let i = 0; i < text.length; i++) {
      let index = text[i].charCodeAt() - 97;
      if (p.children[index] === null) {
        let newNode = new TrieNode(text[i]);
        p.children[index] = newNode;
      }
      p = p.children[index];
    }
    p.isEndingChar = true;
  }

  find(pattern) {
    let p = this.root;
    for (let i = 0; i < pattern.length; i++) {
      let index = pattern[i].charCodeAt() - 97;
      if (p.children[index] === null) {
        return false;
      }
      p = p.children[index];
    }
    if (p.isEndingChar === false) {
      return false;
    } else {
      return true;
    }
  }
}

