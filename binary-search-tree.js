class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree{

    constructor() {
        this.root = null;
    }

    // my solution
    // insert(val) {
    //     let nodeToInsert = new Node(val);
    //     if (this.root == null) {
    //         this.root = nodeToInsert;
    //         return this.root
    //     } else {
    //         let currentNode = this.root;
    //         while(currentNode) {
    //             //is it greater 
    //             if (currentNode.val < nodeToInsert.val) {
    //                 if (currentNode.right) {
    //                     currentNode = currentNode.right
    //                 } else {
    //                     currentNode.right = nodeToInsert;
    //                     return nodeToInsert;
    //                 }
    //             }
    //             // is it less than
    //             if (currentNode.val > nodeToInsert.val) {
    //                 if (currentNode.left) {
    //                     currentNode = currentNode.left
    //                 } else {
    //                     currentNode.left = nodeToInsert;
    //                     return nodeToInsert;
    //                 }
    //             }
    //         }
    //         return "not ran"
    //     }
    // }

    // instructor solution
    insert(value) {
        let newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true) {
                if (value == current.val) return undefined;
                if(value < current.val) {
                    if (current.left == null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.val) {
                    if (current.right == null) {
                        this.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    //
    find(value) {
        if (this.root == null) return false;
        let current = this.root;
        let found = false;

        while (current && !found) {
            if(value < current.val) {
                current = current.left;
            } else if (value > current.val) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(8);
