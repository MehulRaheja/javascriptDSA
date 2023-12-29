// function reverse(str) {
//   // add whatever parameters you deem necessary - good luck!
//   let arr = str.split("");
//   const len = Math.floor(arr.length / 2);
//   function recur(arr, len) {
//     if (len <= 0) return arr;
//     let st = [...arr];
//     st[len - 1] = arr[arr.length - len];
//     st[arr.length - len] = arr[len - 1];
//     // console.log(st, len);
//     return recur(st, len - 1);
//   }
//   const some = recur(arr, len);
//   return some
// }

// console.log(reverse('awesome'));


// function isPalindrome(str){
//   // add whatever parameters you deem necessary - good luck!
//   let arr = str.split("");
//   const len = Math.floor(arr.length / 2);
//   function recur(arr, len) {
//     if (len <= 0) return arr;
//     let st = [...arr];
//     st[len - 1] = arr[arr.length - len];
//     st[arr.length - len] = arr[len - 1];
//     return recur(st, len - 1);
//   }
//   const some = recur(arr, len);
//   return some.join("") === str ? true : false;
// }

// console.log(isPalindrome('awesome') )// false
// console.log(isPalindrome('foobar') )// false
// console.log(isPalindrome('tacocat')) // true
// console.log(isPalindrome('amanaplanacanalpanama')) // true
// console.log(isPalindrome('amanaplanacanalpandemonium') )// false



// const isOdd = (vl) => vl % 2 !== 0;
// function someRecursive(arr, func) {
//   // add whatever parameters you deem necessary - good luck!
//   if (arr.length === 0) return false;
//   const val = func(arr[arr.length - 1]);
//   if (val) return true;
//   // arr = arr.pop()
//   return someRecursive(arr.slice(0, arr.length - 1), func);
// }

// console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
// console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
// console.log(someRecursive([4, 6, 8], isOdd)); // false
// console.log(someRecursive([4, 6, 8], val => val > 10)); // false


// ///  Flatten the Array
// function flatten(arr) {
//   // add whatever parameters you deem necessary - good luck!
//   function flat(out, arr) {
//     if (arr.length === 0) return out;
//     let val = arr[arr.length - 1];
//     let val2 = arr.slice(0, arr.length - 1);
//     if (typeof val !== "object") {
//       out = [val, ...out];
//     } else {
//       val2 = [...val2, ...val];
//     }
//     return flat(out, val2);
//   }
//   return flat([], arr);
// }

// console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
// console.log(flatten([[1], [2], [3]])) // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]

// // RECURSION CHALLENGE SECTION SOLUTIONS
// // Reverse Solution

// function reverse(str) {
//   if (str.length <= 1) return str;
//   return reverse(str.slice(1)) + str[0];
// }


// // isPalindrome Solution

// function isPalindrome(str) {
//   if (str.length === 1) return true;
//   if (str.length === 2) return str[0] === str[1];
//   if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
//   return false;
// }


// // someRecursive Solution

// function someRecursive(array, callback) {
//   if (array.length === 0) return false;
//   if (callback(array[0])) return true;
//   return someRecursive(array.slice(1), callback);
// }


// // flatten Solution

// function flatten(oldArr) {
//   var newArr = []
//   for (var i = 0; i < oldArr.length; i++) {
//     if (Array.isArray(oldArr[i])) {
//       newArr = newArr.concat(flatten(oldArr[i]))
//     } else {
//       newArr.push(oldArr[i])
//     }
//   }
//   return newArr;
// }



/// CAPITALIZE FIRST CHARACTER OF EACH ELEMENT OF THE ARRAY
// function capitalizeFirst(arr) {
//   // add whatever parameters you deem necessary - good luck!
//   if (arr.length === 0) return [];
//   let val = arr[0];
//   val = val.substring(0, 1).toUpperCase() + val.substring(1);
//   return [val, ...capitalizeFirst(arr.slice(1))];
// }

// console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']


// //// nestedEvenSum
// function nestedEvenSum(obj) {
//   // add whatever parameters you deem necessary - good luck!
//   let count = 0;
//   function getSum(obj) {
//     const val = Object.values(obj);
//     for (let i = 0; i < val.length; i++) {
//       if (typeof val[i] !== "object") {
//         if (Number.isInteger(val[i]) && val[i] % 2 === 0) {
//           count = count + val[i];
//         }
//       } else {
//         getSum(val[i]);
//       }
//     }
//   }
//   getSum(obj);
//   return count;
// }


