
//Node has piece of data
// and nxt node

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// var first = new Node("hi")
// first.next = new Node("hi there");
// first.next.next = new Node("how");
// first.next.next.next = new Node('you');

class SinglyLinkedList {

    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    //add item to tail
    push(val) {
        let newNode = new Node(val);

        //no head node;
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        // head present
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // traverse linked list
    traverse() {
        let current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;
        }
    }

    //remove item from tail
    pop() {
        if (!this.head) {
            return undefined;
        }
        //loop through entire list until tail
        let laggingNode = this.head;
        let current = this.head;
        while(current.next) {
            laggingNode = current;
            current = current.next;
        }
        this.tail = laggingNode;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;

    }

}

let list = new SinglyLinkedList()
list.push("hello");
list.push("goodbye")