const mathOperations = {
    validateInput: function (a, b) {
        return typeof a === "number" && typeof b === "number"
            && !isNaN(a) && !isNaN(b)
            && Number.isFinite(a) && Number.isFinite(b);
    },
    sum: function (a, b) {
        if (this.validateInput(a, b))
            return a + b;
        throw new TypeError('Invalid inputs provided');
    },
    diff: function (a, b) {
        if (this.validateInput(a, b))
            return a - b;
        throw new TypeError('Invalid inputs provided');
    },
    product: function (a, b) {
        if (this.validateInput(a, b))
            return a * b;
        throw new TypeError('Invalid inputs provided');
    }
}

module.exports = mathOperations;