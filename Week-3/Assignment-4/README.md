# Week 3 - Assignment 4

[Welcome to Pesto assignment - 4 from the Week 3](https://pestotech.teachable.com/courses/1782350/lectures/40231498)

Refactor the above stack implementation, using the concept of closure, such that there is no way to access items array outside of createStack() function scope: (2-3 hours)

<pre>
function createStack() {
    return {
        items: [],
        push(item) {
            this.items.push(item);
        },
        pop() {
            this.items.pop();
        }
    }
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();    // => 5
stack.items;    // => [10]
stack.items= [10, 100, 1000]; // Encapsulation broken!
</pre>

<pre>
function createStack() {
    // Write your code here...
}
const stack=createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5
stack.items;// => undefined
</pre>

## Guidelines:

1. The candidate should be able to refactor the code and get the desired output.
2. The candidate should be able to explain the code why it was not working before.
3. The candidate should be able to explain the code why it is working now.

## Outcome:

1. The candidates will understand how 'closure' works in JS.
2. The candidates will understand how 'encapsulation' works in JS.
