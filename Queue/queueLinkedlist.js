class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head == null && this.tail == null;
  }

  enqueue(data) {
    let node = new Node(data);
    if (this.isEmpty()) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("empty queue");
      return -1;
    }

    let front = this.head.data;

    //remoing code
    if (this.tail == this.head) {
      this.head = this.tail = null; //removing single element
    } else {
      this.head = this.head.next;
    }

    return front;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.head.data;
  }
}

let q = new Queue();
q.enqueue(5);
q.enqueue(4);
q.enqueue(3);
q.enqueue(2);
q.dequeue()
console.log(q.peek());
