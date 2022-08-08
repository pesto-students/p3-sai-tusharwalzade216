const mathOperations = require("./calculator");


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

test("sum of invalid numbers should throw a TypeError", () => {
    expect(() => mathOperations.sum(undefined, undefined)).toThrow(TypeError);
    expect(() => mathOperations.sum(null, null)).toThrow(TypeError);
    expect(() => mathOperations.sum(null, undefined)).toThrow(TypeError);
    expect(() => mathOperations.sum(undefined, null)).toThrow(TypeError);
    expect(() => mathOperations.sum(1, undefined)).toThrow(TypeError);
    expect(() => mathOperations.sum(undefined, null)).toThrow(TypeError);
    expect(() => mathOperations.sum(1, null)).toThrow(TypeError);
    expect(() => mathOperations.sum(null, 1)).toThrow(TypeError);
    expect(() => mathOperations.sum(null, NaN)).toThrow(TypeError);
    expect(() => mathOperations.sum(NaN, null)).toThrow(TypeError);
    expect(() => mathOperations.sum(2, NaN)).toThrow(TypeError);
    expect(() => mathOperations.sum(NaN, 2)).toThrow(TypeError);
    expect(() => mathOperations.sum('', 1)).toThrow(TypeError);
    expect(() => mathOperations.sum(1, '')).toThrow(TypeError);
    expect(() => mathOperations.sum(2, '2')).toThrow(TypeError);
    expect(() => mathOperations.sum('abcd', undefined)).toThrow(TypeError);
    expect(() => mathOperations.sum(undefined, 'pqrs')).toThrow(TypeError);
});

test("sum(2, 2) should be defined and equals to 4", () => {
    expect(mathOperations.sum(2, 2)).toBeDefined();
    expect(mathOperations.sum(2, 2)).toBe(4);
});

test("3 <= sum(2, 2) <= 5", () => {
    expect(mathOperations.sum(2, 2)).toBeGreaterThan(3);
    expect(mathOperations.sum(2, 2)).toBeGreaterThanOrEqual(4);
    expect(mathOperations.sum(2, 2)).toBeLessThan(5);
    expect(mathOperations.sum(2, 2)).toBeLessThanOrEqual(5);
});

test("sum(2.5, 2.5) should be truthy and close to 5", () => {
    expect(mathOperations.sum(2.5, 2.5)).toBeTruthy();
    expect(mathOperations.sum(2.5, 2.5)).toBeCloseTo(5);
});

test("sum(-2.5, 2.5) should be falsy", () => {
    expect(mathOperations.sum(-2.5, 2.5)).toBeFalsy();
});

test("sum(-2.5, 5.5) should be even", () => {
    expect(mathOperations.sum(-2.5, 2.5)).toBeEven();
});

test("sum(2.5, 6.5) should be odd", () => {
    expect(mathOperations.sum(2.5, 6.5)).not.toBeEven();
});

test("diff of invalid numbers should throw a TypeError", () => {
    expect(() => mathOperations.diff(undefined, undefined)).toThrow(TypeError);
    expect(() => mathOperations.diff(null, null)).toThrow(TypeError);
    expect(() => mathOperations.diff(null, undefined)).toThrow(TypeError);
    expect(() => mathOperations.diff(undefined, null)).toThrow(TypeError);
    expect(() => mathOperations.diff(1, undefined)).toThrow(TypeError);
    expect(() => mathOperations.diff(undefined, null)).toThrow(TypeError);
    expect(() => mathOperations.diff(1, null)).toThrow(TypeError);
    expect(() => mathOperations.diff(null, 1)).toThrow(TypeError);
    expect(() => mathOperations.diff(null, NaN)).toThrow(TypeError);
    expect(() => mathOperations.diff(NaN, null)).toThrow(TypeError);
    expect(() => mathOperations.diff(2, NaN)).toThrow(TypeError);
    expect(() => mathOperations.diff(NaN, 2)).toThrow(TypeError);
    expect(() => mathOperations.diff('', 1)).toThrow(TypeError);
    expect(() => mathOperations.diff(1, '')).toThrow(TypeError);
    expect(() => mathOperations.diff(2, '2')).toThrow(TypeError);
    expect(() => mathOperations.diff('abcd', undefined)).toThrow(TypeError);
    expect(() => mathOperations.diff(undefined, 'pqrs')).toThrow(TypeError);
});

test("diff(10, 5) should be defined and equals to 5", () => {
    expect(mathOperations.diff(10, 5)).toBeDefined();
    expect(mathOperations.diff(10, 5)).toEqual(5);
});

test("4 <= diff(10, 5) <= 6", () => {
    expect(mathOperations.diff(10, 5)).toBeLessThan(6);
    expect(mathOperations.diff(10, 5)).toBeLessThanOrEqual(10);
    expect(mathOperations.diff(10, 5)).toBeGreaterThan(4);
    expect(mathOperations.diff(10, 5)).toBeGreaterThanOrEqual(5);
});

