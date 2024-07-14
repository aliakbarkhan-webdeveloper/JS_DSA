class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//our head will be consider as top

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head == null; //it is checking by comparing and will return boolean
  }

  //Push constructor
  push(data) {
    let newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  //POP method
  pop() {
    if (this.isEmpty()) {
      //if stack is empty it will return -ve value
      return -1;
    }
    let top = this.head.data;
    this.head = this.head.next;
    return top;
  }

  //peek
  peek() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.head.data;
  }

  search(data) {
    if (this.isEmpty()) {
      return false;
    }
    if (this.head.data == data) {
      return true;
    }

    return false;
  }
}

let S = new Stack();
S.push(1);
S.push(2);
S.push(3);
S.push(4);

console.log(S);

S.pop();
console.log(S);
console.log(S.peek());
