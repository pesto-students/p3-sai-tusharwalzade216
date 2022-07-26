const S1 = [-1, 2, 1, -4], T1 = 1;
const S2 = [-3, 1, 2, 0, 6], T2 = 4;
const S3 = [0, 0, 0], T3 = 2;
const S4 = [-2], T4 = -2;
const S5 = [4, 1], T5 = 4;

/**
 * @function validateInput checks if the inputs are valid
 * @param {Array} arr an input array
 * @param {Number} target the target sum
 * @returns boolean
 */
const validateInput = (arr, target) => Array.isArray(arr) && arr.length > 2 &&
    arr.every(el => Number.isFinite(el)) && Number.isInteger(target);

/**
 * @function getClosestSum a function which returns the sum closest to the target provided
 * @summary Time Complexity - O(n^2), Space Complexity - O(1)
 * @param {Array} arr an input array
 * @param {Number} target the target sum
 * @returns the sum closest to target
 */
const getClosestSum = (arr, target) => {
    if (!validateInput(arr, target)) throw new Error('Invalid input provided');

    const arrLen = arr.length;
    let startIndex, endIndex = arrLen - 1;
    let closestSum = Infinity;

    // sorting the array first to have better time complexity
    for (let i = 0; i < arrLen; i++) {
        for (let j = 0; j < arrLen; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    // go upto start of the last triplet, i.e. 3rd last value
    for (let i = 0; i < arrLen - 2; i++) {
        startIndex = i + 1;

        while (startIndex < endIndex) {
            // sum of the current 3 elements
            let sum = arr[i] + arr[startIndex] + arr[endIndex];
            // difference between the target & current sum
            let diff = Math.abs(target - sum);
            // difference between the target & the closest sum
            let tDiff = Math.abs(target - closestSum);

            if (diff < tDiff) closestSum = sum;

            /**
             * if sum of the current 3 elements is - 
             * 1. same as target sum, return it
             * 2. less than target sum, move startIndex forward
             * 3. greater than target sum, move endIndex backward
             */
            if (sum === target) return sum;
            else if (sum < target) startIndex++;
            else endIndex--;
        }
    }

    return closestSum;
}

try {
    console.log({ S1, T1, closestSum: getClosestSum(S1, T1) });
    //  { S1: [ -4, -1, 1, 2 ], T1: 1, closestSum: 2 }
    console.log({ S2, T2, closestSum: getClosestSum(S2, T2) });
    //  { S2: [ -3, 0, 1, 2, 6 ], T2: 4, closestSum: 4 }
    console.log({ S3, T3, closestSum: getClosestSum(S3, T3) });
    //  { S3: [ 0, 0, 0 ], T3: 2, closestSum: 0 }
    console.log({ S4, T4, closestSum: getClosestSum(S4, T4) });
    //  Error: Invalid input provided
    console.log({ S5, T5, closestSum: getClosestSum(S5, T5) });
    //  Error: Invalid input provided
} catch (error) {
    console.warn(error);
}
