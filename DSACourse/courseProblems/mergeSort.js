function compareStringLength(val1, val2) {
  return val2.length - val1.length;
}

function compareString(str1, str2) {
  return str1 < str2 ? 1 : -1;
}

function oldestToYoungest(val1, val2) {
  return val1.age > val2.age ? 1 : -1;
}

function merge(arr1, arr2, comparator) {
  const result = [];
  let i = 0;
  let j = 0;
  if (typeof comparator !== 'function') {
    comparator = (val1, val2) => {
      return val2 > val1 ? 1 : -1; // Ascending order
    }
  }
  while (i < arr1.length && j < arr2.length) {
    if (comparator(arr1[i], arr2[j]) > 0) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

// var arr1 = [1, 3, 4, 5];
// var arr2 = [2, 4, 6, 8];
// console.log(merge(arr1, arr2)); // [1,2,3,4,4,5,6,8]
// var arr3 = [-2, -1, 0, 4, 5, 6];
// var arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];
// console.log(merge(arr3, arr4)); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]
// var arr5 = [3, 4, 5]
// var arr6 = [1, 2]
// console.log(merge(arr5, arr6)); // [1,2,3,4,5]

// var names = ["Bob", "Ethel", "Christine"]
// var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"]
// console.log(merge(names, otherNames, compareStringLength)); // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]

function mergeSort(arr, comparator) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid), comparator);
  let right = mergeSort(arr.slice(mid), comparator);
  return merge(left, right, comparator);
}

// console.log(mergeSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
// console.log(mergeSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
// console.log(mergeSort([1, 2, 3])); // [1, 2, 3]
// console.log(mergeSort([]));

// var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
// console.log(mergeSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

// var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
// console.log(mergeSort(kitties, compareString)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

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


console.log(mergeSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order
