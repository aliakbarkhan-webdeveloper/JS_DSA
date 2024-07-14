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
      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
  }

  mergeSort() {
    this.head = this.mergeSortList(this.head);
  }

  mergeSortList(head) {
    //condition to check if we have single or 0 head
    if (!head || !head.next) {
      return head;
    }
    //calling function to get mid of likedlist
    const mid = this.getMid(head);
    let righthead=mid.next;
    mid.next = null;
    //using recursion to divide untill we get single element
    const left = this.mergeSortList(head);

    //for right side out linkedlist will start from next of midlle
    const right = this.mergeSortList(righthead);
   

    //passing left and righ to sort and merge linkedlist
    return this.merge(left, right);
  }

  //constructor to get middle by using slow and fast approach, slow will be our mid

  getMid(head) {
    let slow = head;
    let fast = head;
    while (fast.next === null && fast.next.next === null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  //Now we will merge all elements by sorting them conditionally

  merge(left, right) {
    //temporary creating a node
    let dummy = new Node(0);
    let curr = dummy;
    while (left && right) {
      if (left.data < right.data) {
        curr.next = left;
        left = left.next;
      } else {
        curr.next = right;
        right = right.next;
      }
      curr = curr.next;
    }
    curr.next = left || right;
    return dummy.next;
  }
}

let ls = new linkedlist();
ls.add(5);
ls.add(7);
ls.add(8);
ls.add(2);
ls.add(4);
ls.add(6);
ls.mergeSort();
console.log(ls.head);
