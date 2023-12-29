// // (Frequency Counter) Time - O(n),   Space - O(n)
// function areThereDuplicates() {
//     // console.log(arguments.length);
//     let obj = {};
//     for (let val of arguments) {
//         // console.log(obj, val);
//         if (obj[val]) {
//             return true;
//         } else {
//             obj[val] = 1;
//         }
//     }
//     return false;
// }


// // areThereDuplicates Solution (Multiple Pointers)   Time - O(n log n),   Space - O(1)
// function areThereDuplicates(...args) {
//     // Two pointers
//     args.sort((a,b) => a > b);
//     let start = 0;
//     let next = 1;
//     while(next < args.length){
//       if(args[start] === args[next]){
//           return true
//       }
//       start++
//       next++
//     }
//     return false
// }

// areThereDuplicates One Liner Solution
// function areThereDuplicates() {
//     return new Set(arguments).size !== arguments.length;
// }

// console.log(areThereDuplicates('a', 'b', 'c', 'a'));


// //   Multi Pointer method:  Time: O(N)   Space: O(1)
// function averagePair(arr, avg) {
//   // add whatever parameters you deem necessary - good luck!
//   if (arr.length < 2) {
//     return false;
//   }
//   let a = 0;
//   let b = arr.length - 1;
//   while (a < b) {
//     if ((arr[a] + arr[b]) > 2 * avg) {
//       --b;
//     } else if ((arr[a] + arr[b]) < 2 * avg) {
//       ++a;
//     } else {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(averagePair([1, 2, 3], 2.5));
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
// console.log(averagePair([], 4));


// //   Multi Pointer method:  Time: O(M + N)   Space: O(1)
// function isSubsequence(str1, str2) {
//   // good luck. Add any arguments you deem necessary.
//   if (str1.length > str2.length) {
//     return false;
//   }
//   let i = 0;
//   let j = 0;
//   while (i < str1.length && j < str2.length) {
//     if (str1.substring(i, i + 1) === str2.substring(j, j + 1)) {
//       if (i === str1.length - 1) {
//         return true;
//       }
//       ++i;
//     }
//     ++j;
//   }
//   return false;
// }

// // isSubsequence Solution - Iterative
// function isSubsequence(str1, str2) {
//   var i = 0;
//   var j = 0;
//   if (!str1) return true;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }
//   return false;
// }

// ///   isSubsequence Solution - Recursive but not O(1) Space
// function isSubsequence(str1, str2) {
//   if (str1.length === 0) return true
//   if (str2.length === 0) return false
//   if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
//   return isSubsequence(str1, str2.slice(1))
// }

// console.log(isSubsequence('hello', 'hello world'));
// console.log(isSubsequence('sing', 'sting'));
// console.log(isSubsequence('abc', 'abracadabra'));
// console.log(isSubsequence('abc', 'acb'));


// //   Sliding Window method:  Time: O(N)   Space: O(1)
// function maxSubarraySum(arr, vl) {
//   // add whatever parameters you deem necessary - good luck!
//   if (vl > arr.length) return null;
//   let sum = 0;
//   for (let j = 0; j < vl; j++) sum = sum + arr[j];
//   let temp = sum;
//   if (vl === arr.length) return sum;
//   for (let i = 0; i < arr.length - vl; i++) {
//     temp = temp + (arr[vl + i] - arr[i]);
//     if (temp > sum) {
//       sum = temp;
//     }
//   }
//   return sum;
// }

// console.log(maxSubarraySum([100, 200, 300, 400], 2));
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
// console.log(maxSubarraySum([2, 3], 3));


// //   Sliding Window method:  Time: O(N)   Space: O(1)
// function minSubArrayLen(arr, val) {
//   let start = 0;
//   let end = 0;
//   let total = 0;
//   let minLength = Infinity;
//   while (start < arr.length) {
//     if (total < val && end < arr.length) {
//       total = total + arr[end];
//       end++;
//     } else if (total >= val) {
//       minLength = Math.min(minLength, end - start);
//       total = total - arr[start];
//       start++;
//     } else {
//       break;
//     }
//   }
//   minLength = minLength == Infinity ? 0 : minLength;
//   return minLength;
// }

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));


// // My solution with Time complexity O(N)
// function findLongestSubstring(str) {
//   // add whatever parameters you deem necessary - good luck!
//   if (!str) return 0;
//   if (str.length === 1) return 1;
//   let start = 0;
//   let end = 1;
//   let count = 0;
//   let obj = {};
//   while (end <= str.length) {
//     if (!obj[str.charAt(end - 1)] && obj[str.charAt(end - 1)] != 0) {
//       obj[str.charAt(end - 1)] = end - 1;
//       if (count <= end - start) {
//         count = end - start;
//       }
//     } else {
//       start = Math.max((obj[str.charAt(end - 1)] + 1), start);
//       obj[str.charAt(end - 1)] = end - 1;
//     }
//     if (count <= end - start) {
//       count = end - start;
//     }
//     end++;
//   }
//   // console.log(end);
//   return count;
// }

// findLongestSubstring Solution
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring(''));
console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('thisisawesome'));
console.log(findLongestSubstring('thecatinthehat'));
console.log(findLongestSubstring('bbbbbb'));
console.log(findLongestSubstring('longestsubstring'));
console.log(findLongestSubstring('thisishowwedoit'));