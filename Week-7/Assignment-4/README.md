# Week 7 - Assignment 4

[Welcome to Pesto assignment - 4 from the Week 7](https://pestotech.teachable.com/courses/1782350/lectures/40231578)

## Parenthesis Checker

Given an expression string x. Examine whether the pairs and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp. For example, the function should return 'true' for exp= “[()]{}{()()}” and 'false' for exp = “[(])”.

Example 1:

Input: {([])}

Output: true

Explanation: { ( [ ] ) }. Same colored brackets can form balaced pairs, with 0 number of unbalanced bracket.

Example 2:

Input: ()

Output: true

Explanation: (). Same bracket can form balanced pairs, and here only 1 type of bracket is present and in balanced way.

Example 3:

Input: ([]

Output: false

Explanation: ([]. Here square bracket is balanced but the small bracket is not balanced and Hence, the output will be unbalanced.

#### Expected Time Complexity: O(|x|)

#### Expected Auixilliary Space: O(|x|)

#### Constraints: 1 ≤ |x| ≤ 32000