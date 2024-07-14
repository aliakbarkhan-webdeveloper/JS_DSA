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

function validParanthesis(str) {
  let stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    let ch=str.charAt(i);
    if (ch=="("||ch=="["||ch=="{") {
      stack.push(ch)
    }else{
      //we will check closing barackets

      //checking stack is empty or not so we can compare opening with closing
      if (stack.isEmpty()) {
        return false;
      }

      //now comparing opening and closing barackets conditionally
      if (stack.peek()=="(" && ch==")" || stack.peek()=="{" && ch=="}" ||stack.peek()=="[" && ch=="]") {
        stack.pop()
      }else{
        return false
      }
    }
    
  }
  if (stack.isEmpty()) {
    return true
  }else{
    return false
  }
}

let str="({[}])";

let check=validParanthesis(str);
console.log(check);