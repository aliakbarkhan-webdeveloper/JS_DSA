class Node {
  constructor(data) {
    this.val = data;
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
    if (root.val > node.val) {
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

  BFS() {
    if (this.root == null) {
      return null;
    }
    let arr = [];
    arr.unshift(this.root);
    while (arr.length>=0) {
      let curr;
      curr = arr.pop();
      console.log(curr.val);
      if (curr.left) {
        arr.unshift(curr.left);
      }
      if (curr.right) {
        arr.unshift(curr.right);
      }
    }
  }
}


const bst=new BST()
bst.insert(10)
bst.insert(13)
bst.insert(19)
bst.insert(7)
bst.insert(6)

bst.BFS()