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
      console.log(root.value);
      this.preorder(root.left);
      this.preorder(root.rigth);
    }
  }

  //in-order traverse
  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.rigth);
    }
  }

  //post_order traverse
  postorder(root) {
    if (root) {
      this.postorder(root.left);
      this.postorder(root.rigth);
      console.log(root.value);
    }
  }

  //Breath first search
  breathSearch(root) {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.rigth) {
        queue.push(current.rigth);
      }
      console.log(queue);
    }
    
  }

  //Minimum and maximum values in the BST
  //left most node is min
  min(root){
if (!root.left) {
    return root.value
}else{
   return this.min(root.left)
}

  }
  //right most node is max
  max(root){
    if (!root.rigth) {
        return root.value
    }else{
       return this.min(root.rigth)
    }
  }

  //delete node
  delete(root){
    
  }
}
let bst = new BST();
bst.insert(50);
bst.insert(850);
bst.insert(70);
bst.insert(40);
bst.insert(1);

// let se = bst.search(bst.root, 150);
// console.log("preorder");
// bst.preorder(bst.root);
// console.log(bst.isEmpty());
// console.log(`inorder`);
// bst.inorder(bst.root);
// console.log("post order");
// bst.postorder(bst.root);

// console.log("breath first search");
// bst.breathSearch();
console.log(bst.min(bst.root));
console.log(bst.max(bst.root));