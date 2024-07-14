//Dobly LL

/*
in dobly LL the node contains the address of both next and prev which will points in both 
directons.



*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLl {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = null;
  }
  //push data at first
  push(data) {
    let node = new Node(data);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
      this.size++;
      return;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
      this.size++;
    }
  }

  pushLast(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  //read data constructor
  read(data) {
    let curr = this.head;
    while (curr) {
      if (curr.data == data) {
        return curr;
      }
      curr = curr.next;
    }
    return null;
  }
  //Update constructor
  update(data, newData) {
    const dataCheck = this.read(data);
    if (dataCheck) {
      dataCheck.data = newData;
    }
  }
  //delete constructor for a specific value

  delete(data) {
    let dData = this.read(data);
    if (dData) {
      this.size--;
      if (dData.prev) {
        dData.prev.next = dData.next;
      } else {
        this.head = newData.next;
      }
      if (dData.next) {
        dData.next.prev = dData.prev;
      } else {
        this.tail = node.prev;
      }
    }
  }

  //delete Constructor for first/head node
  pop() {
    if (this.head == null) {
      return -1;
    }
    if (this.size == 1) {
      let val = this.head.data;
      this.head = this.tail = null;
      this.size--;
      return val;
    }
    let val = this.head.data;
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
    return val;
  }

  //Delete constructor for end tail node
  deleteEnd() {
    if (!this.head) {
      return;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let secondtolast = this.head;

      while (secondtolast.next !== this.tail) {
        secondtolast = secondtolast.next;
      }
      secondtolast.next = null;
      this.tail.prev = null;
      this.tail = secondtolast;
    }
  }

  //constructor for printing whole li
  print() {
    let temp = this.head;
    let output = [];
    while (temp != null) {
      output.push(temp.data);
      temp = temp.next;
    }
    console.log(output.join("<-->"));
  }

  //Consutructor for checking value exist or not
  search(data) {
    let check = this.read(data) !== null; //return value in boolean
    return check;
  }

  //Reverse Constructor for doubly linkedlist
  reverse() {
    let curr = this.head;
    let prev = null;
    let next;
    while (curr != null) {
      next = curr.next;
      curr.next = prev;
      curr.prev = next;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
}

let li = new DoubleLl();
li.push(5);
li.push(7);
li.push(9);
li.push(8);
li.push(3);
li.delete(9);
li.deleteEnd();
li.pop();
li.print();
console.log(li.search(1));
