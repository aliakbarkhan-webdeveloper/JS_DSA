// //stack in js by using arrays with methods

// class Stack {
// constructor(){
//     this.array=[]
// }

// //Push Constructor

// push(data){
//     this.array.push(data)
// }

// //pop
// pop(){
//   return  this.array.pop()
// }

// //peek
// peek(){
// return this.array[this.array.length-1]// it will show last element  array[ last index]
// }

// //isEmpty
// isEmpty(){
//     this.array.length===0;   // return value in boolean after comparison
// }
// }

// let stack=new Stack();
// stack.push(5);
// stack.push('Ali')
// console.log(stack.peek());

//Implementing stack without using js built-in methods

class Stack {
  constructor() {
    this.array = [];
  }

  //push method
  push(data){
 this.array[this.array.length]=data

  }


  //pop
  pop(){
    this.array.length--;
   return  this.array[this.array.length-1];
    
  }

  //peek
  peek(){
    return this.array[this.array.length-1]
  }

  //isEmpty
  isEmpty(){
return this.array.length===0;

  }
}

let stack=new Stack();
stack.push("ali")
stack.push("akbar")
stack.push("khan")
stack.push("kamboh")
stack.pop()
stack.pop()
stack.pop()
console.log(stack);
console.log(stack.isEmpty());