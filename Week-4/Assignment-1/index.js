class TusharPromise {
    /**
     * @constructor constructor function
     * @param {function} cb 
     * @property promiseChain: storing each promise from the chain
     * @property handleError: a placeholder for the error function to catch errors
     * @property handleFinally: a placeholder for the finally function called on finally block
     */
    constructor(cb) {
        this.promiseChain = [];

        this.handleError = () => { };
        this.handleFinally = () => { };

        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);

        cb(this.resolve, this.reject);
    }

    /**
     * @function then: a thanable handler function to illustrate a Promise-like Object
     * @param {function} successCb: a callback function which will be called on success
     * @returns the current context
     */
    then(successCb) {
        this.promiseChain.push(successCb);
        return this;
    }

    /**
     * @function catch: a handler function to catch the errors when called
     * @param {function} errorCb: a callback function which will be called on error
     * @returns the current context
     */
    catch(errorCb) {
        this.handleError = errorCb;
        return this;
    }

    /**
     * @function finally: a function to handle finally call
     * @param {function} finallyCb: a callback function which will be called after the promise is fulfilled
     */
    finally(finallyCb) {
        this.handleFinally = finallyCb;
    }

    /**
     * @function resolve: a function to handle successful async operations
     * @param {any} value: a value to be returned after success
     */
    resolve(value) {
        let _value = value;

        try {
            this.promiseChain.forEach((p) => {
                _value = p(_value);
            });
        } catch (error) {
            this.promiseChain = [];
            this.reject(error);
        } finally {
            this.promiseChain = [];
            this.handleFinally();
        }
    }

    /**
     * @function reject: a function to handle erroneous async operations
     * @param {any} error: a value to be returned after error
     */
    reject(error) {
        this.handleError(error);
        this.promiseChain = [];
        this.handleFinally();
    }
}

const getRandomNumber = () => Math.round(Math.random() * 100);

const logFn = (msg) => console.log(`Promise resolved with ${msg}`);

const errFn = (err) => console.error(`Promise rejected with ${err}`);

const tp = (delay) => new TusharPromise((resolve, reject) => {
    const randomNumber = getRandomNumber();
    setTimeout(() => {
        if (randomNumber % 5 == 0) {
            reject(randomNumber);
        } else {
            resolve(randomNumber);
        }
    }, delay);
});

tp(3000).then(res => {
    logFn(res);
    return res + 1;
}).then(res => {
    logFn(res);
    return res + 1;
}).catch(err => {
    errFn(err);
}).finally(() => console.log('done'));

/**
 * Sample Output 1:
 * Promise resolved with 23
 * Promise resolved with 24
 * done
 * 
 * Sample Output 2:
 * Promise rejected with 20
 * done
 */
