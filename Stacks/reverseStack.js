class Stack {
  constructor() {
    this.array = [];
  }

  push(data) {
    this.array[this.array.length] = data;
  }
}
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.array);
function reverseStack(s) {
  if (s.array.length == 0) {
    return;
  }
  let popped = s.array.pop();
  reverseStack(s);
  s.array.unshift(popped);
}

reverseStack(stack);
console.log(stack.array);
