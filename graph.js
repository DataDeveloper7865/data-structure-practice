


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
}