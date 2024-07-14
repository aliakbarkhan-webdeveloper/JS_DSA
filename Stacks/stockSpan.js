// span means no of days in which the stock price is less or equal to todays price
//formula span=ith day price -index of previous high/previos equal

//Stack

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

function stockSpan(stock, span) {
  const stack = new Stack();
  //1st
  span[0] = 1;
  stack.push(0);

  for (let i = 1; i < stock.length; i++) {
    let currentPrice = stock[i];
    while (!stack.isEmpty() && currentPrice > stock[stack.peek()]) {
      stack.pop();
    }
    if (stack.isEmpty()) {
      //if we have last value
      span[i] = i + 1;
    } else {
      //when we have any prev value smaller or equal
      let prevHigh = stack.peek();
      span[i] = i - prevHigh;
    }
    //pushing current index in stack
    stack.push(i);
  }
}

let stock = [100, 80, 60, 70, 60, 85, 100];
let span = [];
stockSpan(stock, span);

for (let index = 0; index < span.length; index++) {
  console.log(span[index]);
}
