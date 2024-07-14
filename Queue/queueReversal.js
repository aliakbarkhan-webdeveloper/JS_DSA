class Queue {
  constructor() {
    this.array = [];
    this.size = null;
    this.rear = null;
  }
  isEmpty() {
    if (this.array.length == 0) {
      return true;
    }
    return this.rear === null;
  }
  enqueue(data) {
    this.array.push(data);
    this.size++;
    this.rear = data;
  }
  dequeue() {
    if (this.isEmpty()) {
      return false;
    }
    this.size--;
    return this.array.shift();
  }

  traverse() {
    if (this.isEmpty()) {
      return ["empty queue"];
    }
    return this.array;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.array[0];
  }
}

class Stack {
  constructor() {
    this.array = [];
  }

  push(data) {
    if (this.array.length == 0) {
      this.array[0] = data;
      return;
    }
    this.array.push(data);
  }
  pop() {
    if (this.array.length == 0) {
      return null;
    }
    let arr = this.array.pop();
    return arr;
  }
  peek() {
    if (this.array.length == 0) {
      return null;
    }
    return this.array[this.array.length - 1];
  }
  isEmpty() {
    if (this.array.length === 0) {
      return true;
    }
    return false;
  }
}

function qReverse(queue) {
  let stack = new Stack();

  while (!queue.isEmpty()) {
    stack.push(queue.dequeue());
  }
  while (!stack.isEmpty()) {
    queue.enqueue(stack.pop());
  }
  return queue;
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

qReverse(queue);
console.log(queue);
