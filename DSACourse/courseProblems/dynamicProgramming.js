function coinChange(arr, val) {
  const ways = Array.apply(null, Array(val + 1)).map((vl, i) => 0);
  ways[0] = 1;
  let i, j;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < ways.length; j++) {
      if (arr[i] <= j) ways[j] += ways[j - arr[i]];
    }
  }
  return ways.pop();
}

console.log(coinChange([1, 5, 10, 25], 14511));