const LinkedList = require("../Common/LinkedList");

/**
 * @function rotateList a function which rotates a given singly linked list by provided number
 * @summary Time Complexity - O(n), Space Complexity - O(1)
 * @param {LinkedList} list a singly linked list
 * @param {Number} k number of rotations
 * @returns rotated list
 */
function rotateList(list, k) {
    if (k < 1 || k > list.size - 1) throw new Error("Invalid number of rotations supplied!")
    if (list.size <= 1 || k === list.size - 1) return list;

    let currentNode = list.head;
    let prevNode = list.head;
    let oldHead = list.head;
    let counter = 0;

    while (currentNode.next) {
        if (counter === k) {
            list.head = currentNode;
            prevNode.next = null;
        }

        prevNode = currentNode;
        currentNode = currentNode.next;
        counter++;
    }
    currentNode.next = oldHead;
    return list;
}

function test1() {
    try {
        let list = new LinkedList();
        list.push(2);
        list.push(4);
        list.push(7);
        list.push(8);
        list.push(9);
        list.log();     //  2 -> 4 -> 7 -> 8 -> 9

        rotateList(list, 3);
        list.log();     //  8 -> 9 -> 2 -> 4 -> 7
    } catch (error) {
        console.error(error);
    }
}
test1();

function test2() {
    try {
        let list = new LinkedList();
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);
        list.push(5);
        list.push(6);
        list.push(7);
        list.push(8);
        list.log();     //  1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8

        rotateList(list, 4);
        list.log();     //  5 -> 6 -> 7 -> 8 -> 1 -> 2 -> 3 -> 4
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
        list.push(3);
        list.log();     //  1 -> 2 -> 3

        rotateList(list, 3);
        list.log();     //  Error: Invalid number of rotations supplied!
    } catch (error) {
        console.error(error);
    }
}
test3();
