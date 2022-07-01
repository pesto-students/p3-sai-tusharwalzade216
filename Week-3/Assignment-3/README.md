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