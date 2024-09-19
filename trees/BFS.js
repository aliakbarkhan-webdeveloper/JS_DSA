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

  //Checking if the root is empty or not
  isEmpty() {
    return this.root === null;
  }
  //Insert values in tree
  insert(val) {
    let node = new Node(val);
    if (this.isEmpty()) {
      this.root = node;
      return;
    } else {
      this.insertNode(this.root, node);
    }
  }

  //insert_NOde
  insertNode(root, node) {
    if (root.data > node.data) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.rigth === null) {
        root.rigth = node;
      } else {
        this.insertNode(root.rigth, node);
      }
    }
  }
}
