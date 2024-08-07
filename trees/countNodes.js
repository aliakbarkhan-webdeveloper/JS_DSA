class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.rigth = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }

  //initialize tree with root
  insert(data) {
    // if (this.root === null) {
    //   this.root = new Node(data);
    //   return this.root;
    // }
    this.root = this._insert(this.root, data);
  }
  //inserting nodes
  _insert(node, data) {
    if (node === null) {
      node = new Node(data);
      return node;
    }
    if (data < node.data) {
      node.left = this._insert(node.left, data);
    } else {
      node.rigth = this._insert(node.rigth, data);
    }
    return node;
  }

  //constructor for nodes counting
  countnodes() {
    return this._countnodes(this.root);
  }

  _countnodes(node) {
    if (node === null) {
      return 0;
    }
    let leftnodes = this._countnodes(node.left);
    let rightnodes = this._countnodes(node.rigth);

    return 1 + leftnodes + rightnodes;
  }
}

const bst = new BST();
bst.insert(5);
bst.insert(7);
bst.insert(6);
bst.insert(4);
bst.insert(3);
bst.insert(2);
bst.insert(10);
bst.insert(1);
console.log(bst.countnodes());
