let arr = [1, 2, 3, 4, 5, 6, 7];

function treeTraverse() {
  let root = arr[0];
  let leftChild = [];
  let rightChild = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[arr.length - 1] == leftChild[i] ||
      arr[arr.length - 1] == rightChild[i]
    ) {
      return
    }
   
      leftChild.push(arr[2 * i]);
      rightChild.push(arr[2 * i + 1]);
    
  }
  return { root, leftChild, rightChild };
}

console.log(treeTraverse());
