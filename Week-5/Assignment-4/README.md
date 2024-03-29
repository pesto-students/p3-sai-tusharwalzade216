# Week 5 - Assignment 4

[Welcome to Pesto assignment - 4 from the Week 5](https://pestotech.teachable.com/courses/1782350/lectures/40231574)

Create a simple Javascript function code for addition, subtraction, and multiplication of 2 numbers and write the corresponding Jest based tests for it.

```
const mathOperations = {
    sum: function(a, b) {
        return a + b;
    },
    diff: function(a, b) {
        return a - b;
    },
    product: function(a, b) {
        return a * b;
    }
}

module.exports = mathOperations;
```

## Guidelines:
1. Jest should've been installed.
2. Package.json file should have the config for running test cases.
3. Test case file should've been created. For example: calculator.test.js
4. BDD style tests for each function should've been created for the same.
5. All test cases should pass.
6. Reference: https://www.softwaretestinghelp.com/jest-testing-tutorial/

## Outcome:
1. Understanding the importance of writing test cases.
2. How BDD works.
3. What are the packages required for writing test cases?
4. How to configure test cases in package.json file.
