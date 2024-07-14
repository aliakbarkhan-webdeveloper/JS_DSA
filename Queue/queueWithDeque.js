//Double ended queue
class Deque {
  constructor() {
    this.array = [];
    this.size = null;
    this.front = null;
    this.rear = null;
  }
  isEmpty() {
    if (this.array.length === 0) {
      return true;
    }
    return false;
  }

  addFirst(data) {
    this.size++;

    if (this.array.length === 0) {
      this.array[0] = data;
      return;
    }

    this.array.unshift(data);
    this.rear = this.array[this.array.length - 1];
    this.front = this.array[0];
  }
  removeFirst() {
    if (this.isEmpty()) {
      return null;
    }
    this.size--;
    return this.array.shift();
  }

  addLast(data) {
    this.size++;
    if (this.isEmpty()) {
      this.array.push(data);
      return;
    }

    this.array.push(data);
    this.rear = this.array[this.array.length - 1];
    this.front = this.array[0];
  }

  removeLast() {
    if (this.isEmpty()) {
      return null;
    }
    this.size--;
    return this.array.pop();
  }

  getFirst() {
    if (this.isEmpty()) {
      return null;
    }
    return this.array[0];
  }
  getLast() {
    if (this.isEmpty()) {
      return false;
    }
    return this.array[this.array.length - 1];
  }
}

class Queue {
  constructor() {
    this.deque = new Deque();
  }
  isEmpty() {
    return this.deque.isEmpty();
  }

  enqueue(data) {
    this.deque.addLast(data);
  }
  dequeue() {
    return this.deque.removeFirst();
  }
  peek() {
    if (this.deque.isEmpty()) {
      return null;
    }
    return this.deque.getFirst();
  }
}
let q = new Queue();
q.enqueue(5);
q.enqueue(4);
q.enqueue(3);

console.log(q.peek());
