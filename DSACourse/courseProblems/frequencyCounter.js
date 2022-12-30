function constructNote(val, opt) {
  const alphabets = {};
  let i;
  let response = true;
  for (i = 0; i < opt.length; i++) {
    if (alphabets[opt[i]]) alphabets[opt[i]] += 1;
    else alphabets[opt[i]] = 1;
  }
  for (i = 0; i < val.length; i++) {
    if (alphabets[val[i]]) alphabets[val[i]] -= 1;
    else {
      response = false;
      break;
    }
  }
  return response;
}

// console.log(constructNote('aa', 'abc'));
// console.log(constructNote('abc', 'dcba'));
// console.log(constructNote('aabbcc', 'bcabcaddff'));

function findAllDuplicates(arr) {
  const numbers = {};
  let i;
  const response = [];
  for (i = 0; i < arr.length; i++) {
    if (numbers[arr[i]]) response.push(arr[i]);
    else numbers[arr[i]] = 1;
  }
  return response;
}

// console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])) // array with 2 and 3
// console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
// console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // array with 3, 2, and 1

//PART 1
function findPair(arr, n) {
  const numbers = {};
  let i;
  let response = false;
  for (i = 0; i < arr.length; i++) {
    if (numbers[arr[i] - n] || numbers[arr[i] + n]) {
      response = true;
      break;
    }
    else numbers[arr[i]] = 1;
  }
  return response;
}

//PART 2

function findPairSort(arr, n) {
  arr = arr.sort((a, b) => a - b);
  let val, i;
  let response = false;
  for (i = 0; i < arr.length; i++) {
    if ((arr[i] + n === val) || (arr[i] - n === val)) {
      response = true;
      break;
    } else val = arr[i];
  }
  return response;
}

console.log(findPairSort([6, 1, 4, 10, 2, 4], 2)) // true
console.log(findPairSort([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)) // true
console.log(findPairSort([4, -2, 3, 10], -6)) // true
console.log(findPairSort([6, 1, 4, 10, 2, 4], 22)) // false
console.log(findPairSort([], 0)) // false
console.log(findPairSort([5, 5], 0)) // true
console.log(findPairSort([-4, 4], -8)) // true
console.log(findPairSort([-4, 4], 8)) // true
console.log(findPairSort([1, 3, 4, 6], -2)) // true
console.log(findPairSort([0, 1, 3, 4, 6], -2)) // true
