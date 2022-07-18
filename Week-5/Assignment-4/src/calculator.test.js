const mathOperations = require("./calculator");

test("sum(2, 2) should be defined", () => {
    expect(mathOperations.sum(2, 2)).toBeDefined();
});

test("sum(2, 2) should be 4", () => {
    expect(mathOperations.sum(2, 2)).toBe(4);
});

test("sum(2, 2) should be greater than 3", () => {
    expect(mathOperations.sum(2, 2)).toBeGreaterThan(3);
});

test("sum(2, 2) should be greater than or equal to 4", () => {
    expect(mathOperations.sum(2, 2)).toBeGreaterThanOrEqual(4);
});

test("sum(2, 2) should be less than 5", () => {
    expect(mathOperations.sum(2, 2)).toBeLessThan(5);
});

test("sum(2, 2) should be less than or equal to 5", () => {
    expect(mathOperations.sum(2, 2)).toBeLessThanOrEqual(5);
});

test("sum(2.5, 2.5) should be close to 5", () => {
    expect(mathOperations.sum(2.5, 2.5)).toBeCloseTo(5);
});

test("sum(2.5, 2.5) should be truthy", () => {
    expect(mathOperations.sum(2.5, 2.5)).toBeTruthy();
});

test("sum(-2.5, 2.5) should be falsy", () => {
    expect(mathOperations.sum(-2.5, 2.5)).toBeFalsy();
});

test("diff(10, 5) should be defined", () => {
    expect(mathOperations.diff(10, 5)).toBeDefined();
});

test("diff(10, 5) should be 5", () => {
    expect(mathOperations.diff(10, 5)).toEqual(5);
});

test("diff(10, 5) should be less than 6", () => {
    expect(mathOperations.diff(10, 5)).toBeLessThan(6);
});

test("diff(10, 5) should be less than or equal to 10", () => {
    expect(mathOperations.diff(10, 5)).toBeLessThanOrEqual(10);
});

test("diff(10, 5) should be greater than 4", () => {
    expect(mathOperations.diff(10, 5)).toBeGreaterThan(4);
});

test("diff(10, 5) should be greater than or equal to 5", () => {
    expect(mathOperations.diff(10, 5)).toBeGreaterThanOrEqual(5);
});

test("diff(10, 5) should be close to 5", () => {
    expect(mathOperations.diff(10, 5)).toBeCloseTo(5);
});

test("diff(10, 5) should be truthy", () => {
    expect(mathOperations.diff(10, 5)).toBeTruthy();
});

test("diff(10, 10) should be falsy", () => {
    expect(mathOperations.diff(10, 10)).toBeFalsy();
});

test("product(5, 5) should be defined", () => {
    expect(mathOperations.product(5, 5)).toBeDefined();
});

test("product(5, 5) should be 25", () => {
    expect(mathOperations.product(5, 5)).toBe(25);
});

test("product(5, 5) should be greater than 20", () => {
    expect(mathOperations.product(5, 5)).toBeGreaterThan(20);
});

test("product(5, 5) should be greater than or Equal to 20", () => {
    expect(mathOperations.product(5, 5)).toBeGreaterThanOrEqual(20);
});

test("product(5, 5) should be less than 26", () => {
    expect(mathOperations.product(5, 5)).toBeLessThan(26);
});

test("product(5, 5) should be less than or Equal to 25", () => {
    expect(mathOperations.product(5, 5)).toBeLessThanOrEqual(25);
});

test("product(5.5, 5.5) should be close to 30.25", () => {
    expect(mathOperations.product(5.5, 5.5)).toBeCloseTo(30.25);
});

test("product(5.5, 5.5) should be truthy", () => {
    expect(mathOperations.product(5.5, 5.5)).toBeTruthy();
});

test("product(5, 0) should be falsy", () => {
    expect(mathOperations.product(5, 0)).toBeFalsy();
});

expect.extend({
    toBeEven(expectedValue) {
        if (expectedValue % 2 === 0) {
            return {
                pass: true,
                message: () => `${expectedValue} is Even`
            };
        } else {
            return {
                pass: false,
                message: () => `${expectedValue} is Odd`
            };
        }
    }
});

test("sum(2.5, 5.5) should be even", () => {
    expect(mathOperations.sum(-2.5, 2.5)).toBeEven();
});

test("diff(10, 10) should be even", () => {
    expect(mathOperations.diff(10, 6)).toBeEven();
});

test("product(5, 4) should be even", () => {
    expect(mathOperations.product(5, 0)).toBeEven();
});

/**
 * Sample output:
 * PS D:\Pesto\Assignments\p3-sai-tusharwalzade216\Week-5\Assignment-4> npm test
 * 
 * > assignment-5.4@1.0.0 test
 * 
 *  PASS  src/calculator.test.js
 *   √ sum(2, 2) should be defined (14 ms)
 *   √ sum(2, 2) should be 4 (1 ms)
 *   √ sum(2, 2) should be greater than 3 (3 ms)
 *   √ sum(2, 2) should be greater than or equal to 4 (2 ms)
 *   √ sum(2, 2) should be less than 5 (3 ms)
 *   √ sum(2, 2) should be less than or equal to 5 (1 ms)
 *   √ sum(2.5, 2.5) should be close to 5 (2 ms)
 *   √ sum(2.5, 2.5) should be truthy (4 ms)
 *   √ sum(-2.5, 2.5) should be falsy (2 ms)
 *   √ diff(10, 5) should be defined (3 ms)
 *   √ diff(10, 5) should be 5 (9 ms)
 *   √ diff(10, 5) should be less than 6 (15 ms)
 *   √ diff(10, 5) should be less than or equal to 10 (3 ms)
 *   √ diff(10, 5) should be greater than 4 (1 ms)
 *   √ diff(10, 5) should be greater than or equal to 5 (1 ms)
 *   √ diff(10, 5) should be close to 5 (2 ms)
 *   √ diff(10, 5) should be truthy (1 ms)
 *   √ diff(10, 10) should be falsy (2 ms)
 *   √ product(5, 5) should be defined (1 ms)
 *   √ product(5, 5) should be 25 (4 ms)
 *   √ product(5, 5) should be greater than 20 (2 ms)
 *   √ product(5, 5) should be greater than or Equal to 20 (3 ms)
 *   √ product(5, 5) should be less than 26 (2 ms)
 *   √ product(5, 5) should be less than or Equal to 25 (1 ms)
 *   √ product(5.5, 5.5) should be close to 30.25 (1 ms)
 *   √ product(5.5, 5.5) should be truthy (2 ms)
 *   √ product(5, 0) should be falsy (1 ms)
 *   √ sum(2.5, 5.5) should be even (2 ms)
 *   √ diff(10, 10) should be even (31 ms)
 *   √ product(5, 4) should be even (3 ms)
 * 
 * Test Suites: 1 passed, 1 total
 * Tests:       30 passed, 30 total
 * Snapshots:   0 total
 * Time:        4.407 s, estimated 4 s
 * Ran all test suites.
 */
