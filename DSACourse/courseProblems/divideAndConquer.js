function countZeroes(arr) {
  if (!arr.length) return -1;
  let val = 0;
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor(end / 2);
  if (arr[start] === 0) return arr.length;
  else if (arr[end] === 1) return 0;
  while (mid < end) {
    if (arr[mid] === 1 && arr[mid + 1] === 0) {
      val = arr.length - (mid + 1);
      break;
    }
    else if (arr[mid] === 1) start = mid;
    else if (arr[mid] === 0) end = mid;
    mid = Math.floor((start + end) / 2);
  }
  return val;
}
// console.log(countZeroes([1, 1, 1, 1, 0, 0]));
// console.log(countZeroes([1, 0, 0, 0, 0])) // 4
// console.log(countZeroes([0, 0, 0])) // 3
// console.log(countZeroes([1, 1, 1, 1, 1])) // 0
// console.log(countZeroes([]))

function sortedFrequency(arr, val) {
  if (arr.length === 0) return -1;
  if (arr[0] > val) return -1;
  if (arr[arr.length - 1] < val) return -1;
  let value;
  let lower;
  let upper;
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor(end / 2);
  function findVal(left, mid, right) {
    while (mid <= right && arr[mid] !== val) {
      if (arr[mid] > val) right = mid - 1;
      else left = mid + 1;
      mid = Math.floor((right + left) / 2);
    }
    return arr[mid] === val ? mid : -1;
  }
  function findLeft(left, right) {
    let centre = Math.floor((left + right) / 2);
    while (centre <= right && !(arr[centre] === val && arr[centre - 1] < val)) {
      if (arr[centre] > val || (arr[centre] === val && arr[centre - 1] === val)) right = centre - 1;
      else left = centre + 1;
      centre = Math.floor((right + left) / 2);
    }
    return arr[centre] === val && arr[centre - 1] < val ? centre : -1;
  }
  function findRight(left, right) {
    let centre = Math.floor((left + right) / 2);
    while (centre <= right && !(arr[centre] === val && arr[centre + 1] > val)) {
      if (arr[centre] < val || (arr[centre] === val && arr[centre + 1] === val)) left = centre + 1;
      else right = centre - 1;
      centre = Math.floor((right + left) / 2);
    }
    return arr[centre] === val && arr[centre + 1] > val ? centre : -1;
  }
  value = findVal(start, mid, end);
  if (val === -1) return -1;
  lower = arr[0] === val ? 0 : findLeft(0, value);
  upper = arr[end] === val ? end : findRight(value, end);
  return upper - lower + 1;
}
// console.log(sortedFrequency([1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 8, 8, 10, 10, 10], 5));
// console.log(sortedFrequency([1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 8, 8, 10, 10, 10], 3));
// console.log(sortedFrequency([1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 8, 8, 10, 10, 10], 1));
// console.log(sortedFrequency([1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 8, 8, 10, 10, 10], 4));
// console.log(sortedFrequency([1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 8, 8, 10, 10, 10], 2));

function findRotatedIndex(arr, val) {
  if (!arr.length) return -1;
  const len = arr.length;
  const lastEle = arr[len - 1];
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor(right / 2);
  while (mid <= right && !(arr[mid] > lastEle && arr[mid + 1] < lastEle)) {
    if (arr[mid] > lastEle && arr[mid + 1] > lastEle) left = mid + 1;
    else right = mid - 1;
    mid = Math.floor((left + right) / 2);
  }
  console.log(mid, mid);
  if (val < arr[mid + 1] || val > arr[mid]) return -1;
  let start;
  let end;
  let centre;
  if (val > lastEle) {
    start = 0;
    end = mid;
    centre = Math.floor((start + end) / 2);
    while (centre <= end && arr[centre] !== val) {
      if (arr[centre] > val) end = centre - 1;
      else start = centre + 1;
      centre = Math.floor((start + end) / 2);
    }
  } else {
    start = mid + 1;
    end = len;
    centre = Math.floor((start + end) / 2);
    while (centre <= end && arr[centre] !== val) {
      if (arr[centre] > val) end = centre - 1;
      else start = centre + 1;
      centre = Math.floor((start + end) / 2);
    }
  }
  return arr[centre] === val ? centre : -1;
}
// console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
// console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1
// console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)); // 5