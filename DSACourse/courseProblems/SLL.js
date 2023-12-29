class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(index) {
    if (index >= this.length) return null;
    let ele = this.head;
    for (let i = 0; i < index; i++) {
      ele = ele.next;
    }
    return ele;
  }

  unshift(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return node;
  }

  shift() {
    if (!this.length) return null;
    let node = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = node.next;
      node.next = null;
    }
    this.length--;
    return node;
  }

  push(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    const ele = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.get(this.length - 2);
      this.tail.next = null;
    }
    this.length--;
    return ele;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    else if (index === this.length) return !!this.push(val);
    else {
      let node = new Node(val);
      let ele = this.get(index - 1);
      node.next = ele.next;
      ele.next = node;
    }
    this.length++;
    return true;
  }

  remove(index) {
    if (!this.length) return false;
    if (index >= this.length || index < 0) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let node = this.get(index - 1);
    let removeNode = node.next;
    node.next = removeNode.next;
    removeNode.next = null;
    this.length--;
    return removeNode;
  }

  rotate(num) {
    num = num % this.length;
    if (num < 0) num = num + this.length;
    if (num > 0) {
      let ele = this.get(num - 1);
      this.tail.next = this.head;
      this.head = ele.next;
      this.tail = ele;
      ele.next = null;
    }
  }

  set(index, val) {
    const ele = this.get(index);
    if (ele) {
      ele.val = val;
      return true;
    }
    return false;
  }
}

const singlyLinkedList = new SinglyLinkedList();
// console.log(singlyLinkedList.push(5));
// console.log(singlyLinkedList.length);
// console.log(singlyLinkedList.head.val);
// console.log(singlyLinkedList.tail.val);
// console.log(singlyLinkedList.push(10));
// console.log(singlyLinkedList.length);
// console.log(singlyLinkedList.head.val);
// console.log(singlyLinkedList.head.next.val);
// console.log(singlyLinkedList.tail.val);
// console.log(singlyLinkedList.push(15));
// console.log(singlyLinkedList.length);
// console.log(singlyLinkedList.head.val);
// console.log(singlyLinkedList.head.next.val);
// console.log(singlyLinkedList.head.next.next.val);
// console.log(singlyLinkedList.tail.val);
// console.log(singlyLinkedList.pop().val);
// console.log(singlyLinkedList.tail.val);
// console.log(singlyLinkedList.length);
// console.log(singlyLinkedList.pop().val);
// console.log(singlyLinkedList.length);
// console.log(singlyLinkedList.pop().val);
// console.log(singlyLinkedList.length);
// console.log(singlyLinkedList.pop());
// console.log(singlyLinkedList.length);
singlyLinkedList.push(5).push(10).push(15).push(20);
// console.log(singlyLinkedList.get(0).val);
// console.log(singlyLinkedList.get(1).val);
// console.log(singlyLinkedList.get(2).val);
// console.log(singlyLinkedList.get(3).val);
// console.log(singlyLinkedList.get(4));
// console.log(singlyLinkedList.insert(2, 12)); // true
// console.log(singlyLinkedList.insert(100, 12)); // false
// console.log(singlyLinkedList.length) // 5
// console.log(singlyLinkedList.head.val);
// console.log(singlyLinkedList.head.next.val) // 10
// console.log(singlyLinkedList.head.next.next.val) // 12
// console.log(singlyLinkedList.head.next.next.next.val) // 15
// console.log(singlyLinkedList.head.next.next.next.next.val) // 20
// console.log(singlyLinkedList.insert(5, 25)); // true
// console.log(singlyLinkedList.head.next.next.next.next.next.val) //25
// console.log(singlyLinkedList.tail.val);
// singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
// singlyLinkedList.rotate(3);
// console.log(singlyLinkedList.head.val); // 20
// console.log(singlyLinkedList.head.next.val); // 25
// console.log(singlyLinkedList.head.next.next.val); // 5
// console.log(singlyLinkedList.head.next.next.next.val); // 10
// console.log(singlyLinkedList.head.next.next.next.next.val); // 15
// console.log(singlyLinkedList.tail.val); // 15
// console.log(singlyLinkedList.tail.next); // null
// var singlyLinkedList = new SinglyLinkedList;
// singlyLinkedList.push(5).push(10).push(15).push(20).push(25);

// singlyLinkedList.rotate(-1);
// console.log(singlyLinkedList.head.val); // 25
// console.log(singlyLinkedList.head.next.val); // 5
// console.log(singlyLinkedList.head.next.next.val); // 10
// console.log(singlyLinkedList.head.next.next.next.val); // 15
// console.log(singlyLinkedList.head.next.next.next.next.val); // 20
// console.log(singlyLinkedList.tail.val); // 20
// console.log(singlyLinkedList.tail.next); // null

// var singlyLinkedList = new SinglyLinkedList;
// singlyLinkedList.push(5).push(10).push(15).push(20).push(25);

// singlyLinkedList.rotate(1000);
// console.log(singlyLinkedList.head.val); // 5
// console.log(singlyLinkedList.head.next.val); // 10
// console.log(singlyLinkedList.head.next.next.val); // 15
// console.log(singlyLinkedList.head.next.next.next.val); // 20
// console.log(singlyLinkedList.head.next.next.next.next.val); // 25
// console.log(singlyLinkedList.tail.val); // 25
// console.log(singlyLinkedList.tail.next);

// console.log(singlyLinkedList.set(0, 10)) // true
// console.log(singlyLinkedList.set(1, 2)) // true
// console.log(singlyLinkedList.length) // 2
// console.log(singlyLinkedList.head.val) // 10
// console.log(singlyLinkedList.set(10, 10)) // false
// console.log(singlyLinkedList.set(3, 100)) // true
// console.log(singlyLinkedList.head.next.next.next.val);

console.log(singlyLinkedList.remove(2).val); // 15
console.log(singlyLinkedList.remove(100)); // undefined
console.log(singlyLinkedList.length) // 3
console.log(singlyLinkedList.head.val) // 5
console.log(singlyLinkedList.head.next.val) // 10
console.log(singlyLinkedList.head.next.next.val) // 20
console.log(singlyLinkedList.remove(0).val);