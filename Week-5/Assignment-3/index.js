const hasDuplicate = arr => new Set(arr).size !== arr.length;

console.log(hasDuplicate([1, 5, -1, 4]));               // false
console.log(hasDuplicate([1, 2, 3, 4]));                // false
console.log(hasDuplicate([1, 2, 3, 4, 1]));             // true
console.log(hasDuplicate([1, 2, 2, 8, 3]));             // true
console.log(hasDuplicate([5, 4, 5, 5, 4]));             // true
console.log(hasDuplicate(['a', 'b', 'a', 'c', 'd']));   // true
console.log(hasDuplicate(['a', 'b', 'ae', 'c', 'd']));  // false
console.log(hasDuplicate([true, true]));  	            // true
console.log(hasDuplicate([true, false])); 	            // false
console.log(hasDuplicate([null, null]));  	            // true
console.log(hasDuplicate([undefined, null, NaN])); 	    // false
console.log(hasDuplicate([NaN, NaN, NaN]));  	        // true
