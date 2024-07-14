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
    this.size--;
    if (this.isEmpty()) {
      return false;
    }
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
    this.q1 = new Queue();
    this.q2 = new Queue();
  }

  isEmpty() {
    return this.q1.isEmpty() && this.q2.isEmpty();
  }
  push(data) {
    let q1 = this.q1;
    let q2 = this.q2;
    if (!q1.isEmpty()) {
      q1.enqueue(data);
    } else {
      q2.enqueue(data);
    }
  }
  pop() {
    let q1 = this.q1;
    let q2 = this.q2;
    if (this.isEmpty()) {
      return -1;
    }
    let top = -1;

    //case 1: where q1 is notempty
    if (!q1.isEmpty()) {
      while (!q1.isEmpty()) {
        top = q1.dequeue();
        if (q1.isEmpty()) {
          q1.rear = null;
          break;
        }
        q2.enqueue(top);
      }
    } else {
      //case 2: queue is not empty
      while (!q2.isEmpty()) {
        top = q2.dequeue();
        if (q2.isEmpty()) {
          q2.rear = null;
          break;
        }
        q1.enqueue(top);
      }
    }
    return top;
  }
  peek() {
    let q1 = this.q1;
    let q2 = this.q2;
    if (this.isEmpty()) {
      return -1;
    }
    let top = -1;

    //case 1: where q1 is notempty
    if (!q1.isEmpty()) {
      while (!q1.isEmpty()) {
        top = q1.dequeue();
        q2.enqueue(top);
      }
    } else {
      //case 2: queue is not empty
      while (!q2.isEmpty()) {
        top = q2.dequeue();
        q1.enqueue(top);
      }
    }
    return top;
  }
}

let stack = new Stack();
stack.push(5);
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);
stack.pop();
stack.pop();
console.log(stack);
