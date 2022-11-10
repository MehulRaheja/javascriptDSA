class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let currNode = this.root;
    while (true) {
      if (currNode.value === value) return undefined;
      if (currNode.value < value) {
        if (!currNode.right) {
          currNode.right = node;
          return this;
        }
        currNode = currNode.right;
      } else {
        if (!currNode.left) {
          currNode.left = node;
          return this;
        }
        currNode = currNode.left;
      }
    }
  }

  find(value) {
    if (!this.root) return undefined;
    if (this.root.value === value) return this.root;
    let currNode = this.root;
    let found = false;
    while (currNode && !found) {
      if (currNode.value > value) currNode = currNode.left;
      else if (currNode.value < value) currNode = currNode.right;
      else found = true;
    }
    return found ? currNode : undefined;
  }

  DFSPreOrder() {
    if (!this.root) return null;
    const data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    if (!this.root) return null;
    const data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    if (!this.root) return null;
    const data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  breadthFirstSearch() {
    if (!this.root) return null;
    const queue = [this.root];
    const data = [];
    let node;
    while (queue.length) {
      node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      data.push(node.value);
    }
    return data;
  }
}

var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15);
// binarySearchTree.insert(20);
// binarySearchTree.insert(10);
// binarySearchTree.insert(12);
// console.log(binarySearchTree.root.value) // 15
// console.log(binarySearchTree.root.right.value) // 20
// console.log(binarySearchTree.root.left.right.value) // 12
// binarySearchTree.insert(15).insert(20).insert(10).insert(12);
// console.log(binarySearchTree.root.value) // 15
// console.log(binarySearchTree.root.right.value) // 20
// console.log(binarySearchTree.root.left.right.value) // 12

// binarySearchTree
//   .insert(15)
//   .insert(20)
//   .insert(10)
//   .insert(12);
// var foundNode = binarySearchTree.find(20);
// console.log(foundNode.value) // 20
// console.log(foundNode.left) // null
// console.log(foundNode.right) // null

// binarySearchTree
//   .insert(15)
//   .insert(20)
//   .insert(10)
//   .insert(12);
// var foundNode = binarySearchTree.find(120);
// console.log(foundNode); // undefined

binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);
console.log(binarySearchTree.DFSPreOrder()); // [15, 10, 1, 5, 12, 20, 50]
console.log(binarySearchTree.DFSInOrder()); // [1, 5, 10, 12, 15, 20, 50])
console.log(binarySearchTree.DFSPostOrder()) // [5, 1, 12, 10, 50, 20, 15]
console.log(binarySearchTree.breadthFirstSearch());