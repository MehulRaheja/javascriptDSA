//// Binary Search Exercise
// function binarySearch(arr, val) {
//   // add whatever parameters you deem necessary - good luck!
//   // if (arr.length === 0) return -1
//   let left = 0;
//   let right = arr.length - 1;
//   let mid = Math.floor(arr.length / 2);
//   while (mid <= right) {
//     if (val < arr[left] || val > arr[right]) return -1
//     if (arr[mid] > val) {
//       right = mid;
//       mid = Math.floor((right + left) / 2)
//     } else if (arr[mid] < val) {
//       left = mid + 1;
//       mid = Math.floor((right + left) / 2)
//     } else {
//       return mid;
//     }
//   }
//   return -1;
// }

//// Better solution
function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (arr[mid] !== elem && start <= end) {
    if (elem < arr[mid]) end = mid - 1;
    else start = mid + 1;
    mid = Math.floor((start + end) / 2);
  }
  return arr[mid] === elem ? mid : -1;
}


console.log(binarySearch([1, 2, 3, 4, 5], 2)) // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)) // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)) // 2
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)) // 16
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)) // -1