function createStack() {
    let items = [];

    return {
        get() {
            return items;
        },
        push(item) {
            items.push(item);
        },
        pop() {
            items.pop();
        }
    }
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.items); // => undefined
console.log(stack.get()); // => 10
