


class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(name) {
        this.adjacencyList[name] = [];
    }

    addEdge(start, end) {
        this.adjacencyList[start].push(end);
        this.adjacencyList[end].push(start);
    }
}