class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  get(index) {
    if (index >= this.size) return null;
    let ele = this.first;
    for (let i = 0; i < index; i++) {
      ele = ele.next;
    }
    return ele;
  }

  push(val) {
    let node = new Node(val);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (this.size === 0) return undefined;
    const ele = this.last;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.last = this.get(this.size - 2);
      this.last.next = null;
    }
    this.size--;
    return ele;
  }
}

var stack = new Stack();

// console.log(stack.push(10)) // 1
// console.log(stack.first.value) // 10
// console.log(stack.last.value) // 10
// console.log(stack.push(100));
// console.log(stack.first.value) // 100
// console.log(stack.last.value) // 10
// console.log(stack.push(1000));
// console.log(stack.first.value) // 1000
// console.log(stack.last.value) // 10
// console.log(stack.push(10)) // 1
// console.log(stack.size) // 1
// console.log(stack.push(100)) // 2
// console.log(stack.size) // 2
// console.log(stack.push(1000)) // 3
// console.log(stack.size) // 3

console.log(stack.push(10));
console.log(stack.push(100));
console.log(stack.push(1000));
var removed = stack.pop();
console.log(removed) // 1000
console.log(stack.size) // 2
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size) // 0