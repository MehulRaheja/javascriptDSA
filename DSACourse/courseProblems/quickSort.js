function compareNumber(num1, num2) {
  return num1 > num2 ? 1 : -1;
}

function compareStrLength(str1, str2) {
  return str1.length > str2.length ? 1 : -1;
}

function compareStr(str1, str2) {
  return str1 > str2 ? 1 : -1;
}

function compareAgeDesc(val1, val2) {
  return val1.age < val2.age ? 1 : -1;
}


function pivot(arr, start = 0, end = arr.length - 1, comparator) {
  function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (comparator(pivot, arr[i]) > 0) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, comparator, left = 0, right = arr.length - 1) {
  if (arr.length <= 1) return arr;
  if (typeof comparator !== 'function') {
    comparator = (num1, num2) => {
      return num1 > num2 ? 1 : -1;
    }
  }
  if (left < right) {
    let swapIdx = pivot(arr, left, right, comparator);
    //left
    quickSort(arr, comparator, left, swapIdx - 1);
    //right
    quickSort(arr, comparator, swapIdx + 1, right);
  }
  return arr;
}

// console.log(quickSort([8, 9, 2, 8, 6, 4, 2, 3], compareNumber));

var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
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

// console.log(quickSort(arr1))
// console.log(quickSort(arr2, compareNumber))
// console.log(quickSort(arr3, compareStrLength))
// console.log(quickSort(arr3, compareStr));
// console.log(quickSort(moarKittyData, compareAgeDesc));