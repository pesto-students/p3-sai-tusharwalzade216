/**
 * @param fn - a function which is to be memoized
 * @returns - a function which accepts n number of params & returns memoized value from the cache store
 */
function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = args.toString();
        if (cache.has(key)) {
            return cache.get(key);
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    };
}

/**
 * @param fn - a function for which the performance to be captured
 */
function timeLog(fn) {
    console.time();
    console.log(fn());
    console.timeEnd();
}

/**
 * @param args - array of n numbers
 * @returns - a sum of all the inputs
 */
function add(...args) {
    return args.reduce((sumOfPrevArgs, currArg) => Number(sumOfPrevArgs) + Number(currArg), 0);
}

/**
 * returns memoized result value for same inputs when called
 */
const addMemo = memoize(add);
timeLog(() => addMemo(1, 2, 3.5, 4, 5));  // => 15.5    default: 25.105ms
timeLog(() => addMemo(1, 2, 3.5, 4, 5));  // => 15.5    default: 1.466ms
