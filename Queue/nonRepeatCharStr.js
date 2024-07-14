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

//   function for checking non-repeating element in a string

function nonRepeatstr(str) {
  let charCount = {};
  let qu = new Queue();

  //checking frequencies of char
  for (let char of str) {
    qu.enqueue(char);
    charCount[char] = (charCount[char] || 0) + 1;
  }

  //dequeue to finf non-repeat char
  while (!qu.isEmpty()) {
    let char = qu.dequeue();
    if (charCount[char] === 1) {
      return char;
    } else {
      return -1;
    }
  }
}

let a = nonRepeatstr("ffaqpnaiqpni");
console.log(a);
