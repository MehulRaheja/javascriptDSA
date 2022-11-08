class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new Node(val);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
    return this;
  }

  dequeue() {
    if (!this.size) return null;
    let node = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = node.next;
      node.next = null;
    }
    this.size--;
    return node;
  }
}

var queue = new Queue();
console.log(queue.enqueue(10)) // 1
console.log(queue.size) // 1
console.log(queue.enqueue(100)) // 2
console.log(queue.size) // 2
console.log(queue.enqueue(1000)) // 3
console.log(queue.size) // 3
console.log(queue.dequeue()) // 3
console.log(queue.size)
