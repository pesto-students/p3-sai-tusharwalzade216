# Week 3 - Assignment 3

[Welcome to Pesto assignment - 3 from the Week 3](https://pestotech.teachable.com/courses/1782350/lectures/40231498)

What is the output of the below problem and why? [30 min]

<pre>
function createIncrement() {
    let count = 0;

    function increment() {
        count++;
    }

    let message = `Count is ${count}`;

    function log() {
        console.log(message);
    }
    return [increment, log];
}
const [increment, log] = createIncrement();

increment();
increment();
increment();
log();
</pre>

## Guidelines:

1. The candidate should be able to explain the code with the desired output.

## Outcome:

1. The candidates will understand how 'closure' works in JS.
2. The candidates will understand how 'encapsulation' works in JS.

## Output Justification

### Output: <output>Count is 0</output>

### Why?

The count is getting incremented, but nowhere we've updated the message; the message variable just captured the initial value of count when registering a function in memory

## Execution steps

- The function `createIncrement` starts registering in memory

- The variable `count` is assigned to `0`

- The function `increment` registers in memory, here this function forms a **Closure** with it's nearest scope variable `count`.

- The variable `message` is set to `Count is 0` given that count is already assigned to 0

- The function `log` registers in memory

- The `return` statement then gets registered in memory

- The function `createIncrement` ends registering in memory; by then we can also note that all the functions inside `createIncrement` can access the variables inside it, so it forms a binding across them - this process is called **Encapsulation**.

- `const [increment, log] = createIncrement();` calls `createIncrement` function and takes copies of the child functions out of it.

- `increment()` is being called 3 times, makes count 3 eventually.

- `log()` will now result in <output>Count is 0</output>
