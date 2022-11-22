class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex]
  }
}

var graph = new Graph;

// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// console.log(graph.adjacencyList['A']); // []
// console.log(graph.adjacencyList['B']); // []
// console.log(graph.adjacencyList['C']); // []

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
// graph.removeEdge('B', 'A');
// graph.removeEdge('C', 'D');
console.log(graph.adjacencyList['A']); // contains 'C'
console.log(graph.adjacencyList['B']); // contains 'D'
console.log(graph.adjacencyList['C']); // contains 'A'
console.log(graph.adjacencyList['D']); // contains 'B'

// graph.removeVertex('C');
// graph.removeVertex('B');

// console.log(graph.adjacencyList['A']); // still exists
// console.log(graph.adjacencyList['D']); // still exists