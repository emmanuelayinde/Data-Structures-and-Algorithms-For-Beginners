// Doubly Linked List

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertAtBeginning(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  insertAtPosition(data, position) {
    if (position < 0 || position > this.length) {
      return false; // Invalid position
    }
    if (position === 0) {
      this.insertAtBeginning(data);
      return true;
    }
    if (position === this.length) {
      this.insertAtEnd(data);
      return true;
    }
    const newNode = new Node(data);
    let current = this.head;
    for (let i = 0; i < position - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    newNode.prev = current;
    current.next.prev = newNode;
    current.next = newNode;
    this.length++;
    return true;
  }

  deleteNode(data) {
    if (!this.head) return false;
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (current === this.head) {
          this.head = current.next;
          this.head.prev = null;
        } else if (current === this.tail) {
          this.tail = current.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        this.length--;
        return true;
      }
      current = current.next;
    }
    return false; // Node not found
  }

  traverseForward() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  traverseBackward() {
    let current = this.tail;
    while (current) {
      console.log(current.data);
      current = current.prev;
    }
  }

  search(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1; // Node not found
  }
}

// Usage Example
const list = new DoublyLinkedList();

list.insertAtEnd(1);
list.insertAtEnd(2);
list.insertAtEnd(3);
list.insertAtBeginning(0);
list.insertAtPosition(1.5, 2);

console.log("Forward traversal:");
list.traverseForward();

console.log("Backward traversal:");
list.traverseBackward();

console.log("Search for 2:", list.search(2));

list.deleteNode(1.5);

console.log("After deletion:");
list.traverseForward();
