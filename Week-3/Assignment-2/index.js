const obj = {
    items: [1, 2, 3],
    getItems(newItem1, newItem2, newItem3) {
        console.log([...this.items, newItem1, newItem2, newItem3]);
    },
    getItemsAll(...newItems) {
        console.log([...this.items, ...newItems]);
    }
}

const getItems = obj.getItems;
const getItemsAll = obj.getItemsAll;

// bind - accepts positional arguments and creates a copy of function for future reference & permanently binds the passed object with it
const getItemsBind = obj.getItems.bind(obj, 0, 0, 0);

// example 1
getItemsBind();									// => [1, 2, 3, 0, 0, 0]

// example 2 - the binding will not be changed by any of the further calls
getItemsBind(1, 1, 2);							// => [1, 2, 3, 0, 0, 0]

// call - accepts positional arguments, doesn't create a new copy of function and uses the original copy with the context which is passed
// example 1
getItems.call(obj, 4, 5, 6);				// => [1, 2, 3, 4, 5, 6]

// example 2
obj.getItemsAll.call(obj, 7, 8, 9, 10);			// => [1, 2, 3, 7, 8, 9, 10] 

// apply - accepts an array of arguments instead of separate positional parameters
// example 1
getItems.apply(obj, [11, 12, 13]);			// => [1, 2, 3, 11, 12, 13]

// example 2
getItemsAll.apply(obj, [14, 15, 16, 17]);		// => [1, 2, 3, 14, 15, 16, 17]
