class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.rigth = null;
  }
}
class Tree {
  constructor(data) {
    this.root = null;
    this.idx = -1;
  }

  buildtree(nodes) {
    this.idx++;
    if (nodes[this.idx] == -1) {
      return null;
    }
    this.root = new Node(nodes[this.idx]);
    this.root.left = this.buildtree(nodes);
    this.root.rigth = this.buildtree(nodes);
    return this.root;
  }
}

let nodes=[1,2,4,-1,-1,5,-1,-1,3,-1,6,-1,-1]
let tree=new Tree()
tree.buildtree(nodes)
console.log(tree);
