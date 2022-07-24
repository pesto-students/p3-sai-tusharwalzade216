const arr = [0, 2, 1, 1, 0, 1, 2, 1];
const arr2 = [0, 2, 1, 0, 1, 0, 1, 2, 1, 2, 2, 1, 0, 1, 2, 1];

/**
 * @function validateInput validates if the provided input is an array & has all 0s, 1s & 2s
 * @param {Array} arr an array
 * @returns boolean
 */
const validateInput = (arr) => Array.isArray(arr) &&
    arr.every(el => Number.isInteger(el) && (el === 0 || el === 1 || el === 2));

/**
 * @function sortArr a function which sorts array of 0s, 1s & 2s
 * @summary Time Compexity - O(n), Space Complexity - O(1)
 * @param {Array} arr input array with 0s, 1s & 2s
 * @returns a sorted array
 */
const sortArr = (arr) => {
    if (!validateInput(arr)) throw new Error('Invalid input provided, expected an array of 0s, 1s, 2s');

    const arrLen = arr?.length;
    let i = 0, a0 = [], a1 = [], a2 = [];

    while (i < arrLen) {
        if (arr[i] === 0) a0.push(arr[i]);
        if (arr[i] === 1) a1.push(arr[i]);
        if (arr[i] === 2) a2.push(arr[i]);
        i++;
    }
    return a0.concat(a1).concat(a2);
};

console.log({ sortArr: sortArr(arr) });
/**
 * {
 *   sortArr: [
 *     0, 0, 1, 1,
 *     1, 1, 2, 2
 *   ]
 * }
 */
console.log({ sortArr: sortArr(arr2) });
/**
 * {
 *  sortArr: [
 *    0, 0, 0, 0, 1, 1,
 *    1, 1, 1, 1, 1, 2,
 *    2, 2, 2, 2
 *  ]
 *}
 */

/**
 * @function sortArrByCnt a function which sorts array of 0s, 1s & 2s
 * @summary Time Compexity - O(n), Space Complexity - O(1)
 * @param {Array} arr input array with 0s, 1s & 2s
 * @returns a sorted array
 */
const sortArrByCnt = (arr) => {
    if (!validateInput(arr)) throw new Error('Invalid input provided, expected an array of 0s, 1s, 2s');

    const arrLen = arr?.length;
    let i = c0 = c1 = c2 = 0;

    for (i; i < arrLen; i++) {
        if (arr[i] === 0) c0++;
        else if (arr[i] === 1) c1++;
        else c2++;
    }

    i = 0;

    while (c0 > 0) {
        arr[i++] = 0;
        c0--;
    }

    while (c1 > 0) {
        arr[i++] = 1;
        c1--;
    }

    while (c2 > 0) {
        arr[i++] = 2;
        c2--;
    }

    return arr;
};

console.log({ sortArrByCnt: sortArrByCnt(arr) });
/**
 * {
 *   sortArrByCnt: [
 *     0, 0, 1, 1,
 *     1, 1, 2, 2
 *   ]
 * }
 */
console.log({ sortArrByCnt: sortArrByCnt(arr2) });
/**
 * {
 *  sortArrByCnt: [
 *    0, 0, 0, 0, 1, 1,
 *    1, 1, 1, 1, 1, 2,
 *    2, 2, 2, 2
 *  ]
 *}
 */
