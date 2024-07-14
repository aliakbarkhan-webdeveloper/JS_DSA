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


function interleave(queue) {
    let halfQueue=new Queue();
    let size=queue.size;
    
    for (let i = 0; i < size/2; i++) {
  halfQueue.enqueue(queue.dequeue())
}
while (!halfQueue.isEmpty()) {
  queue.enqueue(halfQueue.dequeue());
  queue.enqueue(q.dequeue())

)
}
}
let q=new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
q.enqueue(6)
q.enqueue(7)
q.enqueue(8)
q.enqueue(9)
q.enqueue(10)
interleave(q)