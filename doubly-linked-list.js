

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = prevNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this
    }

    pop() {
        if (this.head == null) return undefined;
        let poppedNode = this.tail;

        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
        }

        poppedNode.prev = null;

        this.length--;

        return poppedNode
    }

    shift() {

        if (this.length == 0) return undefined;

        let curHead = this.head;

        if (this.length == 1) {

            this.head = null;
            this.tail = null;

        } else {

            this.head = curHead.next;
            this.head.prev = null;
            curHead.next = null;

        }

        this.length--;

        return curHead
    }

    unshift(val) {

        let newNode = new Node(val);

        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {

        if (index < 0 || index >= this.length) return null;
        if (index <= this.length / 2) {

            let count = 0;
            let current = this.head;
    
            while (count != index) {
                current = current.next;
                count++;
            }

        } else {

            let count = this.length - 1
            let current = this.tail;
            while (count != index) {
                current = current.prev;
                count--;
            }
        }

        return current;
    }

    set(index, val) {
        let node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        let nodeToInsert = new Node(val);
        if (index < 0 || index > this.length) return false;
        if (index == 0) {
            this.unshift(val);
        } else if (index == this.length) {
            return this.push(val);
        } else {
            let nodeToReplace = this.get(index);
            let prevNode = nodeToReplace.prev;
            prevNode.next = nodeToInsert;
            nodeToInsert.prev = prevNode;
            nodeToInsert.next = nodeToReplace;
            nodeToReplace.prev = nodeToInsert; 
        }
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prve = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }

}