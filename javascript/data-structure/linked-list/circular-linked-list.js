// Circular Linked List


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyCircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertAtBeginning(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head;
    }
    this.size++;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head;
    } else {
      this.tail.next = newNode;
      newNode.next = this.head;
      this.tail = newNode;
    }
    this.size++;
  }

  deleteNode(data) {
    if (!this.head) return false;
    if (this.head.data === data) {
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.tail.next = this.head;
      }
      this.size--;
      return true;
    }
    let current = this.head;
    let prev = null;
    do {
      if (current.next.data === data) {
        if (current.next === this.tail) {
          this.tail = current;
        }
        current.next = current.next.next;
        this.size--;
        return true;
      }
      current = current.next;
    } while (current !== this.head);
    return false; // Node not found
  }

  traverse() {
    if (!this.head) return;
    let current = this.head;
    do {
      console.log(current.data);
      current = current.next;
    } while (current !== this.head);
  }
}

class DoublyNode {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyCircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertAtBeginning(data) {
    const newNode = new DoublyNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
    } else {
      newNode.next = this.head;
      newNode.prev = this.tail;
      this.head.prev = newNode;
      this.tail.next = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  insertAtEnd(data) {
    const newNode = new DoublyNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
    } else {
      newNode.prev = this.tail;
      newNode.next = this.head;
      this.tail.next = newNode;
      this.head.prev = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  deleteNode(data) {
    if (!this.head) return false;
    let current = this.head;
    do {
      if (current.data === data) {
        if (this.size === 1) {
          this.head = null;
          this.tail = null;
        } else {
          if (current === this.head) {
            this.head = current.next;
          }
          if (current === this.tail) {
            this.tail = current.prev;
          }
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        this.size--;
        return true;
      }
      current = current.next;
    } while (current !== this.head);
    return false; // Node not found
  }

  traverseForward() {
    if (!this.head) return;
    let current = this.head;
    do {
      console.log(current.data);
      current = current.next;
    } while (current !== this.head);
  }

  traverseBackward() {
    if (!this.head) return;
    let current = this.tail;
    do {
      console.log(current.data);
      current = current.prev;
    } while (current !== this.tail);
  }
}

