function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
    return Math.floor(Math.log10(num)) + 1;
}

function mostDigits(arr) {
    let most = 0;
    for (let i = 0; i < arr.length; i++) {
        most = Math.max(most, digitCount(arr[i]));
    }
    return most;
}

function radixSort(nums) {
    const mostDigitsCount = mostDigits(nums);
    for (let i = 0; i < mostDigitsCount; i++) {
        const digitbuckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < nums.length; j++) {
            const val = getDigit(nums[j], i);
            digitbuckets[val].push(nums[j]);
        }
        nums = [].concat(...digitbuckets);
    }
    return nums;
}

// console.log(radixSort([123, 654, 852, 46985, 4786, 125857, 654, 321, 8741, 968, 23, 1, 5, 8, 9]));
// console.log(radixSort([8, 6, 1, 12])); // [1, 6, 8, 12]
// console.log(radixSort([10, 100, 1, 1000, 10000000])); // [1, 10, 100, 1000, 10000000]
// console.log(radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]));  // [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]