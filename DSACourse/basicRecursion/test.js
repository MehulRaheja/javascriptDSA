// function power(a,b){
//   if (b <= 0) return 1;
//   b--;
//   let val = a * power(a, b );
//   return val;
// }

// console.log(power(3,4));


// function factorial(n){
//   if (n <= 1) return 1;
//   let val = n * factorial(n - 1);
//   n--;
//   return val;
// }

// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(4));
// console.log(factorial(7));


// function productOfArray(arr) {
//   if (arr.length === 1) return arr[0];
//   let val = arr[0] * productOfArray(arr.splice(1));
//   return val;
// }

// console.log(productOfArray([1,2,3]));
// console.log(productOfArray([1,2,3,10]));

// function recursiveRange(n){
//   if (n === 1) return 1;
//   let val = n + recursiveRange(n - 1);
//   return val;
// }

// console.log(recursiveRange(6));
// console.log(recursiveRange(10));


// function fib(n) {
//   // add whatever parameters you deem necessary - good luck!
//   if (n == 0) return 0;
//   if (n == 1) return 1;
//   function fibo(val, a, b) {
//     if (val === n) return b;
//     b = a + b;
//     a = b - a;
//     val++;
//     return fibo(val, a, b);
//   }
//   const ans = fibo(1, 0, 1);
//   return ans;
// }

///  FIBONACCI SOLUTION
// function fib(n) {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(4));
// console.log(fib(10));
// console.log(fib(28));
// console.log(fib(35));




// [
//   {
//     '$lookup': {
//       'from': 'products',
//       'let': {
//         'id': '$productId'
//       },
//       'pipeline': [
//         {
//           '$match': {
//             'isDeleted': false
//           }
//         }, {
//           '$project': {
//             '_id': 1,
//             'variations.variationName': 1
//           }
//         }
//       ],
//       'as': 'result'
//     }
//   }
// ]


var x = 125465778.55;
console.log(x.toLocaleString('en-IN'));

const convertor = (number) => {
  return (number.toLocaleString('en-IN', {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'INR'
  }))
}
console.log(convertor(x));