const prices = [7, 1, 5, 3, 6, 4];
const prices2 = [7, 6, 4, 3, 1];
const prices3 = [0, 0, 0, 0, 0];
const prices4 = [1, 2, 3, 4, 5, 6];
const prices5 = [8, 0, 2, 1, 3, 3];
const prices6 = [8, 0, 2, 0, 3, 9];
const prices7 = [8, 0, 2, 0, 3, 9, 10, 50, 104];
const prices8 = [8, 0, 2, 0, 3, 9, 10, 50, 105];

/**
 * @function validateInput checks the input for 1 <= prices.length <= 105 0 <= prices[i] <= 104
 * @param {Array} arr an array
 * @returns boolean
 */
const validateInput = (arr) => Array.isArray(arr) && arr.length > 1 && arr.length < 105 &&
    arr.every(el => Number.isInteger(el) && el >= 0 && el <= 104);

/**
 * @function stockExchange a function to determine the maximum profit out of a stock transaction
 * @summary Time Complexity - O(n), Space Complexity - O(1)
 * @param {Array} arr prices of the stock per day
 * @returns the profit
 */
const stockExchange = (arr) => {
    if (!validateInput(arr)) throw new Error('Invalid input provided');
    
    const arrLen = arr.length;
    let minIndex = 0, maxIndex = 0;

    for (let i = 0; i < arrLen; i++) {
        if (arr[minIndex] > arr[i]) minIndex = i;
        else if (arr[maxIndex] < arr[i]) maxIndex = i;
    }

    if (minIndex === arrLen - 1 || minIndex === maxIndex) return 0;
    else if (minIndex < maxIndex) return arr[maxIndex] - arr[minIndex];
    else if (minIndex > maxIndex) {
        maxIndex = minIndex + 1;
        for (let j = minIndex + 1; j < arrLen; j++) {
            if (arr[maxIndex] < arr[j]) maxIndex = j;
        }
        return arr[maxIndex] - arr[minIndex];
    }
};

console.log({ prices: prices, profit: stockExchange(prices) });
//  { prices: [ 7, 1, 5, 3, 6, 4 ], profit: 5 }
console.log({ prices: prices2, profit: stockExchange(prices2) });
//  { prices: [ 7, 6, 4, 3, 1 ], profit: 0 }   
console.log({ prices: prices3, profit: stockExchange(prices3) });
//  { prices: [ 0, 0, 0, 0, 0 ], profit: 0 }   
console.log({ prices: prices4, profit: stockExchange(prices4) });
//  { prices: [ 1, 2, 3, 4, 5, 6 ], profit: 5 }
console.log({ prices: prices5, profit: stockExchange(prices5) });
//  { prices: [ 8, 0, 2, 1, 3, 3 ], profit: 3 }
console.log({ prices: prices6, profit: stockExchange(prices6) });
//  { prices: [ 8, 0, 2, 0, 3, 9 ], profit: 9 }
console.log({ prices: prices7, profit: stockExchange(prices7) });
//  { prices: [ 8, 0, 2, 0, 3, 9, 10, 50, 104 ], profit: 104 }
console.log({ prices: prices8, profit: stockExchange(prices8) });
//  Error: Invalid input provided
