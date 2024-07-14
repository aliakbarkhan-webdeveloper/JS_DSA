class Stack {
  constructor() {
    this.array = [];
  }

  push(data) {
    if (this.array.length == 0) {
      this.array[0] = data;
      return;
    }
    this.array[this.array.length] = data;
  }
  pop() {
    if (this.array.length == 0) {
      return null;
    }
    let arr = this.array[this.array.length - 1];
    this.array.length--;
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

class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  isEmpty() {
    return this.s1.isEmpty();
  }

  //O(n)
  enqueue(data) {
    let s1 = this.s1;
    let s2 = this.s2;
    // Step 1:untill s1 is not empty pop all elements from s1 and push all elements in the s2

    while (!s1.isEmpty()) {
      s2.push(s1.pop());
    }

    //step 2: push data in s1
    s1.push(data);

    //Step 3: pop elements from s2 and add them to s1
    while (!s2.isEmpty()) {
      s1.push(s2.pop());
    }
  }
  //O(1)
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.s1.pop();
  }

  //O(1)
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.s1.peek();
  }
}

const q = new Queue();

q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);

console.log(q.peek());
