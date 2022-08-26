const LinkedList = require("../Common/LinkedList");

/**
 * @function getNextLarge a function which finds next greater element for a provided node
 * @param {Node} nextNode a next node reference
 * @param {Number} cur a current node value
 * @returns next large value if present otherwise -1
 */
const getNextLarge = function (nextNode, cur) {
    while (nextNode) {
        if (nextNode.value > cur) return nextNode.value;
        nextNode = nextNode.next;
    }
    return -1;
};

/**
 * @function findNextGreater a function which finds next greater elements for all the given list
 * @summary Time Complexity - O(n), Space Complexity - O(n)
 * @param {LinkedList} list a singly linked
 * @returns an array of greater elements
 */
const findNextGreater = function (list) {
    if (list.isEmpty) throw new Error("Empty list provided!");
    if (list.size > 106) throw new Error("List capacity exceeded!");

    let arr = [];
    let currentNode = list.head;

    while (currentNode) {
        if (currentNode.value > 1018) throw new Error("Node exceeding value limit!");
        arr.push(getNextLarge(currentNode.next, currentNode.value));
        currentNode = currentNode.next;
    }

    return arr;
};

function test1() {
    try {
        let list = new LinkedList();
        list.push(1);
        list.push(3);
        list.push(2);
        list.push(4);

        console.log(findNextGreater(list));     //  [ 3, 4, 4, -1 ]
    } catch (error) {
        console.error(error);
    }
}
test1();

function test2() {
    try {
        let list = new LinkedList();
        list.push(6);
        list.push(8);
        list.push(0);
        list.push(1);
        list.push(3);

        console.log(findNextGreater(list));     //  [ 8, -1, 1, 3, -1 ]
    } catch (error) {
        console.error(error);
    }
}
test2();

function test3() {
    try {
        let list = new LinkedList();
        list.push(6);
        list.push(8);
        list.push(1020);

        console.log(findNextGreater(list));     //  Error: Node exceeding value limit!
    } catch (error) {
        console.error(error);
    }
}
test3();

function test4() {
    try {
        let list = new LinkedList();

        console.log(findNextGreater(list));     //  Error: Empty list provided!
    } catch (error) {
        console.error(error);
    }
}
test4();
