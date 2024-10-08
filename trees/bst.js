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

  //Search a node
  search(root, val) {
    if (root === null) {
      return false;
    } else if (root.data == val) {
      return true;
    } else if (root.data > val) {
      return this.search(root.left, val);
    } else {
      return this.search(root.rigth, val);
    }
  }

  //depth first search methods

  //pre-order
  preorder(root) {
    if (root) {
      console.log(root.data);
      this.preorder(root.left);
      this.preorder(root.rigth);
    }
  }

  //in-order traverse
  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.data);
      this.inorder(root.rigth);
    }
  }

  //post_order traverse
  postorder(root) {
    if (root) {
      this.postorder(root.left);
      this.postorder(root.rigth);
      console.log(root.data);
    }
  }

  //Breath first search=>printing the all nodes of each levelthe level
  breathSearch(root) {
    //also known as level order traversal
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
  min(root) {
    if (!root.left) {
      return root.data;
    } else {
      return this.min(root.left);
    }
  }
  //right most node is max
  max(root) {
    if (!root.rigth) {
      return root.data;
    } else {
      return this.min(root.rigth);
    }
  }

  //delete node
  delete(data) {
    this.root = this._delete(this.root, data);
  }

  _delete(node, data) {
    if (node === null) {
      return null;
    }

    //checking data on left side
    if (data < node.data) {
      node.left = this._delete(node.left, data);
    } else if (data > node.data) {
      //checking node on right side
      node.rigth = this._delete(node.rigth, data);
    } else {
      //if we found node delete it
      if (node.left === null && node.rigth === null) {
        //it means nodes have no children so delete it
        return null;
      } else if (node.left === null) {
        //node have rigth child so replace it with child
        return node.rigth;
      } else if (node.rigth == null) {
        return node.left;
      } else {
        let minNode = this._minNode(node.rigth);
        node.data = minNode.data;
        node.rigth = this._delete(node.rigth, minNode.data);
      }
      return node;
    }
  }
  _minNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  //count of nodes
  nodecount(node) {
    if (node === null) {
      return 0;
    }
    let leftTreee = this.nodecount(node.left);
    let rightNodes = this.nodecount(node.rigth);
    return leftTreee + rightNodes + 1;
  }
}
let bst = new BST();
bst.insert(50);
bst.insert(40);
bst.insert(60);
bst.insert(70);
bst.insert(41);
bst.insert(39);
bst.insert(59);

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
// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));
console.log(bst);
bst.delete();
console.log(bst);
