const doTask1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('task 1');
        }, Math.round(Math.random() * 1000));
    })
};

const doTask2 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('task 2');
        }, Math.round(Math.random() * 1000));
    })
};

const doTask3 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('task 3');
        }, Math.round(Math.random() * 1000));
    })
};

const aw = async () => {
    try {
        const response1 = await doTask1();
        console.log(response1);
        const response2 = await doTask2();
        console.log(response2);
        const response3 = await doTask3();
        console.log(response3);
    } catch (err) {
        console.error('async await error:', err);
    } finally {
        console.info('async await done');
    }
};

/* aw(); */

/** Sample Output:
 * task 1
 * task 2
 * task 3
 * async await done
 */

const generator = function* () {
    yield doTask1().then(res => console.log(res)).catch(err => console.err(err)).finally(() => console.info('task 1 done'));
    yield doTask2().then(res => console.log(res)).catch(err => console.err(err)).finally(() => console.info('task 2 done'));
    yield doTask3().then(res => console.log(res)).catch(err => console.err(err)).finally(() => console.info('task 3 done'));
    return { done: true };
};

const gen = generator();
gen.next();
gen.next();
gen.next();

/** Sample Output:
 * task 3
 * task 3 done
 * task 1
 * task 1 done
 * task 2
 * task 2 done
 */