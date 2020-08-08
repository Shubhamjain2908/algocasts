// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let currentNode = this.head;
        let length = 0;
        while (currentNode) {
            length++;
            currentNode = currentNode.next;
        }
        return length;
    }
}

module.exports = { Node, LinkedList };
