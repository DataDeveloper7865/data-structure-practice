


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

        function DFS(vert) {
            if (vert == null) {
                return;
            }
            visitedVerticies[vert] = true;
            visited.push(vert);

            for (let node of adjacencyList) {
                if (visitedVerticies[node] == undefined) {
                    DFS(node);
                }
            }
        }
        DFS(vert);
        return visited;
    }
}