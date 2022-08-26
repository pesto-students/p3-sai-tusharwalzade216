const MyGraph = require("../Common/Graph");

/**
 * @function isPathExists checks if the path exists between nodes
 * @param {Node} source starting node
 * @param {Node} target target node
 * @returns 
 */
MyGraph.prototype.isPathExists = function (source, target) {
    let visited = new Set();
    let list = this.adjacencyList;
    let found = false;

    let dfs = (vertex) => {
        if (vertex === null) throw new Error("Invalid input");
        if (vertex == target) return found = true;

        visited.add(vertex);
        let neighbors = list[vertex];
        neighbors.forEach((neighbor) => {
            if (found == true) return;
            if (!visited.has(neighbor)) {
                return dfs(neighbor);
            }
        });
    };

    dfs(source);

    return found;
}

function test1() {
    try {
        let g = new MyGraph();
        g.addVertex(0);
        g.addVertex(1);
        g.addVertex(2);

        g.addEdge(0, 1);
        g.addEdge(1, 2);
        g.addEdge(2, 0);

        g.log();
        /**
         * Node 0 : [ 1, 2 ]
         * Node 1 : [ 0, 2 ]
         * Node 2 : [ 1, 0 ]
         */

        console.log(g.isPathExists(0, 2));      //  true
    } catch (error) {
        console.error(error);
    }
}
test1();

function test2() {
    try {
        let g = new MyGraph();
        g.addVertex(0);
        g.addVertex(1);
        g.addVertex(2);
        g.addVertex(3);
        g.addVertex(4);
        g.addVertex(5);

        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(3, 5);
        g.addEdge(5, 4);
        g.addEdge(4, 3);

        g.log();
        /**
         * Node 0 : [ 1, 2 ]
         * Node 1 : [ 0 ]
         * Node 2 : [ 0 ]
         * Node 3 : [ 5, 4 ]
         * Node 4 : [ 5, 3 ]
         * Node 5 : [ 3, 4 ]
         */

        console.log(g.isPathExists(0, 5));      //  false
    } catch (error) {
        console.error(error);
    }
}
test2();
