class Node {
  constructor(data) {
    this.value = data;
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
    if (root.value > node.value) {
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

  //Search a node
  search(root, val) {
    if (root === null) {
      return false;
    } else if (root.value == val) {
      return true;
    } else if (root.value > val) {
      return this.search(root.left, val);
    } else {
      return this.search(root.rigth, val);
    }
  }

  //depth first search methods

  //pre-order
  preorder(root) {
    if (root) {
      console.log(root);
      this.preorder(root.left);
      this.preorder(root.rigth);
    }
  }

  //in-order traverse
  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root);
      this.inorder(root.rigth);
    }
  }
}
let bst = new BST();
bst.insert(50);
bst.insert(70);
bst.insert(40);
bst.insert(150);
bst.insert(1);

let se = bst.search(bst.root, 150);
bst.preorder(bst.root);
console.log(bst.isEmpty());
