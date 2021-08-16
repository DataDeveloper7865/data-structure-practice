


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

        stack.push(vert);
        visitedVert[vert] = true;

        while(stack.length != 0) {
            let curVisit = stack.pop();
            results.push(curVisit);

            this.adjacencyList[curVisit].forEach(neighbor => {
                if(!visitedVert[neighbor]) {
                    visitedVert[neighbor] = true;
                    stack.push(neighbor)
                }
            }); 
        }

        return results;
    }

    BFSIterative(start) {
        let queue = [start];
        let visited = [];
        let visitedVerts = {start: true};
        let currentVertex;

        while(queue.length) {
            currentVertex = queue.shift();
            results.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visitedVerts[neighbor]) {
                    visitedVerts[neighbor] = true;
                    queue.push(neighbor);
                }
            })

        }

        return visited;
    }


}