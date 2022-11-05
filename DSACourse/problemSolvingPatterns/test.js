// function validAnagram(str1, str2) {
//     // add whatever parameters you deem necessary - good luck!
//     //   if(typeof str1 !== 'string' || typeof str2 !== 'string'){
//     //       return false;
//     //   }
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     let obj1 = {}
//     for (let val = 0; val < str1.length; val++) {
//         let letter = str1[val];
//         obj1[letter] ? obj1[letter] += 1 : obj1[letter] = 1;
//     }
//     console.log(obj1);
//     for (let val = 0; val < str2.length; val++) {
//         let letter = str2[val];
//         if (!obj1[letter]) {
//             return false;
//         } else {
//             obj1[letter] -= 1;
//         }
//         // obj2[val] = (obj2[val] || 0) + 1;
//     }
//     console.log(obj1);
//     //   for(let key in obj1){
//     //     if(!(key in obj2)){
//     //         return false;
//     //     }
//     //     if(obj1[key !== obj2[key]]){
//     //         return false;
//     //     }
//     //   }
//     return true;
// }
// console.log(validAnagram('anagram', 'nagaram'))


// function countUniqueValues(arr) {
//     // add whatever parameters you deem necessary - good luck!
//     if (arr.length === 0) {
//         return 0;
//     }
//     if (arr.length === 1) {
//         return 1;
//     }
//     let count = 1;
//     let i = 0;
//     // console.log('here1');
//     for (let j = 1; j < arr.length; j++) {
//         if (arr[i] !== arr[j]) {
//             // console.log('here2');
//             count = count + 1;
//             i = j
//         }
//     }
//     return count;
// }

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// console.log(countUniqueValues([]));
// console.log(countUniqueValues([-2, -1, -1, 0, 1]));


