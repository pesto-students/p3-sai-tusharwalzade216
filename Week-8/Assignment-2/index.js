const BinarySearchTree = require("../Common/BinarySearchTree");

/**
 * @function isBSTValid checks if the binary tree is valid
 * @param {Node} root 
 * @returns boolean
 */
function isBSTValid(node) {
    if (node == null) return true;

    // if left is > than node, the tree isn't BST
    if (node.left != null && node.left.value > node.value)
        return false;

    // if right is < than node, the tree isn't BST
    if (node.right != null && node.right.value < node.value)
        return false;

    // if the left or right is not a BST, the tree isn't BST
    if (!isBSTValid(node.left) || !isBSTValid(node.right))
        return false;

    return true;
}

function test1() {
    try {
        let bst = new BinarySearchTree();
        bst.insert(2);
        bst.insert(1);
        bst.insert(3);

        console.log(isBSTValid(bst.root));
    } catch (error) {
        console.error(error);
    }
}
test1();

function test2() {
    try {
        let bst = new BinarySearchTree();
        bst.insertLevelOrder(5);
        bst.insertLevelOrder(1);
        bst.insertLevelOrder(4);
        bst.insertLevelOrder(3);
        bst.insertLevelOrder(6);

        console.log(isBSTValid(bst.root));
    } catch (error) {
        console.error(error);
    }
}
test2();
