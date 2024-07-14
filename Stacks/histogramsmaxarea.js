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
      return null;
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

function histoarea(arr) {
  let stack = new Stack();
  let maxArea = 0;
  //arrays for left minimum value and right minimum value
  let nsl = [];
  let nsr = [];

  //code for nsl=> next small in right
  for (let i = arr.length - 1; i >= 0; i--) {
    while (!stack.isEmpty() && arr[stack.peek()] >= arr[i]) {
      stack.pop();
    }
    if (stack.isEmpty()) {
      nsr[i] = arr.length;
    } else {
      nsr[i] = stack.peek();
    }
    stack.push(i);
  }
  //while in left side checking we will make stack empty by initialie new stack
  stack = new Stack();
  //code for nsl=> next small in left
  for (let i = 0; i < arr.length; i++) {
    while (!stack.isEmpty() && arr[stack.peek()] >= arr[i]) {
      stack.pop();
    }
    if (stack.isEmpty()) {
      nsl[i] = -1;
    } else {
      nsl[i] = stack.peek();
    }
    stack.push(i);
  }

  //current area

  //width for Area = rigth small-left small-1=> nsr[i]-nsl[i]-1
  //heigth=value of array
  //area=length*width
  for (let i = 0; i < arr.length; i++) {
    let heigth = arr[i];
    let width = nsr[i] - nsl[i] - 1;
    let currArea = heigth * width;

    maxArea = Math.max(currArea, maxArea);
  }

  console.log(`The maximum area is: ${maxArea}`);
}

let arr=[2,1,5,6,2,3]
histoarea(arr)