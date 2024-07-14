class StackA {
  constructor() {
    this.array = [];
  }

  push(data) {
    this.array[this.array.length]=data;
  }

  pop() {
    if(this.array.length==0){
        return null;
    }
    let arr=this.array[this.array.length - 1];
    this.array.length=this.array.length-1;
    return arr;
  }
  isEmpty() {
    return this.array.length == 0;
  }
  pushbottom(s, data) {
    // deleting all element from stack and storing it in variable recursively so when we meet
    //base case the we can repush data
    if (s.isEmpty()) {
      s.push(data);
      return;
    }
    let top = s.pop();
    this.pushbottom(s, data);
  
    //now pushing values of top into old stack again because we have pushed value in bottom
    //in base case
    s.push(top);
  }
}



let stack = new StackA();
stack.push(5);
stack.push(4);

stack.pushbottom(stack, 10);
console.log(stack.array);


console.log(stack);