test("diff(10, 5.5) should be truthy and close to 4.5", () => {
    expect(mathOperations.diff(10, 5.5)).toBeTruthy();
    expect(mathOperations.diff(10, 5.5)).toBeCloseTo(4.5);
});

test("diff(5, 15.5) should be truthy", () => {
    expect(mathOperations.diff(5, 15.5)).toBeCloseTo(-10.5);
});

test("diff(10, 10) should be falsy", () => {
    expect(mathOperations.diff(10, 10)).toBeFalsy();
});

test("diff(10, 10) should be even", () => {
    expect(mathOperations.diff(10, 6)).toBeEven();
});

test("product of invalid numbers should throw a TypeError", () => {
    expect(() => mathOperations.product(undefined, undefined)).toThrow(TypeError);
    expect(() => mathOperations.product(null, null)).toThrow(TypeError);
    expect(() => mathOperations.product(null, undefined)).toThrow(TypeError);
    expect(() => mathOperations.product(undefined, null)).toThrow(TypeError);
    expect(() => mathOperations.product(1, undefined)).toThrow(TypeError);
    expect(() => mathOperations.product(undefined, null)).toThrow(TypeError);
    expect(() => mathOperations.product(1, null)).toThrow(TypeError);
    expect(() => mathOperations.product(null, 1)).toThrow(TypeError);
    expect(() => mathOperations.product(null, NaN)).toThrow(TypeError);
    expect(() => mathOperations.product(NaN, null)).toThrow(TypeError);
    expect(() => mathOperations.product(2, NaN)).toThrow(TypeError);
    expect(() => mathOperations.product(NaN, 2)).toThrow(TypeError);
    expect(() => mathOperations.product('', 1)).toThrow(TypeError);
    expect(() => mathOperations.product(1, '')).toThrow(TypeError);
    expect(() => mathOperations.product(2, '2')).toThrow(TypeError);
    expect(() => mathOperations.product('abcd', undefined)).toThrow(TypeError);
    expect(() => mathOperations.product(undefined, 'pqrs')).toThrow(TypeError);
});

test("product(5, 5) should be defined and equals to 25", () => {
    expect(mathOperations.product(5, 5)).toBeDefined();
    expect(mathOperations.product(5, 5)).toBe(25);
});

test("20 <= product(5, 5) <= 26", () => {
    expect(mathOperations.product(5, 5)).toBeGreaterThan(20);
    expect(mathOperations.product(5, 5)).toBeGreaterThanOrEqual(20);
    expect(mathOperations.product(5, 5)).toBeLessThan(26);
    expect(mathOperations.product(5, 5)).toBeLessThanOrEqual(25);
});

test("product(5.5, 5.5) should be truthy and close to 30.25", () => {
    expect(mathOperations.product(5.5, 5.5)).toBeTruthy();
    expect(mathOperations.product(5.5, 5.5)).toBeCloseTo(30.25);
});

test("product(5, 0) should be falsy", () => {
    expect(mathOperations.product(5, 0)).toBeFalsy();
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
 *   √ sum of invalid numbers should throw a TypeError (112 ms)
 *   √ sum(2, 2) should be defined and equals to 4 (2 ms)
 *   √ 3 <= sum(2, 2) <= 5 (9 ms)
 *   √ sum(2.5, 2.5) should be truthy and close to 5 (3 ms)
 *   √ sum(-2.5, 2.5) should be falsy (2 ms)
 *   √ sum(-2.5, 5.5) should be even (7 ms)
 *   √ sum(2.5, 6.5) should be odd (2 ms)
 *   √ diff of invalid numbers should throw a TypeError (77 ms)
 *   √ diff(10, 5) should be defined and equals to 5 (6 ms)
 *   √ 4 <= diff(10, 5) <= 6 (2 ms)
 *   √ diff(10, 5.5) should be truthy and close to 4.5 (2 ms)
 *   √ diff(5, 15.5) should be truthy (2 ms)
 *   √ diff(10, 10) should be falsy (3 ms)
 *   √ diff(10, 10) should be even (1 ms)
 *   √ product of invalid numbers should throw a TypeError (50 ms)
 *   √ product(5, 5) should be defined and equals to 25 (6 ms)
 *   √ 20 <= product(5, 5) <= 26 (8 ms)
 *   √ product(5.5, 5.5) should be truthy and close to 30.25 (2 ms)
 *   √ product(5, 0) should be falsy (1 ms)
 *   √ product(5, 4) should be even (2 ms)
 * 
 * Test Suites: 1 passed, 1 total  
 * Tests:       20 passed, 20 total
 * Snapshots:   0 total
 * Time:        3.993 s, estimated 4 s
 * Ran all test suites.
 */
