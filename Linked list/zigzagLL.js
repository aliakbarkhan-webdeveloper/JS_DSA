// arrange linked list in such a way that 1st element of linked list attach eith last element
//of that LL, 2nd with 2nd last and so on
//e.g.   let LL=1 -> 2-> 3-> 4-> 5
//          zigzag= 1 -> 5 -> 2 -> 4 -> 3

//Steps
/*
 step 1: find Mid by using slow fast approach
 step 2: reverse 2nd half
 step 3: alternate merging
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedlist {
  constructor() {
    this.head = null;
  }

  add(data) {
    let node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
  }

  zigzag() {
    //find mid
    let slow = this.head;
    let fast = this.head;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    let mid = slow;

    //reverse second half
    let curr = mid.next;
    mid.next = null;
    let prev = null;
    let next;

    while (curr != null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    let left = this.head;
    let right = prev;
    let nextL;
    let nextR;
    //Step 3: alternate merge to perform zigzag
    while (left != null && right != null) {
      //4 steps to perform zigzag and 2 steps for updation
      nextL = left.next;
      left.next = right; //after 1st element it will point the 1st element of reversed LL which is last element of LL
      nextR = right.next;
      right.next = nextL;

      //Updation
      left = nextL;
      right = nextR;
    }
  }
}

let ll = new linkedlist();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.zigzag()
console.log(ll);
