/**
 * bind - accepts positional arguments and creates a copy of function for future reference & permanently
 * binds the passed object with it
 */
const bindObj = {
    items: [1, 2, 3],
    getItems(newItem1, newItem2, newItem3) {
        console.log([...this.items, newItem1, newItem2, newItem3]);
    }
};

const getItemsBind = bindObj.getItems.bind(bindObj, 0, 0, 0);

// example 1
getItemsBind();									// => [1, 2, 3, 0, 0, 0]

// example 2 - the binding will not be changed by any of the further calls
getItemsBind(1, 1, 2);							// => [1, 2, 3, 0, 0, 0]

/**
 * call - accepts positional arguments, doesn't create a new copy of function and uses the original copy
 * with the context which is passed
 */
const callObj = {
    items: [4, 5, 6],
    getItems(newItem1, newItem2, newItem3) {
        console.log([...this.items, newItem1, newItem2, newItem3]);
    },
    getItemsAll(...newItems) {
        console.log([...this.items, ...newItems]);
    }
};

// example 1
callObj.getItems.call(callObj, 7, 8, 9);				// => [4, 5, 6, 7, 8, 9]

// example 2
callObj.getItemsAll.call(callObj, 7, 8, 9, 10);			// => [4, 5, 6, 7, 8, 9, 10] 

/** 
 * apply - accepts an array of arguments instead of separate positional parameters
 * example 1
 */
const applyObj = {
    items: [7, 8, 9],
    getItems(newItem1, newItem2, newItem3) {
        console.log([...this.items, newItem1, newItem2, newItem3]);
    },
    getItemsAll(...newItems) {
        console.log([...this.items, ...newItems]);
    }
};

// example 1
applyObj.getItems.apply(applyObj, [11, 12, 13]);			// => [7, 8, 9, 11, 12, 13]

// example 2
applyObj.getItemsAll.apply(applyObj, [14, 15, 16, 17]);		// => [7, 8, 9, 14, 15, 16, 17]
