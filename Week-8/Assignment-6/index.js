const MyGraph = require("../Common/Graph");

/**
 * @function findAllPaths finds and displays all paths from provided pair of nodes
 * @summary - Time Complexity - O(|V| * |E|), Space Complexity - O(|V|)
 * @param {Node} source source node
 * @param {Node} target target node
 * @param {LinkedList} adjacencyList a mapping of paths between nodes
 */
function findAllPaths(source, target, adjacencyList) {
    const nodeLen = Object.keys(adjacencyList).length;
    let isVisited = new Array(nodeLen);
    for (let i = 0; i < nodeLen; i++)
        isVisited[i] = false;
    let pathList = [];

    // add source to paths
    pathList.push(source);

    const displayAllPaths = function (source, target, isVisited, localPathList, adjacencyList) {
        if (source == target) {
            console.log(localPathList);
            // if match found then no need to go into more depth
            return;
        }

        // visiting the current node
        isVisited[source] = true;

        // go through all the vertices adjacent to current vertex
        let adjArr = [...adjacencyList[source]];
        for (let i = 0; i < adjArr.length; i++) {
            if (!isVisited[adjArr[i]]) {
                // store current node in paths
                localPathList.push(adjArr[i]);
                displayAllPaths(adjArr[i], target,
                    isVisited, localPathList, adjacencyList);

                // remove current node from paths
                localPathList.splice(localPathList.indexOf
                    (adjArr[i]), 1);
            }
        }

        // Mark the current node as unvisited
        isVisited[source] = false;
    }

    displayAllPaths(source, target, isVisited, pathList, adjacencyList);
}


function test1() {
    try {
        let g = new MyGraph();
        g.addVertex(0);
        g.addVertex(1);
        g.addVertex(2);
        g.addVertex(3);

        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 3);
        g.addEdge(2, 3);

        g.log();
        /**
         * Node 0 : [ 1, 2 ]
         * Node 1 : [ 0, 2 ]
         * Node 2 : [ 1, 0 ]
         */

        findAllPaths(0, 3, g.adjacencyList);
        /**
         * [ 0, 1, 3 ]
         * [ 0, 2, 3 ]
         */
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

        g.addEdge(0, 4);
        g.addEdge(0, 3);
        g.addEdge(0, 1);
        g.addEdge(1, 3);
        g.addEdge(1, 2);
        g.addEdge(1, 4);
        g.addEdge(2, 3);
        g.addEdge(3, 4);

        g.log();
        /**
         * Node 0 : [ 4, 3, 1 ]   
         * Node 1 : [ 0, 3, 2, 4 ]
         * Node 2 : [ 1, 3 ]
         * Node 3 : [ 0, 1, 2, 4 ]
         * Node 4 : [ 0, 1, 3 ]
         */

        findAllPaths(0, 3, g.adjacencyList);
        /**
         * [ 0, 4, 1, 3 ]
         * [ 0, 4, 1, 2, 3 ]
         * [ 0, 4, 3 ]
         * [ 0, 3 ]
         * [ 0, 1, 3 ]
         * [ 0, 1, 2, 3 ]
         * [ 0, 1, 4, 3 ]
         */
    } catch (error) {
        console.error(error);
    }
}
test2();