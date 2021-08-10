
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
    
}

let list = new SinglyLinkedList()
list.push("hello");
list.push("goodbye")