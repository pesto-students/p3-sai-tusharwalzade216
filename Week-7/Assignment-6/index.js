/**
 * @function Queue a function to generate a Queue using two stacks
 */
function Queue() {
    let s1 = [];
    let s2 = [];

    // Time Complexity - O(n), Ω(1), Space Complexity - O(1)
    this.enqueue = function (value) {
        if (s2.length > 0) {
            let len = s2.length;
            for (let i = 0; i < len; i++) {
                let p = s2.pop()
                s1.push(p);
            }
        }
        s1.push(value);
    }

    // Time Complexity - O(n), Ω(1), Space Complexity - O(1)
    this.dequeue = function () {
        if (s2.length > 0) {
            s2.pop();
        } else if (s2.length === 0) {
            if (s1.length === 0) throw new Error("Queue is already empty");
            else if (s1.length === 1) return s1.pop();
            else if (s1.length > 0) {
                while (s1.length) {
                    s2.push(s1.pop());
                }
                return s2.pop();
            }
        }
    }

    this.log = function () {
        console.log(s1, s2);
    }
}

function test1() {
    try {
        let q = new Queue();
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(1);
        q.enqueue(3);
        q.enqueue(2);
        q.enqueue(1);
        q.enqueue(4);
        q.enqueue(2);

        q.log();        //  [1, 2, 1, 3, 2, 1, 4, 2], []
        q.dequeue();
        q.dequeue();
        q.log();        //  [], [2, 4, 1, 2, 3, 1]
    } catch (error) {
        console.error(error);
    }
}
test1();
