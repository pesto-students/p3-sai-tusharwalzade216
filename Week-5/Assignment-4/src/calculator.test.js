const mathOperations = require("./calculator");

test("sum(2, 2) should be 4", () => {
    expect(mathOperations.sum(2, 2)).toBe(4);
});

test("sum(2, 2) should be greater than 3", () => {
    expect(mathOperations.sum(2, 2)).toBeGreaterThan(3);
});

test("diff(10, 5) should be 5", () => {
    expect(mathOperations.diff(10, 5)).toBe(5);
});

test("diff(10, 5) should be less than or equal to 10", () => {
    expect(mathOperations.diff(10, 5)).toBeLessThanOrEqual(10);
});

test("product(5, 5) should be 25", () => {
    expect(mathOperations.product(5, 5)).toBe(25);
});

test("product(5, 5) should be greater than 20", () => {
    expect(mathOperations.product(5, 5)).toBeGreaterThan(20);
});

/**
 * Sample output:
 * PS D:\Pesto\Assignments\p3-sai-tusharwalzade216\Week-5\Assignment-4> npm test
 * 
 * > assignment-5.4@1.0.0 test
 * > jest
 * 
 *  PASS  src/calculator.test.js
 *   √ sum(2, 2) should be 4 (9 ms)
 *   √ sum(2, 2) should be greater than 3 (3 ms)
 *   √ diff(10, 5) should be 5 (6 ms)
 *   √ diff(10, 5) should be less than or equal to 10 (2 ms)
 *   √ product(5, 5) should be 25 (2 ms)
 *   √ product(5, 5) should be greater than 20 (4 ms)
 * 
 * Test Suites: 1 passed, 1 total
 * Tests:       6 passed, 6 total
 * Snapshots:   0 total
 * Time:        3.03 s
 * Ran all test suites.
 */
