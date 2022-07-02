# Week 3 - Assignment 1

[Welcome to Pesto assignment - 1 from the Week 3](https://pestotech.teachable.com/courses/1782350/lectures/40231498)

Create a memoize function that remembers previous inputs and stores them in cache so that it won't have to compute the same inputs more than once. The function will take an unspecified number of integer inputs and a reducer method. (1.5hours)

## Example:

<pre>
// Given reducer method:
function add(a, b) {
  return a + b;
}
// Create a method called memoize such that:
const memoizeAdd = memoize(add);
// then calling...
memoizeAdd(100, 100); // returns 200
memoizeAdd(100); //returns 100
memoizeAdd(100, 200); // returns 300
memoizeAdd(100, 100); // returns 200 without computing
</pre>

## Guidelines:

1. The memoize function should be written from scratch.
2. 3rd party libraries such as loaddash or underscore should not have been used.
3. The function should carry a name which should denote the functionality of it.
4. The function should be able to take n number of arguments.

## Outcomes:

1. Understanding how caching works.
2. Why is it important?
3. The problem memoization solves.

<hr />

# Solution

Simply run `index.js` to see the time difference between 2 function calls with the same inputs

## How caching works

- When a function gets called for the first time, the caching mechanism stores the snapshot of the inputs along with the computed result as a key-value pair in the memory for the future reference.

- Then if we need to call the same function with same inputs again, we do not want to compute the same result for another time, rather we could use the result which is stored in the cache. Here cache helps us to save the computation time, it simply goes through the stored snapshots & returns the matching result.

- If the key for the inputs isn't there, it simply saves it along with the computation & then returns the output.

## Why is it important?

- Going beyond the simple computations, there are some places where more data might need to be processed where time complexity really matters.

- For example, some space research center is getting chunks of some megabytes and need to plot some charts out of it, they would like to see those at better speed.

- Caching is saviour technique for situations like this only so that user experience can be optimized & time complexity would be as less as possible.

- As it can return the output just by matching the input with stored versions, it is really important technique to save the computation time.

## What problem memoization solves?

- Memoization saves the computation times & reduces time complexity by caching the input-output pairs and returning back whenever asked for in the ongoing context.

#### However it reduces time complexity, it is not always recommended to use memoization because it trades our memory & may cause increased space complexity.
