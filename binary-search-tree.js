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

    BFS() {
        let data = [];
        let queue = [];
        let node = this.root;
        queue.push(node);
        while(queue.length != 0) {
            node = queue.shift();
            data.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        return data;
    }

    DFSPreOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            data.push(node.val);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(current)
        return data;
    }

    DFSPostOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            data.push(node.val);
        }
        traverse(current)
        return data;
    }

    DFSInOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            data.push(node.val);
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(current)
        return data;
    }

}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(8);
