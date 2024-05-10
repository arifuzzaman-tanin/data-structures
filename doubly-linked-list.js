class LinkedList {
    // Inner class to represent the nodes of the linked list
    #Node = class {
        constructor(value) {
            this.data = value; // Data stored in the node
            this.next = null; // Reference to the next node
            this.previous = null; // Reference to the previous node
        }
    }

    constructor() {
        this.head = null; // Points to the first node in the list
        this.tail = null; // Points to the last node in the list
    }

    // Method to add a new node at the end of the list
    append(value) {
        const newNode = new this.#Node(value); // Create a new node with the given value
        if (!this.head) {
            // If the list is empty, set the new node as both head and tail
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If the list is not empty, append the new node after the tail
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Method to add a new node at the beginning of the list
    prepend(value) {
        const newNode = new this.#Node(value); // Create a new node with the given value
        if (!this.head) {
            // If the list is empty, set the new node as both head and tail
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If the list is not empty, prepend the new node before the head
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }
    }

    // Method to insert a new node at a specific index
    insert(index, value) {
        if (index < 0) {
            console.error("Index cannot be negative.");
            return;
        }
        if (index === 0) {
            // If index is 0, insert at the beginning
            this.prepend(value);
            return;
        }
        
        const newNode = new this.#Node(value); // Create a new node with the given value
        let current = this.head;
        for (let i = 0; i < index; i++) {
            if (current.next != null) {
                current = current.next;
            }
        }

        if (current === null) {
            console.error("Index out of range.");
            return;
        }

        // Insert the new node before the current node
        newNode.previous = current.previous;
        newNode.next = current;

        if (current.previous !== null) {
            current.previous.next = newNode;
        } else {
            // If inserting at the beginning, update the head
            this.head = newNode;
        }

        current.previous = newNode;
    }

    // Method to remove a node at a specific index
    remove(index) {
        let current = this.head;

        for (let i = 0; i <= index; i++) {
            if (current.next != null) {
                current = current.next;
            }
        }

        // Remove the current node from the list
        current.previous.next = current.next;
        current.next.previous = current.previous;
    }

    // Method to print the list from head to tail
    printForward() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Method to print the list from tail to head
    printBackward() {
        let current = this.tail;
        while (current) {
            console.log(current.data);
            current = current.previous;
        }
    }
}

// Example usage
const list = new LinkedList();
list.append(1);
list.append(5);
list.append(8);
list.append(2);
list.prepend(100);
list.insert(3, 200);
list.remove(2);
console.log("Prints the list from head to tail");
list.printForward(); // Prints the list from head to tail
console.log("Prints the list from tail to head");
list.printBackward(); // Prints the list from tail to head


// OUTPUT
// Prints the list from head to tail
// 100
// 1
// 5
// 8
// 2
// Prints the list from tail to head
// 2
// 8
// 5
// 1
// 100
