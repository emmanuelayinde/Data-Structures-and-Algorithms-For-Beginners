// Singly Linked List

// Node class for Singly Linked List
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Singly Linked List class
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at the beginning
  insertAtBeginning(data) {
    const newNode = new Node(data); // Create a new node with the given data
    newNode.next = this.head; // Set the new node's next pointer to the current head
    this.head = newNode; // Update the head to be the new node
  }

  // Insert at the end
  insertAtEnd(data) {
    const newNode = new Node(data); // Create a new node with the given data

    // check if the list does not have a head i.e the list is empty
    if (!this.head) {
      this.head = newNode; // If the list is empty, set the new node as the head
      return;
    }
    let current = this.head; // Start at the head of the list
    while (current.next) {
      current = current.next; // Move to the next node in the list
    }
    current.next = newNode; // Set the next pointer of the last node to the new node
  }

  // Delete a node
  deleteNode(data) {
    if (!this.head) return; // If the list is empty, do nothing
    if (this.head.data === data) {
      this.head = this.head.next; // If the node to delete is the head, update the head to the next node
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next; // If the node to delete is found, update the next pointer to skip it
        return;
      }
      current = current.next;
    }
  }

  // Search node
  search(data) {
    let current = this.head; // Start at the head of the list
    while (current) {
      if (current.data === data) {
        // If the data is found, return true
        return true;
      }
      current = current.next; // Move to the next node
    }
    return false;
  }

  // Traverse the list
  traverse() {
    let current = this.head; // Start at the head of the list
    while (current) {
      console.log(current.data); // Print the data of the current node
      current = current.next; // Move to the next node
    }
  }
}

// End of class
