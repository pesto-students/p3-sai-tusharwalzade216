/**
 * @method _every a method which checks if callback is true for every character in string
 * @param {function} cb 
 * @returns boolean
 */
 String.prototype._every = function (cb) {
    const strLen = this.length;
    for (let index = 0; index < strLen; index++) {
        if (!cb(this[index])) return false;
    }
    return true;
}

module.exports = String.prototype._every;