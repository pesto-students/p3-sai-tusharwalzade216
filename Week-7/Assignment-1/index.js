const LinkedList = require("../Common/LinkedList");

/**
 * @function reverseList a function which reverses a given singly linked list
 * @summary Time Complexity - O(n), Space Complexity - O(1)
 * @param {LinkedList} list a singly linked list
 * @returns a reversed singly linked list
 */
function reverseList(list) {
    if (list.size <= 1) return list;

    let currentNode = list.head;
    let nextNode = prevNode = null;

    [list.head, list.tail] = [list.tail, list.head];

    while (currentNode !== null) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }

    list.head = prevNode;
    return list;
}

function test1() {
    try {
        const list = new LinkedList();
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);
        list.push(5);
        list.push(6);
        list.log();     // 1 -> 2 -> 3 -> 4 -> 5 -> 6

        reverseList(list);
        list.log();     // 6 -> 5 -> 4 -> 3 -> 2 -> 1
    } catch (error) {
        console.error(error);
    }
}
test1();

function test2() {
    try {
        const list = new LinkedList();
        list.push(2);
        list.push(7);
        list.push(8);
        list.push(9);
        list.push(10);
        list.log();     // 2 -> 7 -> 8 -> 9 -> 10

        reverseList(list);
        list.log();     // 10 -> 9 -> 8 -> 7 -> 2
    } catch (error) {
        console.error(error);
    }
}
test2();
