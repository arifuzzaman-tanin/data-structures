class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
            console.log("Vertex not found in the graph.")
            return;
        }

        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    
    removeVertex(vertex){
        if (!this.adjacencyList[vertex]) {
            console.log("Vertex not found in the graph.")
            return;
        }
        
        for(let adjacentVetex of this.adjacencyList[vertex]){
            console.log(adjacentVetex)
            this.removeEdge(vertex, adjacentVetex);
        }
    }
    
    removeEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
            console.log("Vertex not found in the graph.")
            return;
        }
        
        this.adjacencyList[vertex1]= this.adjacencyList[vertex1].filter((x) => x != vertex2);
        
        this.adjacencyList[vertex2]= this.adjacencyList[vertex2].filter((x) => x != vertex1);
    }

    printGraph(){
        for(const [vertex, edge] of Object.entries(this.adjacencyList)){
            console.log(`${vertex}=> ${edge.join(',')}`)
        }
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("A", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "E");
graph.addEdge("E", "A");

graph.printGraph()

// OUTPUT
// A=> B,C,E
// B=> A,C
// C=> B,A,D
// D=> C,E
// E=> D,A