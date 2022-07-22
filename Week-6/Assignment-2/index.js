const { generateMatrix, displayMatrix } = require("./utils");

/**
 * @function spirallyTraverse
 * @summary Time Complexity: O(rows * cols), Space Complexity: O(1)
 * @param {Array<Array>} matrix 
 * @returns a new one dimensional array with spiral order of elements
 */
function spirallyTraverse(matrix) {
    // # rows & # columns
    const rows = matrix.length, cols = matrix?.[0]?.length || 0;
    // result array & iterator
    let arr = [], i = 0;
    // starting & ending row index
    let startRowIndex = 0, endRowIndex = rows - 1;
    // starting & ending col index
    let startColIndex = 0, endColIndex = cols - 1;

    // if matrix isn't a 2-D array or doesn't have rows or columns, then it's invalid
    if (!Array.isArray(matrix)
        || matrix?.every(arr => !Array.isArray(arr))
        || rows === 0 || cols === 0)
        throw new Error('Invalid matrix passed');

    // perform operations untill we reach to the end of all the rows & columns
    while (startRowIndex <= endRowIndex && startColIndex <= endColIndex) {
        // push all elements from first row & move startRowIndex forward by 1
        for (i = startColIndex; i <= endColIndex; ++i) {
            arr.push(matrix[startRowIndex][i]);
        }
        startRowIndex++;

        // push last column from each row & move endColIndex backward by 1
        for (i = startRowIndex; i <= endRowIndex; ++i) {
            arr.push(matrix[i][endColIndex]);
        }
        endColIndex--;

        // push all elements from last row in reverse order & move endRowIndex backward by 1
        if (startRowIndex <= endRowIndex) {
            for (i = endColIndex; i >= startColIndex; --i) {
                arr.push(matrix[endRowIndex][i]);
            }
            endRowIndex--;
        }

        // push elements from first column in reverse order & move startColIndex forward by 1
        if (startColIndex <= endColIndex) {
            for (i = endRowIndex; i >= startRowIndex; --i) {
                arr.push(matrix[i][startColIndex]);
            }
            startColIndex++;
        }
    }

    return arr;
}

const mat33 = generateMatrix(3, 3);
console.log(displayMatrix(mat33));
console.log(spirallyTraverse(mat33));

/**
 * Sample Output
 * "1,2,3
 * 4,5,6
 * 7,8,9"
 * [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

const mat44 = generateMatrix(4, 4);
console.log(displayMatrix(mat44));
console.log(spirallyTraverse(mat44));

/**
 * Sample Output
 * "1,2,3,4
 * 5,6,7,8
 * 9,10,11,12
 * 13,14,15,16"
 * [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
 */

const mat99 = generateMatrix(9, 9);
console.log(displayMatrix(mat99));
console.log(spirallyTraverse(mat99));

/**
 * Sample Output
 * "1,2,3,4,5,6,7,8,9
 * 10,11,12,13,14,15,16,17,18
 * 19,20,21,22,23,24,25,26,27
 * 28,29,30,31,32,33,34,35,36
 * 37,38,39,40,41,42,43,44,45
 * 46,47,48,49,50,51,52,53,54
 * 55,56,57,58,59,60,61,62,63
 * 64,65,66,67,68,69,70,71,72
 * 73,74,75,76,77,78,79,80,81"
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 18, 27, 36, 45, 54, 63, 72, 81, 80, 79, 78, 77, 76, 75, 74, 73, 64, 55, 46, 37, 28, 19, 10, 11, 12, 13, 14, 15, 16, 17, 26, 35, 44, 53, 62, 71, 70, 69, 68, 67, 66, 65, 56, 47, 38, 29, 20, 21, 22, 23, 24, 25, 34, 43, 52, 61, 60, 59, 58, 57, 48, 39, 30, 31, 32, 33, 42, 51, 50, 49, 40, 41]
 */
