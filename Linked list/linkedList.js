//Node            O(1)
class Node {
  //it will be used in linkedlist class for node  creation
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = null;
  }

  //construtor for data creation
  add(data) {
    const node = new Node(data);
    if (!this.head) {
      // if 0 node then create a node
      this.head = node;
      this.size++;
    } else {
      let current = this.head;
      while (current.next) {
        // next is coiming from Node class constructor
        // putting reference of next node
        current = current.next;
      }
      current.next = node;
      this.size++;
    }
  }

  // Constructor for Read data on a specific index
  read(i) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === i) {
        this.size++;
        return current.data;
      }
      count++;
      current = current.next;
    }

    return "";
  }

  // Constructor for searching data exist or not
  search(data) {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      if (current.data === data) {
        return count;
      }
      count++;
      current = current.next;
    }
    return -1;
  }

  //Constructor for insertion of data

  insert(i, data) {
    const newNode = new Node(data);
    const temp = this.head; //in temp we temparay storing the current head data.
    const count = 0;
    while (i < count - 1) {
      temp = temp.next; // storing next node address into temp
      count++;
    }
    //swapping address
    newNode.next = temp.next;
    temp.next = newNode;
    this.size++;
  }

  //Constructor for update data
  update(index, data) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        current.data = data; //Updating data by matching index with count
        return;
      }
      
      current = current.next;
    }
  }

  //Constructor for nth Node Deletion
  delete(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let count = 0;
    while (current) {
      if (index - 1 === count) {
        //now we will store reference of next node into its previous node by skipping current node
        current.next = current.next.next;
        this.size--;
        return;
      }
      count++;
      current = current.next;
    }
  }

  //Print constructor
  print(){
    let temp=this.head;
    let output=[];
    while (temp!=null) {
        output.push(temp.data)
        temp=temp.next;
    }
    console.log(output.join("<-->"));
    }
  //Code for reversing a linked list

  reverse() {
    let prev = null;
    let current = (this.tail = this.head);
    let next;

    while (current != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  //Code for checking a linked list is palidrom or not

  //code for split the list in half
  split(head) {
    let slow = head;
    let fast = head;

    //while loop for ruuning slow and fast and take slow as mid when loop stops
    while (fast != null && fast.next != null) {
      slow = slow.next; //jumping by 1 step
      fast = fast.next.next; // jumping by 2 steps
    }
    return slow;
  }

  palindrome() {
    //checking condition for we contain single head or no head, if 1 head return true

    if (this.head == null || this.head.next == null) {
      return true;
    }

    //Step 1: for finding mid
    let midNode = this.split(this.head);

    //Step 2: Reversing the 2nd half
    let prev = null;
    let curr = midNode;
    let next;
    //while loop for  reversing the half
    while (curr != null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    let right = prev;
    let left = this.head;

    //step 3   check elements of 1st half ==right half elements?

    while (right != null) {
      //if right and left list's data is not equal then return false
      if (right.data != left.data) {
        return false;
      }
      left = left.next;
      right = right.next;
    }
    return true;
  }

  //Constructor for finding linked list is cyclic or not
  isCyclic() {
    let slow = this.head;
    let fast = this.head;

    while (fast != null && fast.next != null) {
      slow = slow.next; //1 move
      fast = fast.next.next; //2 moves
      if (slow === fast) {
        return true;
      } else if (slow != fast) {
        return false;
      }
    }
  }

  //Constructor for removing cycle
  removeCycle() {
    //Step 1: Detect cycle
    let slow = this.head;
    let fast = this.head;
    let cycle = false;

    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      if (fast == slow) {
        cycle = true;
        break;
      }
    }
    if (cycle == false) {
      return;
    }

    //step 2: find meeting Point

    slow = this.head;
    let prev = null;
    while (slow != fast) {
      //prev node will be the last node
      prev = fast; //storing last node into prev variable
      slow = slow.next; //storing slow reference into next node and move by one step
      fast = fast.next; //storing slow reference into next node and move by one step
    }
    //step 3: Remove Cycle
    prev.next = null; //now its next reference will be the null instad of any middle node
  }


  //Merge Sort

  mergeSort(node){
//BaseCase
if (head==null && this.head.next==null) {
  return head
}



//finding Mid by using helper function
let mid=this.getmid();

//Step 2: dividing into left and right mid
let rightHead=mid.next;  //creating right node head
mid.next=null;           //creating left node's next into null
let left=this.mergeSort(head);
let right= this.mergeSort(rightHead);

//merge
return this.merge(left,right)



  }
}

//Using Node
const list = new Linkedlist();
list.add(1);
list.add(2);
list.add(2);
list.add(1);
console.log(list);
// list.update(2, "Khan");
// list.update(3, "Kamboh");
// list.insert(1, "khano");

// console.log(
//   list.read(0) + " " + list.read(1) + " " + list.read(2) + " " + list.read(3)
// );
// console.log(list.search("Kamboh"));
// list.reverse();
// console.log(list);
// console.log(list.palindrome());
let a = list.isCyclic();
console.log(a);


