# Week 7 - Assignment 6

[Welcome to Pesto assignment - 6 from the Week 7](https://pestotech.teachable.com/courses/1782350/lectures/40231578)

## Implement a Queue using 2 stack

Implement a Queue using 2 stacks s1 and s2 . A Query Q is of 2 Types (i) 1 x (a query of this type means pushing 'x' into the queue) (ii) 2 (a query of this type means to pop element from queue and print the popped element)

Example 1:

Input:

5

1 2 1 3 2 1 4 2

Output:

2 3

Explanation:

In the first testcase

1 2 the queue will be {2}

1 3 the queue will be {2 3}

2 poped element will be 2 the queue will be {3}

1 4 the queue will be {3 4}

2 poped element will be 3.

Example 2:

Input:

4
1 2 2 2 1 4

Output:

2 -1

Explanation:

In the second testcase

1 2 the queue will be {2}

2 poped element will be 2 and then the queue will be empty 2 the queue is empty and hence -1

1 4 the queue will be {4}.

#### Expected Time Complexity : O(1) for push() and O(N) for pop() or O(N) for push() andO(1) for pop()

#### Expected Auxilliary Space : O(1).

#### Constraints: 1 <= Q <= 100 1 <= x <= 100
