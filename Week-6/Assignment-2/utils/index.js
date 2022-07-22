/**
 * @function generateMatrix
 * @param {Number} rows number of rows to generate 
 * @param {Number} cols number of cols to generate 
 * @returns a matrix generated
 */
 const generateMatrix = (rows, cols) => {
    let matrix = [], row, last = 0;
    for (let i = 0; i < rows; i++) {
        row = [];
        for (let j = 0; j < cols; j++)
            row.push(++last);
        matrix.push(row);
    }
    return matrix;
};

/**
 * @function displayMatrix
 * @param {Array<Array>} matrix a 2-D array to print
 */
const displayMatrix = matrix => matrix.join('\n');

module.exports = {
    generateMatrix,
    displayMatrix
}
