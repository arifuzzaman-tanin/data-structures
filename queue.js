class Queue {
    #Node = class {
        constructor(value) {
            this.data = value;
            this.next = null;
            this.previous = null;
        }
    }
    
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    push(value) {
        const newNode = new this.#Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    
    pop() {
        if (!this.head) {
            console.error("Out of bounds");
            return;
        }
        
        let current = this.head;
        
        if (current.next) {
            this.head = current.next;
            current.previous = null;
        } else {
            this.head = null;
            this.tail = null;
        }
    }
    
    printForward() {
        let current = this.head;
        
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const queue = new Queue();
queue.push(2);
queue.push(5);
queue.push(7);
queue.push(1);
queue.push(44);
queue.push(11);
queue.pop();
queue.pop();

queue.printForward();

// OUTPUT
// 7
// 1
// 44
// 11

