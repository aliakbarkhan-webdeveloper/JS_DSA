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

const deque = new Deque();
deque.addFirst(6);
deque.addFirst(7);
deque.addLast(5);
deque.addLast(4);
