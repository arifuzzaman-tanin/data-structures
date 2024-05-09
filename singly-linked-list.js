
class LinkedList {
    // Define the Node class as a private inner class
    #Node = class {
        constructor(value) {
            this.data = value; // Initialize data of the node
            this.next = null; // Initialize next pointer to null
        }
    }
    
    constructor() {
        this.head = null; // Initialize head pointer to null
    }
    
    // Append a new node with the given value to the end of the list
    append(value) {
        const newNode = new this.#Node(value); // Create a new node
        
        if (!this.head) {
            // If list is empty, make the new node the head
            this.head = newNode;
        } else {
            // Traverse the list to find the last node and append the new node
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    
    // Prepend a new node with the given value to the beginning of the list
    prepend(value) {
        const newNode = new this.#Node(value); // Create a new node
        newNode.next = this.head; // Set the next pointer of the new node to the current head
        this.head = newNode; // Update the head to the new node
    }
    
    // Insert a new node with the given value at the specified index
    insert(index, value) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            if (current.next) {
                current = current.next; // Traverse the list to find the node at the specified index
            }
        }
        
        const newNode = new this.#Node(value); // Create a new node
        newNode.next = current.next; // Set the next pointer of the new node to the next node of the current node
        current.next = newNode; // Update the next pointer of the current node to the new node
    }
    
    // Remove the node at the specified index
    remove(index) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            if (current.next) {
                current = current.next; // Traverse the list to find the node before the one to be removed
            }
        }
        current.next = current.next.next; // Skip over the node to be removed
    }
    
    // Print the values of all nodes in the list
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data); // Output the data of the current node
            current = current.next; // Move to the next node
        }
    }
    
    // Reverse the linked list
    reverse() {
        let previous = null;
        let current = this.head;
        let next = null;
        
        while (current) {
            next = current.next; // Store the next node
            current.next = previous; // Reverse the next pointer
            previous = current; // Move previous pointer one step forward
            current = next; // Move current pointer one step forward
        }
        
        this.head = previous; // Update the head pointer to the last node (which is now the first node after reversing)
    }
}

// Test the LinkedList class
const list = new LinkedList();
list.append(1);
list.append(5);
list.append(8);
list.append(2);
list.prepend(9);
list.insert(2, 99);
list.remove(2);
console.log("Linkedlist")
list.print(); // Output the values of the nodes in the reversed list
console.log("Reversed Linkedlist")
list.reverse();
list.print(); // Output the values of the nodes in the reversed list


//OUTPUT
// Linkedlist
// 9
// 1
// 5
// 8
// 2
// Reversed Linkedlist
// 2
// 8
// 5
// 1
// 9
