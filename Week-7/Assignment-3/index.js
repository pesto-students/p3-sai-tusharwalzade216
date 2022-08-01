const LinkedList = require("../Common/LinkedList");


/**
 * @function detectLoop a function which detects if a given list has a loop
 * @summary Time Complexity - O(n), Space Complexity - O(1)
 * @description Algo - Floyd’s Tortoise and Hare Algorithm
 * @param {LinkedList} list a singly linked list
 * @param {Number} x an index position to generate loop
 * @returns boolean
 */
function detectLoop(list, x) {
    if (x < 0 || x >= list.size) throw new Error("Invalid index position supplied!")
    // if (x === 0) return false;

    // generate a loop at a valid xth position
    let counter = 0, currentNode = list.head;
    while (counter < x) {
        currentNode = currentNode.next;
        counter++;
    }

    let nodeToConnect = currentNode;
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = nodeToConnect;

    // detect a loop
    let slow = fast = list.head;

    while (fast && fast.next) {
        fast = fast.next.next;

        slow = slow.next;

        if (fast === slow) return true;
    }
    return false;
}

function test1() {
    try {
        let list = new LinkedList();
        list.push(1);
        list.push(3);
        list.push(4);
        list.log();             //  1 -> 3 -> 4

        const isLoop = detectLoop(list, 2);
        console.log(isLoop);     //  true
    } catch (error) {
        console.error(error);
    }
}
test1();

function test2() {
    try {
        let list = new LinkedList();
        list.push(1);
        list.push(8);
        list.push(3);
        list.push(4);
        list.log();             //  1 -> 8 -> 3 -> 4

        const isLoop = detectLoop(list, 0);
        console.log(isLoop);     //  false
    } catch (error) {
        console.error(error);
    }
}
test2();


function test3() {
    try {
        let list = new LinkedList();
        list.push(1);
        list.push(2);
        list.log();             //  1 -> 2

        const isLoop = detectLoop(list, -1);
        console.log(isLoop);     //  Error: Invalid index position supplied!

        const isLoop2 = detectLoop(list, 2);
        console.log(isLoop2);     //  Error: Invalid index position supplied!
    } catch (error) {
        console.error(error);
    }
}
test3();
