function compareNum(val1, val2) {
  return val1 - val2;
}

function compareStr(val1, val2) {
  if (val1 < val2) return -1;
  else return 1;
}

function compareAgeDesc(val1, val2) {
  return val2.age - val1.age;
}

////////////////////////////////////// BUBBLE SORT ////////////////////////////////////
function bubbleSort(arr, comparator = {}) {
  if (typeof comparator !== 'function') {
    // provide a default
    comparator = (val1, val2) => {
      return val1 - val2;
    }
  }
  function swap(idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (comparator(arr[j], arr[j + 1]) > 0) swap(j, j + 1);
    }
  }
  return arr;
}

// console.log(bubbleSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
// console.log(bubbleSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
// console.log(bubbleSort([1, 2, 3])); // [1, 2, 3]
// console.log(bubbleSort([]));
var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
// console.log(bubbleSort(nums));
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
// console.log(bubbleSort(kitties, compareStr));
var moarKittyData = [{
  name: "LilBub",
  age: 7
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 45
}, {
  name: "Blue",
  age: 1
}, {
  name: "Grumpy",
  age: 6
}];
// console.log(bubbleSort(moarKittyData, compareAgeDesc));


////////////////////////////////////// SELECTION SORT ////////////////////////////////////
function selectionSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    // provide a default
    comparator = (val1, val2) => {
      return val1 - val2;
    }
  }
  function swap(idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
  let lowest;
  for (let i = 0; i < arr.length; i++) {
    lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[lowest], arr[j]) > 0) lowest = j;
    }
    if (i !== lowest) swap(i, lowest);
  }
  return arr;
}
// console.log(selectionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
// console.log(selectionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
// console.log(selectionSort([1, 2, 3])); // [1, 2, 3]
// console.log(selectionSort([]));
// console.log(bubbleSort(nums));
// console.log(bubbleSort(kitties, compareStr));
// console.log(bubbleSort(moarKittyData, compareAgeDesc));

////////////////////////////////////// INSERTION SORT ////////////////////////////////////
function insertionSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    // provide a default
    comparator = (val1, val2) => {
      return val1 - val2;
    }
  }
  for (let i = 1; i < arr.length; i++) {
    const currValue = arr[i];
    let j;
    for (j = i - 1; j >= 0 && comparator(arr[j], currValue) > 0; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currValue;
  }
  return arr;
}

// console.log(insertionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
// console.log(insertionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
// console.log(insertionSort([1, 2, 3])); // [1, 2, 3]
// console.log(insertionSort([]));
console.log(insertionSort(nums, compareNum)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
console.log(insertionSort(kitties, compareStr)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
console.log(insertionSort(moarKittyData, compareAgeDesc)); // sorted by age in descending order