const Stack = require("../Common/LinkedList");
require("../Common/Utils");

/**
 * @function checkBalancedExpression a function which checks if a given expression is balanced or not
 * @summary Time Complexity - O(|x|), Space Complexity - O(|x|)
 * @param {String} x an expression string to check if balanced
 * @returns boolean
 */
function checkBalancedExpression(x) {
    if (typeof x !== "string")
        throw new Error("an expression is not a string!");

    if (x?.length > 32000)
        throw new Error("String is too long!");

    if (!x?._every(el => ["{", "}", "(", ")", "[", "]"].includes(el)))
        throw new Error("Invalid Expression!")

    // Using linked list as a stack
    let stack = new Stack();

    const strLen = x.length;

    for (let index = 0; index < strLen; index++) {
        let el = x[index];

        if (el === "{" || el === "(" || el === "[") {
            stack.push(el);
            continue;
        }

        if (stack.isEmpty) return false;

        let temp = stack.pop();
        if ((el == "}" && temp.value != "{") ||
            (el == ")" && temp.value != "(") ||
            (el == "]" && temp.value != "["))
            return false;
    }

    return stack.isEmpty;
}

function test() {
    try {
        console.log(checkBalancedExpression("{([])}"));     //  true
        console.log(checkBalancedExpression("()"));         //  true
        console.log(checkBalancedExpression("([]"));        //  false
        console.log(checkBalancedExpression("abcd"));       //  Error: Invalid Expression!
        console.log(checkBalancedExpression(1234));         //  Error: an expression is not a string!
    } catch (error) {
        console.error(error);
    }
}

test();