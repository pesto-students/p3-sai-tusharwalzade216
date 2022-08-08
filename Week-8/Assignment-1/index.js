const BinarySearchTree = require("../Common/BinarySearchTree");

// Binary tree - each node can have at most 2 children

/**
 * @function findMaxDepth finds maximum depth of a binary tree
 * @summary Time Complexity - O(|nodes| + depth), Space Complexity - O(1)
 * @param root a root node
 * @returns Interger - maximum depth of a provided tree
 */
function getMaxDepth(root) {
    if (!root) return 0;
    else if (root.left && root.right) {
        const depthL = getMaxDepth(root.left);
        const depthR = getMaxDepth(root.right);
        const max = depthL > depthR ? depthL : depthR;
        return max + 1;
    } else if (root.left) {
        return getMaxDepth(root.left) + 1;
    } else {
        return getMaxDepth(root.right) + 1;
    }
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
        console.log(JSON.stringify(bst));
        // {"root":{"value":3,"left":{"value":9,"left":null,"right":null},"right":{"value":20,"left":{"value":15,"left":null,"right":null},"right":{"value":7,"left":null,"right":null}}}}

        /**
         *      3
         *     /  \
         *   9     20
         *        /  \
         *      15    7
         */

        console.log(getMaxDepth(bst.root));     //  3
    } catch (error) {
        console.error(error);
    }
}

test1();

function test2() {
    try {
        let bst = new BinarySearchTree();
        bst.insertLevelOrder(1);
        // bst.insertLevelOrder(null);  //  Error: Invalid value
        bst.insertLevelOrder(2);
        console.log(JSON.stringify(bst));
        // {"root":{"value":1,"left":{"value":2,"left":null,"right":null},"right":null}}

        /**
         *      1
         *     /
         *    2
         */

        console.log(getMaxDepth(bst.root));     //  2
    } catch (error) {
        console.error(error);
    }
}

test2();