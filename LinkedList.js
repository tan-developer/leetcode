class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // insertFirst
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // insertLast
  insertLast(data) {
    if (this.head === null) {
      return (this.head = new Node(data));
    }

    if (this.head !== null) {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = new Node(data);
    }

    this.size++;
  }

  insertIndex(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      return this.insertFirst(data);
    }

    const newNode = new Node(data);
    let current = this.head,
      previous,
      count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    previous.next = newNode;
    newNode.next = current;

    this.size++;
  }

  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertLast(500);
ll.insertFirst(1500);
ll.insertIndex(200 , 1)

ll.printListData();
