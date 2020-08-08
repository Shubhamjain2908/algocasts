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

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return null;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let currentNode = this.head;
        while (currentNode.next) {
            previous = currentNode;
            currentNode = currentNode.next;
        }
        previous.next = null;
    }

    insertLast(data) {
        const last = this.getLast();
        const newNode = new Node(data);
        if (last) {
            // There are some existing nodes in our chain
            last.next = newNode;
        } else {
            // The chain is empty
            this.head = newNode;
        }
    }

    getAt(index) {
        if (!this.head) {
            return null;
        }

        let counter = 0;
        let currentNode = this.head;
        while (currentNode) {
            if (counter === index) {
                return currentNode;
            }
            counter++;
            currentNode = currentNode.next;
        }
        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return null;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index - 1) || this.getLast();
        const newNode = new Node(data, previous.next);
        previous.next = newNode;
    }
}

module.exports = { Node, LinkedList };
