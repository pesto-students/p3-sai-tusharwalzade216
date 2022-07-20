/**
 * @function getMax
 * @param {number} a
 * @param {number} b
 * @returns maximum between two inputs
 */
const getMax = (a, b) => a > b ? a : b;

/**
 * @function _every
 * @param {function} cb a callback function to be executed 
 * @returns maximum sum of contiguous elements calculated
 */
Array.prototype._every = function (cb) {
    const arrLen = this.length;
    for (let index = 0; index < arrLen; index++) {
        if (!cb(this[index])) return false;
    }
    return true;
}

/**
 * @function isArrayOfNumbers
 * @param {Array} arr an array of elements 
 * @returns maximum sum of contiguous elements calculated
 */
const isArrayOfNumbers = (arr) => Array.isArray(arr) && arr._every(el => Number.isInteger(el));

module.exports = {
    getMax,
    isArrayOfNumbers
}