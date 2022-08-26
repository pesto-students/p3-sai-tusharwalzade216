const BinarySearchTree = require("../Common/BinarySearchTree");
const MyQueue = require("../Common/MyQueue");

/**
 * @function traverseLevelOrder travesres a tree by level order
 * @summary Time Complexity - O(n), Space Complexity - O(n)
 * @param {Node} root 
 * @returns levelwise node values as a 2-D array
 */
function traverseLevelOrder(root) {
    // returning empty for empty input
    if (!root) return [];

    let result = [], levelNodes;
    let queue = new MyQueue();
    let current = root;
    queue.enqueue(current);

    while (queue.size) {
        levelNodes = [];
        const qLen = queue.size;
        for (let i = 0; i < qLen; i++) {
            current = queue.dequeue();
            levelNodes.push(current.value);
            if (current.left) queue.enqueue(current.left);
            if (current.right) queue.enqueue(current.right);
        }
        result.push(levelNodes);
    }
    return result;
}

function test1() {
    try {
        let bst = new BinarySearchTree();
        bst.insertLevelOrder(3);
        bst.insertLevelOrder(9);
        bst.insertLevelOrder(20);
        // bst.insertLevelOrder(null);  //  Error: Invalid value
        // bst.insertLevelOrder(null);  //  Error: Invalid value
        bst.insertLevelOrder(15);
        bst.insertLevelOrder(7);
        console.log(traverseLevelOrder(bst.root));  //  [ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]
    } catch (e) {
        console.warn(e);
    }
}
test1();

function test2() {
    try {
        let bst = new BinarySearchTree();
        bst.insertLevelOrder(1);
        console.log(traverseLevelOrder(bst.root));  //  [ [ 1 ] ]
    } catch (e) {
        console.warn(e);
    }
}
test2();

function test3() {
    try {
        let bst = new BinarySearchTree();
        console.log(traverseLevelOrder(bst.root));  //  [ ]
    } catch (e) {
        console.warn(e);
    }
}
test3();
