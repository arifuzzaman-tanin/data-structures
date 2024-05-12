class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        this.values.push({ value, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }

    isEmpty() {
        return this.values.length === 0;
    }
}

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, distance) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            console.log("Vertex not found in the graph.");
            return;
        }

        this.adjacencyList[vertex1].push([vertex2, distance]);
        this.adjacencyList[vertex2].push([vertex1, distance]);
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            console.log("Vertex not found in the graph.");
            return;
        }

        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex[0]);
        }

        delete this.adjacencyList[vertex];
    }

    removeEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            console.log("Vertex not found in the graph.");
            return;
        }

        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(edge => edge[0] !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(edge => edge[0] !== vertex1);
    }

    findShortestRoute(startVertex, endVertex) {
        const distances = {};
        const previous = {};
        const priorityQueue = new PriorityQueue();

        for (const vertex in this.adjacencyList) {
            if (vertex === startVertex) {
                distances[vertex] = 0;
                priorityQueue.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                priorityQueue.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        while (!priorityQueue.isEmpty()) {
            const currentVertex = priorityQueue.dequeue().value;

            if (currentVertex === endVertex) {
                const path = [];
                let vertex = endVertex;
                while (vertex) {
                    path.unshift(vertex);
                    vertex = previous[vertex];
                }
                console.log("Shortest path:", path.join(" => "));
                console.log("Total distance:", distances[endVertex]);
                return;
            }

            if (currentVertex || distances[currentVertex] !== Infinity) {
                for (const neighbor of this.adjacencyList[currentVertex]) {
                    const [neighborVertex, neighborDistance] = neighbor;
                    const calculatedDistance = distances[currentVertex] + neighborDistance;
                    if (calculatedDistance < distances[neighborVertex]) {
                        distances[neighborVertex] = calculatedDistance;
                        previous[neighborVertex] = currentVertex;
                        priorityQueue.enqueue(neighborVertex, calculatedDistance);
                    }
                }
            }
        }

        console.log("No path found.");
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B", 5);
graph.addEdge("B", "C", 7);
graph.addEdge("A", "C", 2);
graph.addEdge("C", "D", 3);
graph.addEdge("D", "E", 4);
graph.addEdge("E", "A", 8);

graph.findShortestRoute("B", "E");
