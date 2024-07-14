//Queue with JS Methods

/*class Queue {
  constructor() {
    this.array = [];
    this.size = null;
    this.rear = this.array[this.array.length - 1];
  }
  isEmpty() {
    if (this.array.length == 0) {
      return true;
    }
    return this.rear === null;
  }
  add(data) {
    this.array.push(data);
    this.size++;
  }
  remove() {
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

let q = new Queue();

q.add(5);

console.log(q.isEmpty());
*/

//Queue without Js methods
class Queue {
  constructor() {
    this.array = [];
    this.size = null;
    this.rear = 0;
  }

  isEmpty() {
    if (this.array.length == 0) {
      return true;
    }
    return this.rear == null;
  }

  enqueue(data) {
    this.size++;
    // if (this.array.length == 0) {
    //   this.array[this.rear] = data;
    //   this.rear++
    //   return;
    // }
    this.array[this.rear] = data;
    this.rear++;
  }

  dequeue() {
    this.size--
    if (this.isEmpty()) {
      return null;
    }
   let array=this.array;
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i + 1];
      if (array[array.length - 1] == array[array.length - 2]) {
        array.length--;
        this.rear--;
      }
    }
  }

  traverse(){
    if (this.isEmpty()) {
      return ["null"]
    }
    return this.array;
  }

  peek(){
    if (this.isEmpty()) {
      return null
    }
    return this.array[0]
  }
}

let q = new Queue();
q.enqueue(4);
q.enqueue(66);
q.enqueue(17);
q.enqueue(8);
q.enqueue(0);
q.dequeue()

console.log(q);