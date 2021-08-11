
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

    //shift -> pop the head!
    shift() {
        if (!this.head) return undefined;
        let curHead = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return curHead.val
    }

    //unfshit() -> add to beginning
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this
    }

    //get takes index or position and gives 
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let counter = 0
        let current = this.head;
        while(counter != index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    //set an item
    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index == this.length) return !!this.push(val);
        if (index == 0) return !!this.unshift(val);
        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    //remove
    remove(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let previousNode = this.get(index -1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;

        return removed
    }

}

let list = new SinglyLinkedList()
list.push("hello");
list.push("goodbye")