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
    if (this.array.length == 0) {
      return;
    }
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

function duplicateParanthesis(str) {
  //O(n)
  let stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);

    //checking closing case
    if (ch == ")") {
      let count = 0;
      while (stack.pop() != "(") {
        count++;
      }
      if (count < 1) {
        return true; //duplicate
      }
    } else {
      //code for opening brackets
      stack.push(ch);
    }
  }
  return false;
}

console.log(duplicateParanthesis("((b+a))"));
