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