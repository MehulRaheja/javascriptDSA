class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    // console.log(this.values);
    if (this.values.length > 1) this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    // console.log(idx, element);
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      // console.log(parentIdx, this.values[parentIdx]);
      this.values[idx] = parent;
      // console.log(idx, this.values[idx]);
      // [this.values[idx], this.values[parentIdx]] = [this.values[parentIdx], this.values[idx]];
      idx = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    while (idx < this.values.length - 1) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let leftElement, rightElement;
      let swap = null;
      if (leftIdx < length) {
        leftElement = this.values[leftIdx];
        if (leftElement > this.values[idx]) {
          swap = leftIdx;
        }
      }
      if (rightIdx < length) {
        rightElement = this.values[rightIdx];
        if (
          (swap === null && rightElement > this.values[idx]) ||
          (swap === leftIdx && rightElement > leftElement)
        ) {
          swap = rightIdx;
        }
      }
      if (swap === null) break;
      [this.values[idx], this.values[swap]] = [this.values[swap], this.values[idx]];
      idx = swap;
    }
  }
}

var binaryHeap = new MaxBinaryHeap();

// binaryHeap.insert(1)
// console.log(binaryHeap.values[0]) // 1
// binaryHeap.insert(2)
// console.log(binaryHeap.values[0]) // 2
// console.log(binaryHeap.values) // [2, 1]
// binaryHeap.insert(3)
// console.log(binaryHeap.values[0]) // 3
// console.log(binaryHeap.values) // [3, 1, 2]
// binaryHeap.insert(4)
// console.log(binaryHeap.values[0]) // 4
// console.log(binaryHeap.values) // [4, 3, 2, 1]
// binaryHeap.insert(5)
// console.log(binaryHeap.values[0]) // 5
// console.log(binaryHeap.values) // [5, 4, 2, 1, 3]
// binaryHeap.insert(6)
// console.log(binaryHeap.values[0]) // 6
// console.log(binaryHeap.values) // [6, 4, 5, 1, 3, 2]

binaryHeap.insert(1)
binaryHeap.insert(2)
binaryHeap.insert(3)
binaryHeap.insert(4)
binaryHeap.insert(5)
binaryHeap.insert(6)
binaryHeap.extractMax()
console.log(binaryHeap.values[0]) // 5
console.log(binaryHeap.values) // [5,4,2,1,3])
binaryHeap.extractMax()
console.log(binaryHeap.values) // [4,3,2,1])
binaryHeap.extractMax()
console.log(binaryHeap.values) // [3,1,2])
