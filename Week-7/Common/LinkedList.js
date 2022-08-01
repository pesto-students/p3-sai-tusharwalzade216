/**
 * @function Node a function to generate a Node 
 * @param {Number} value an actual value of a node
 * @param {Number} next a pointer for holding the reference of next value
 */
function Node(value, next) {
    this.value = value;
    this.next = next;
}

/**
 * @function LinkedList a function to generate a linked list
 */
function LinkedList() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.maxSize = 104;
}

/**
 * @property isEmpty - a getter function which checks if list is empty
 */
Object.defineProperty(LinkedList.prototype, 'isEmpty', { get() { return this.size === 0; } });

/**
 * @method log a helper method to print the linked list  
 */
LinkedList.prototype.log = function () {
    if (this.isEmpty) {
        console.log("list is empty");
        return;
    }

    let temp = [], currentNode = this.head;

    temp.push(this.head.value);

    while (currentNode.next) {
        let nextNode = currentNode.next;
        temp.push(nextNode.value);
        currentNode = nextNode;
    }

    console.log(temp.join(" -> "));
}

/**
 * @method getNode a method to get a node at specified index
 * @param {Number} index an index for which value to be fetched
 * @returns the node value for the given index
 */
LinkedList.prototype.getNode = function (index) {
    if (!Number.isInteger(index)) throw new Error("Invalid index");
    if (index >= this.size || index < 0) throw new Error("index out of reach");

    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
    }
    return currentNode;
};

/**
 * @method setNode a method to create a new node with given index & value 
 * @param {Number} index an index at which value to be set
 * @param {Number} value value to be set for a new node
 * @returns true if value is set, otherwise false
 */
LinkedList.prototype.setNode = function (index, value) {
    let node = this.getNode(index);
    if (node) {
        node.value = value;
        return true;
    }
    return false;
};

/**
 * @method push a method to add value at last in the list
 * @param {Number} value value to be set for a new node
 * @returns a list with new value
 */
LinkedList.prototype.push = function (value) {
    if (this.size === this.maxSize) throw new Error("List overflow");

    const node = new Node(value, null);
    if (this.isEmpty) {
        this.head = this.tail = node;
    } else {
        this.tail = this.tail.next = node;
    }
    this.size++;
    return this;
};

/**
 * @method pop a method which removes the last element from the list
 * @returns the removed element
 */
LinkedList.prototype.pop = function () {
    if (this.isEmpty) throw new Error("list underflow");

    let currentNode = prevNode = this.head;

    while (currentNode.next) {
        prevNode = currentNode;
        currentNode = currentNode.next;
    }

    this.tail = prevNode;

    this.tail.next = null;
    this.size--;

    if (this.isEmpty) {
        this.head = null;
        this.tail = null;
    }

    return currentNode;
};

/**
 * @method unshift creates a new node at the beginning of list
 * @param {Number} value a value to be assigned to a new node
 * @returns a list with new node
 */
LinkedList.prototype.unshift = function (value) {
    if (this.size === this.maxSize) throw new Error("List overflow");

    const node = new Node(value, null);
    if (this.isEmpty) {
        this.head = this.tail = node;
    } else {
        node.next = this.head;
        this.head = node;
    }
    this.size++;
    return this;
};

/**
 * @method shift removes a node at the beginning of the list
 * @returns a removed node
 */
LinkedList.prototype.shift = function () {
    if (this.isEmpty) throw new Error("list underflow");

    let currentNode = this.head;
    this.head = currentNode.next;
    this.size--;

    if (this.isEmpty) this.tail = null;

    return currentNode;
};

/**
 * @method insert a method which creates a new node at given index & value
 * @param {Number} index an index at which the value node to be added
 * @param {Number} value a value to be assigned to a new node
 * @returns true if the value is inserted, otherwise false
 */
LinkedList.prototype.insert = function (index, value) {
    if (this.size === this.maxSize) throw new Error("List overflow");
    if (!Number.isInteger(index)) throw new Error("Invalid index");
    if (index > this.size || index < 0) throw new Error("index out of reach");

    if (index === this.size) {
        this.push(value);
        return true;
    }

    if (index === 0) {
        this.unshift(value);
        return true;
    }

    const prevNode = this.getNode(index - 1);
    const oldNode = prevNode.next;
    const newNode = new Node(value);

    newNode.next = oldNode;
    prevNode.next = newNode;

    oldNode.next = null;

    this.size++;
    return true;

};

/**
 * @method a method which removes a node from the given index
 * @param {Number} index an index at which the node to be removed
 * @returns the removed node value
 */
LinkedList.prototype.remove = function (index) {
    if (!Number.isInteger(index)) throw new Error("Invalid index");
    if (index >= this.size || index < 0) throw new Error("index out of reach");

    if (index === this.size - 1) {
        this.pop();
        return true;
    }

    if (index === 0) {
        this.shift();
        return true;
    }

    const prevNode = this.getNode(index - 1);
    const oldNode = prevNode.next;
    const newNext = oldNode.next;

    prevNode.next = newNext;
    this.size--;

    return oldNode;
};

function test() {
    try {
        const list = new LinkedList();
        list.push(4);
        list.push(8);
        list.push(3);
        list.log();         //  4 -> 8 -> 3
        list.pop();
        list.log();         //  4 -> 8
        list.unshift(6);
        list.log();         //  6 -> 4 -> 8
        list.shift();
        list.log();         //  4 -> 8
        list.insert(1, 7);
        list.log();         //  4 -> 7 -> 8
        list.remove(2);
        list.log();         //  4 -> 7
    } catch (error) {
        console.error(error);
    }
}
// test();

module.exports = LinkedList;