// var obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }

// var obj2 = {
//   a: 2,
//   b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//   c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
//   d: 1,
//   e: { e: { e: 2 }, ee: 'car' }
// };

// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10


// //// capitalizeWords
// function capitalizedWords(words) {
//   // add whatever parameters you deem necessary - good luck!
//   if (words.length === 0) return words;
//   const val = words[0].toUpperCase();
//   return [val, ...capitalizedWords(words.slice(1))];
// }

// let words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']


// /// stringifyNumbers
// function stringifyNumbers(obj) {
//   if (obj === {}) return obj;
//   const val = Object.entries(obj);
//   for (let i = 0; i < val.length; i++) {
//     if (Number.isInteger(val[i][1])) {
//       obj[val[i][0]] = (val[i][1]).toString();
//     } else if (typeof val[i][1] === "object" && !Array.isArray(val[i][1])) {
//       obj[val[i][0]] = stringifyNumbers(val[i][1]);
//     }
//   }
//   return obj;
// }

// let obj = {
//   num: 1,
//   test: [],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66
//     }
//   }
// }

// console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/


// //// collectStrings
// function collectStrings(obj) {
//   let arr = [];
//   function findString(obj) {
//     if (obj === {}) return;
//     const val = Object.entries(obj);
//     for (let i = 0; i < val.length; i++) {
//       if (typeof val[i][1] === "string") {
//         arr.push(val[i][1])
//       } else if (typeof val[i][1] === "object" && !Array.isArray(val[i][1])) {
//         findString(val[i][1]);
//       }
//     }
//   }
//   findString(obj);
//   return arr;
// }

// const obj = {
//   stuff: "foooo",
//   data: {
//     val: {
//       thing: {
//         info: "bar",
//         moreInfo: {
//           evenMoreInfo: {
//             weMadeIt: "baz"
//           }
//         }
//       }
//     }
//   }
// }

// console.log(collectStrings(obj)); // ["foo", "bar", "baz"])


// // Recursion CHALLENGE Problem Set Solutions Part 2

// // capitalizeWords Solution
// function capitalizeWords (array) {
//   if (array.length === 1) {
//     return [array[0].toUpperCase()];
//   }
//   let res = capitalizeWords(array.slice(0, -1));
//   res.push(array.slice(array.length-1)[0].toUpperCase());
//   return res;
 
// }


// // nestedEvenSum Solution
// function nestedEvenSum (obj, sum=0) {
//     for (var key in obj) {
//         if (typeof obj[key] === 'object'){
//             sum += nestedEvenSum(obj[key]);
//         } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
//             sum += obj[key];
//         }
//     }
//     return sum;
// }


// // capitalizeFire Solution
// function capitalizeFirst (array) {
//   if (array.length === 1) {
//     return [array[0][0].toUpperCase() + array[0].substr(1)];
//   }
//   const res = capitalizeFirst(array.slice(0, -1));
//   const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
//   res.push(string);
//   return res;
// }


// // stringifyNumbers Solution
// function stringifyNumbers(obj) {
//   var newObj = {};
//   for (var key in obj) {
//     if (typeof obj[key] === 'number') {
//       newObj[key] = obj[key].toString();
//     } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//       newObj[key] = stringifyNumbers(obj[key]);
//     } else {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }


// // collectStrings Solution: Helper Method Recursion Version
// function collectStrings(obj) {
//     var stringsArr = [];
 
//     function gatherStrings(o) {
//         for(var key in o) {
//             if(typeof o[key] === 'string') {
//                 stringsArr.push(o[key]);
//             }
//             else if(typeof o[key] === 'object') {
//                 return gatherStrings(o[key]);
//             }
//         }
//     }
 
//     gatherStrings(obj);
 
//     return stringsArr;
// }


// // collectStrings Solution: Pure Recursion Version
// function collectStrings(obj) {
//     var stringsArr = [];
//     for(var key in obj) {
//         if(typeof obj[key] === 'string') {
//             stringsArr.push(obj[key]);
//         }
//         else if(typeof obj[key] === 'object') {
//             stringsArr = stringsArr.concat(collectStrings(obj[key]));
//         }
//     }
 
//     return stringsArr;
// }



