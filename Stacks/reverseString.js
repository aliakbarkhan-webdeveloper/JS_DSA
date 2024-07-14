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

function reverseString(str) {
  let stack = new Stack();
  for (let i = 0; i <= str.length; i++) {
    stack.push(str[i]);
  }
  let reversedStr = "";
  while (!stack.isEmpty()) {
    let popped = stack.pop();
    if (popped != null) {
      reversedStr += popped;
    }
  }
  console.log(reversedStr);
}

let str = "khano";
reverseString(str);
// console.log(reversedStr);
