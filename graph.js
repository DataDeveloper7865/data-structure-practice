


class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(name) {
        if(!this.adjacencyList[name]) this.adjacencyList[name]  = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(el => el == v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(el => el == v1)
    }

    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    DFSRecursive(vert) {
        let visited = [];
        let visitedVerticies = {};
        const adjacencyList = this.adjacencyList;

        function DFS(vert) {
            if (vert == null) {
                return null;
            }
            visitedVerticies[vert] = true;
            visited.push(vert);

            for (let node of adjacencyList[vert]) {
                if (visitedVerticies[node] == undefined) {
                    DFS(node);
                }
            }
        }
        DFS(vert);
        return visited;
    }

    DFSIterative(vert) {
        let stack = [];
        let results = [];
        let visitedVert = {};
        let adjacencyList = this.adjacencyList;

        stack.push(vert);
        visitedVert[vert] = true;

        while(stack.length != 0) {
            let curVisit = stack.pop();

            if (visitedVert[curVisit] == undefined) {
                visitedVert[curVisit] = true;
                results.push(curVisit);
                for (let node of adjacencyList[curVisit]) {
                    stack.push(node);
                }
            }


        }

        return results;
    }
}