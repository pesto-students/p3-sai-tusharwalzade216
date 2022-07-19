const Fib = (n) => ({
    [Symbol.iterator]: function () {
        let index = 1, prev = 0, next = 0;
        return {
            next: () => {
                if (index++ <= n) {
                    [prev, next] = [next, ((prev + next) || 1)];
                    return { done: false, value: prev };
                }
                return { done: true, value: undefined };
            }
        }
    }
});

console.log([...Fib(10)]);		// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

for (let num of Fib(7)) {
    console.log(num);
}
/** Output:
 * 0
 * 1
 * 1
 * 2
 * 3
 * 5
 * 8
 */