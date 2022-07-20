const Utils = require('./utils');

/**
 * @function maxSumContiguousArr
 * @param {Array} arr 
 * @returns maximum sum of contiguous elements calculated
 */
const maxSumContiguousArr = (arr) => {
    if (!Utils.isArrayOfNumbers(arr)) throw "Invalid input provided";

    let sum = maxSum = 0, arrLen = arr.length;

    for (let index = 0; index < arrLen; index++) {
        // add every element in sum
        sum += arr[index];

        // make sum as maximum if it's greater than the recent maximum
        if (sum > maxSum) maxSum = sum;

        // if sum is going negative, make it 0 to ignore the negative sum being propagated
        if (sum < 0) sum = 0;
    }

    return maxSum;
}

/**
 * @function maxSumContiguousArrWithKadane
 * @param {Array} arr 
 * @returns maximum sum of contiguous elements calculated using Kaden's algorithm
 */
const maxSumContiguousArrWithKadane = (arr) => {
    if (!Utils.isArrayOfNumbers(arr)) throw "Invalid input provided";

    let sum = maxSum = 0, arrLen = arr.length;

    for (let index = 0; index < arrLen; index++) {
        // check the maximum of the currentElement and sum + currentElement and add into sum
        sum = Utils.getMax(arr[index], sum + arr[index]);

        // make sum as maximum if it's greater than the recent maximum
        if (sum > maxSum) maxSum = sum;
    }

    return maxSum;
}

const a = [1, 2, 3, 4, -10];
const b = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const c = [-2, -1, -3, -4, -1];

console.log(maxSumContiguousArr(a));	// 10
console.log(maxSumContiguousArr(b));	// 6
console.log(maxSumContiguousArr(c));	// 0

console.log(maxSumContiguousArrWithKadane(a));	// 10
console.log(maxSumContiguousArrWithKadane(b));	// 6
console.log(maxSumContiguousArrWithKadane(c));	// 0