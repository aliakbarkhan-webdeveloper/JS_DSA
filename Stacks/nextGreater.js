class Stack {
  constructor() {
    this.array = [];
  }

  //push method
  push(data) {
    this.array[this.array.length] = data;
  }

  //pop
  pop() {
    this.array.length--;
    return this.array[this.array.length - 1];
  }

  //peek
  peek() {
    return this.array[this.array.length - 1];
  }

  //isEmpty
  isEmpty() {
    return this.array.length === 0;
  }
}

function nextgreater(arr, greater) {
  let stack = new Stack();

  for (let i = arr.length - 1; i >= 0; i--) {
    while (!stack.isEmpty() && arr[stack.peek()] <= arr[i]) {
      stack.pop();
    }
    if (stack.isEmpty()) {
      greater[i] = -1;
    } else {
      greater[i] = arr[stack.peek()];
    }

    stack.push(i);
  }
}

let arr = [4, 9, 1, 5, 0, 1];
let next = [];
let greatValue = nextgreater(arr, next);

console.log(next);
