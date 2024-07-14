//in circular ll, last node will point to head node.
//if we convert silgular LL to circular then we simple point last node's next to the head

//if we want to convert double ll then we can point next of last node to the head, head's prev
// to the last node.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    // this.prev = null;
  }
}

class CircularLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = null;
  }

  //add first

  addfirst(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      node.next = this.head; // for circular relation
    } else {
      node.next = this.head; //making circular relation
      this.head = node; //adding in 1st and making it head
      this.tail.next = this.head;
    }
    this.size++;
  }

  //add in last
  push(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      node.next = this.head;
    } else {
      //creating circular link
      node.next = this.head;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  traverse() {
    let curr = this.head;
    let arr = [];
    while (curr) {
      arr.push(curr.data);
      curr = curr.next;
      if (curr === this.head) {
        // if circular end start become equal it will break loop
        break;
      }
    }
    let circularl = arr.join("-->");
    console.log(circularl);
  }

  //Remove last
  removelast() {
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let last = this.tail;
      let secondtolast = this.head;
      while (secondtolast.next !== this.tail) {
        secondtolast = secondtolast.next;
      }
      secondtolast.next = this.head;
      this.tail = secondtolast;
      last.next = null;
    }
    this.size--;
  }

  //remove 1st node
  removefirst() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = this.head.next;
      this.head.next = null;
      this.head = newHead;
      this.tail.next = this.head;
    }
    this.size--;
  }
  //Reverse Constructor for doubly linkedlist
  reverse() {
    let curr = this.head;
    let prev = null;
    let next = null;

    do {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    } while (curr !== this.head);
    this.head = prev;
    this.tail = curr;
  }
  //Update constructor
  update(data, index) {
    let curr = this.head;
    let count = 0;

    do {
      if (count === index) {
        curr.data = data;
        return;
      }
      curr = curr.next;
      count++;
    } while (curr !== this.head);
  }

  //see size
  Size() {
    console.log(this.size);
  }
}

let li = new CircularLL();
li.push(5);
li.push(4);
li.push(3);
li.push(2);
li.push(1);
li.addfirst(0);
li.traverse();
li.Size();
