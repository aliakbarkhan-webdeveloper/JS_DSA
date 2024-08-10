//given a subtree, match that subtree exist in main tree or noot
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

  //use root of our main tree and subtree
  //find subroot
  //check identical nodes and subtree
  subtree(root, subroot) {
  
    
    if (root === null) {
      return false;
    }
    if (root.data === subroot.data) {
      //comparing root of tree and subtree
      if (this.isIdentical(root, subroot)) {
        //sub tree is identical
        return true;
      }
    }
    let leftSubtree = this.subtree(root.left, subroot);
    let rigthSubtree = this.subtree(root.rigth, this.subroot);
    if (leftSubtree) {
      return true;
    }
    if (rigthSubtree) {
      return true;
    }
    return false;
  }
  isIdentical(node, subroot) {
    if (node === null && subroot === null) {
      return true;
    } else if (node === null || subroot === null || node.data != subroot.data) {
      return false;
    }

    if (!this.isIdentical(node.left, subroot.left)) {
      return false;
    }
    if (!this.isIdentical(node.rigth, subroot.rigth)) {
      return false;
    }
    return true;
  }
}
const bst = new Node(1);
bst.left = new Node(2);
bst.rigth = new Node(3);
bst.left.left = new Node(4);
bst.left.rigth = new Node(5);
bst.rigth.left = new Node(6);
bst.rigth.rigth = new Node(7);

const subroot = new Node(2);
subroot.left = new Node(4);
subroot.rigth = new Node(5);

const checkbst = new BST();
console.log(checkbst.subtree(bst, subroot));


