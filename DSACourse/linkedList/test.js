class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DLL {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
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

    shift() {
        if (this.length === 0) return null;
        let foundNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = foundNode.next;
            this.head.prev = null;
            foundNode.next = null;
        }
        this.length--;
        return foundNode;
    }

    set(index, val) {
        if (this.length === 0 || index < 0 || index > this.length) return false;
        // if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);
        let currNode = this.get(index);
        currNode.val = val;
        return !!currNode;
    }

    remove(index) {
        if (this.length === 0 || index < 0 || index >= this.length) return undefined;
        let selectedNode = this.get(index);
        selectedNode.prev.next = selectedNode.next;
        selectedNode.next.prev = selectedNode.prev;
        selectedNode.next = null;
        selectedNode.prev = null;
        this.length--;
        return selectedNode;
    }

    pop() {
        if (this.length === 0) return undefined;
        let selectedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = selectedNode.prev;
            selectedNode.prev = null;
            this.tail.next = null;
        }
        this.length--;
        return selectedNode;
    }

    get(index) {
        let currNode;
        if (this.length === 0) return undefined;
        if (index < 0 || index >= this.length) return null;
        if (index <= this.length / 2) {
            let count = 0;
            currNode = this.head;
            while (count !== index) {
                currNode = currNode.next;
                count++;
            }
        } else {
            let count = this.length - 1;
            currNode = this.tail;
            while (count !== index) {
                currNode = currNode.prev;
                count--;
            }
        }
        return currNode;
    }

    insert(index, val) {
        if (this.length === 0 || index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);
        let prevNode = this.get(index - 1);
        let newNode = new Node(val);
        newNode.next = prevNode.next;
        newNode.prev = prevNode;
        prevNode.next = newNode;
        newNode.next.prev = newNode;
        this.length++;
        return true;
    }

    reverse() {
        if (this.length === 0) return null;
        if (this.length === 1) return this;
        let curr = this.head;
        let ahead = curr.next;
        let back = curr.prev;
        this.head = this.tail;
        this.tail = curr;
        let count = 0
        while (count < this.length) {
            curr.prev = ahead;
            curr.next = back;
            if (ahead === null) break;
            back = curr;
            curr = ahead;
            ahead = ahead.next;
            count++;
        }
        return this;
    }
}

let doublyLinkedList = new DLL();
doublyLinkedList.push(5).push(10).push(15).push(20)
console.log(doublyLinkedList.reverse()); // singlyLinkedList;
console.log(doublyLinkedList.length); // 4
console.log(doublyLinkedList.head.val); // 20
console.log(doublyLinkedList.head.next.val); // 15
console.log(doublyLinkedList.head.next.next.val); // 10
console.log(doublyLinkedList.head.next.next.next.val); // 5