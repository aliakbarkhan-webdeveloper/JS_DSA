class Circular {
  constructor(n) {
    this.array = [];
    this.front = -1;
    this.rear = -1;
    this.size = n;
  }

  isEmpty() {
    return this.rear == -1 && this.front == -1;
  }

  //checking queue is full or have empty space
  isFull() {
    return (this.rear + 1) % this.size == this.front;
  }

  //adding element in queue
  enqueue(data) {
    if (this.isFull()) {
      console.log("queue is full");
      return;
    }
    if (this.front == -1) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.size;
    this.array[this.rear] = data;
  }

  //removing element from queue
  dequeue() {
    if (this.isEmpty()) {
      console.log("queue is empty");
      return -1;
    }

    let result = this.array[this.front];

    //when we are going to remove last element
    if (this.rear == this.front) {
      this.rear = this.front = -1;
    } else {
      this.array[this.front] = null;
      this.front = (this.front + 1) % this.size;
    }

    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.array[this.front];
  }
}

let cq = new Circular(5);
cq.enqueue(5);
cq.enqueue(4);
cq.enqueue(3);
cq.enqueue(7);
cq.enqueue(6);
cq.dequeue();
console.log(cq);
console.log(cq.peek());
