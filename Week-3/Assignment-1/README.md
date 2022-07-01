# Week 3 - Assignment 1

[Welcome to Pesto assignment - 1 from the Week 3](https://pestotech.teachable.com/courses/1782350/lectures/40231498)

Create a memoize function that remembers previous inputs and stores them in cache so that it won’t have to compute the same inputs more than once. The function will take an unspecified number of integer inputs and a reducer method. (1.5hours)

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
