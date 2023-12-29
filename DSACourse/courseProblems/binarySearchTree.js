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

  findParent(value) {
    if (!this.root) return undefined;
    // if (this.root.value === value) return null;
    let currNode = this.root;
    let parent = null;
    let found = false;
    while (currNode && !found) {
      if (currNode.value > value) {
        parent = currNode;
        currNode = currNode.left;
      }
      else if (currNode.value < value) {
        parent = currNode;
        currNode = currNode.right;
      }
      else found = true;
    }
    return found ? parent : undefined;
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

  remove(val) {
    const node = this.find(val);
    if (!node) return null;
    if (this.root.value === val) {
      this.root = null;
      return null;
    }
    const parentNode = this.findParent(val);
    if (!node.left && !node.right) {
      parentNode.left?.value === val ? parentNode.left = null : parentNode.right = null;
      return null;
    }
    else if (node.right) {
      let currNode = node.right;
      while (true) {
        if (currNode.left) currNode = currNode.left;
        else {
          const currParent = this.findParent(currNode.value);
          parentNode.left?.value === val ? parentNode.left = currNode : parentNode.right = currNode;
          if (currNode.right) {
            currParent.left = currNode.right;
            // currNode.right = node.right;
            // currNode.left = node.left;
          }
          currNode.right = node.right;
          currNode.left = node.left;
          node.right = null;
          node.left = null;
          return null;
        }
      }
    }
    else if (node.left) {
      parentNode.left?.value === val ? parentNode.left = node.left : parentNode.right = node.left;
      node.left = null;
      node.right = null;
      return null;
    }
  }

  findSecondLargest() {
    if (!this.root) return null;
    let first = this.root;
    let second = null;
    function traverse(node) {
      if (node.left) traverse(node.left);
      // data.push(node.value);
      if (node.value > first.value) {
        second = first;
        first = node;
      }
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return second;
  }

  isBalanced() {
    if (!this.root) return true;
    let isBalanced = true;
    function check(node, height) {
      if (!isBalanced) return height;
      const leftHeight = node.left ? check(node.left, height + 1) : height;
      const rightHeight = node.right ? check(node.right, height + 1) : height;
      if (leftHeight > rightHeight + 1 || rightHeight > leftHeight + 1) isBalanced = false;
      return leftHeight > rightHeight ? leftHeight : rightHeight;
    }
    const height = check(this.root, 1);
    console.log(height);
    return isBalanced;
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

// binarySearchTree
//   .insert(15)
//   .insert(20)
//   .insert(10)
//   .insert(12)
//   .insert(1)
//   .insert(5)
//   .insert(50);
// console.log(binarySearchTree.DFSPreOrder()); // [15, 10, 1, 5, 12, 20, 50]
// console.log(binarySearchTree.DFSInOrder()); // [1, 5, 10, 12, 15, 20, 50])
// console.log(binarySearchTree.DFSPostOrder()) // [5, 1, 12, 10, 50, 20, 15]
// console.log(binarySearchTree.breadthFirstSearch());

// binarySearchTree
//   .insert(15)
//   .insert(20)
//   .insert(10)
//   .insert(12)
//   .insert(1)
//   .insert(5)
//   .insert(50);
// binarySearchTree.remove(50);
// console.log(binarySearchTree.root.right.value); // 20
// console.log(binarySearchTree.root.right.right); // null

// binarySearchTree.remove(5);
// console.log(binarySearchTree.root.left.left.value); // 1
// console.log(binarySearchTree.root.left.left.right); // null

// binarySearchTree.remove(1);
// console.log(binarySearchTree.root.left.left.value) // 5
// console.log(binarySearchTree.root.left.left.left) // null
// console.log(binarySearchTree.root.left.left.right) // null

// binarySearchTree.remove(20);
// console.log(binarySearchTree.root.right.value) // 50
// console.log(binarySearchTree.root.right.right) // null
// console.log(binarySearchTree.root.right.left) // null

// binarySearchTree
//   .insert(15)
//   .insert(20)
//   .insert(10)
//   .insert(12)
//   .insert(1)
//   .insert(5)
//   .insert(50)
//   .insert(60)
//   .insert(30)
//   .insert(25)
//   .insert(23)
//   .insert(24)
//   .insert(70);

// binarySearchTree.remove(10);
// console.log(binarySearchTree.root.left.value) // 12
// console.log(binarySearchTree.root.left.left.value) // 1
// console.log(binarySearchTree.root.left.left.right.value) // 5

// binarySearchTree.remove(50);
// console.log(binarySearchTree.root.right.value) // 20
// console.log(binarySearchTree.root.right.right.value) // 60
// console.log(binarySearchTree.root.right.right.left.value) // 30

// binarySearchTree
//   .insert(22)
//   .insert(49)
//   .insert(85)
//   .insert(66)
//   .insert(95)
//   .insert(90)
//   .insert(100)
//   .insert(88)
//   .insert(93)
//   .insert(89)

// binarySearchTree.remove(85);
// console.log(binarySearchTree.root.right.right.value) // 88
// console.log(binarySearchTree.root.right.right.right.left.left.value) // 89

// binarySearchTree
//   .insert(15)
//   .insert(20)
//   .insert(10)
//   .insert(12);
// console.log(binarySearchTree.findSecondLargest().value);

binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
console.log(binarySearchTree.isBalanced()); // true

var binarySearchTree2 = new BinarySearchTree();
binarySearchTree2.insert(5);
console.log(binarySearchTree2.isBalanced()); // true
binarySearchTree2.insert(6);
console.log(binarySearchTree2.isBalanced()); // true
binarySearchTree2.insert(7);
console.log(binarySearchTree2.isBalanced()); // false
