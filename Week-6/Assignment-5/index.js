const A1 = [5, 10, 3, 2, 50, 80], B1 = 78;
const A2 = [-10, 20], B2 = 30;
const A3 = [8, 0, 2, 0, 3, 9, 10, 50, 103], B3 = 103;
const A4 = [8, 0, 2, 0, 3, 9, 10, 50, 103], B4 = -106;
const A5 = [-104, 20], B5 = 20;

/**
 * @function validateInput checks the input for 1 <= N <= 105 -103 <= A[i] <= 103 -105 <= B <= 105
 * @param {Array} arr an array
 * @returns boolean
 */
const validateInput = (arr, diff) => Array.isArray(arr) && arr.length > 1 && arr.length < 105 &&
    arr.every(el => Number.isInteger(el) && el >= -103 && el <= 103) &&
    Number.isInteger(diff) && diff >= -105 && diff <= 105;

/**
 * @function pairWithDiff finds a pair with a given difference if available
 * @summary Time Complexity - O(n^2), Space Complexity - O(1)
 * @param {Array} arr an input array
 * @param {Number} diff a difference to find a pair with
 * @returns 1 or 0 based on if a pair with given difference is found
 */
const pairWithDiff = (arr, diff) => {
    if (!validateInput(arr, diff)) throw new Error('Invalid input provided');

    const arrLen = arr.length;

    for (let i = 0; i < arrLen; i++) {
        for (let j = 0; j < arrLen; j++) {
            if (i !== j && Math.abs(arr[i] - arr[j]) === diff) {
                return 1;
            }
        }
    }
    return 0;
}

try {
    console.log({ A1, B1, res: pairWithDiff(A1, B1) });
    //  { A1: [ 5, 10, 3, 2, 50, 80 ], B1: 78, res: 1 }
    console.log({ A2, B2, res: pairWithDiff(A2, B2) });
    //  { A2: [ -10, 20 ], B2: 30, res: 1 }
    console.log({ A3, B3, res: pairWithDiff(A3, B3) });
    //  { A3: [8, 0, 2, 0, 3, 9, 10, 50, 103], B3: 103, res: 1 }
    console.log({ A4, B4, res: pairWithDiff(A4, B4) });
    //  Error: Invalid input provided
    console.log({ A5, B5, res: pairWithDiff(A5, B5) });
    //  Error: Invalid input provided
} catch (error) {
    console.warn(error);
}
