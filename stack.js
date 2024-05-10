class Stack {
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
        
        let current = this.tail;
        
        if (current.previous) {
            current.previous.next = null;
            this.tail = current.previous;
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

const stack = new Stack();
stack.push(2);
stack.push(5);
stack.push(7);
stack.push(1);
stack.push(44);
stack.push(11);
stack.pop();
stack.pop();

stack.printForward();

// OUTPUT
// 2
// 5
// 7
// 1
