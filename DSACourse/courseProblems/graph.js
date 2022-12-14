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

  depthFirstSearchRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    })(start);

    return result;
  }

  depthFirstSearchIterative(start) {
    const stack = [start];    //using array instead of stack
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
}

var graph = new Graph;

// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// console.log(graph.adjacencyList['A']); // []
// console.log(graph.adjacencyList['B']); // []
// console.log(graph.adjacencyList['C']); // []

// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'D');
// graph.addEdge('C', 'D');
// graph.removeEdge('B', 'A');
// graph.removeEdge('C', 'D');
// console.log(graph.adjacencyList['A']); // contains 'C'
// console.log(graph.adjacencyList['B']); // contains 'D'
// console.log(graph.adjacencyList['C']); // contains 'A'
// console.log(graph.adjacencyList['D']); // contains 'B'

// graph.removeVertex('C');
// graph.removeVertex('B');

// console.log(graph.adjacencyList['A']); // still exists
// console.log(graph.adjacencyList['D']); // still exists
graph.addVertex('S');
graph.addVertex('P');
graph.addVertex('U');
graph.addVertex('X');
graph.addVertex('Q');
graph.addVertex('Y');
graph.addVertex('V');
graph.addVertex('R');
graph.addVertex('W');
graph.addVertex('T');

graph.addEdge('S', 'P');
graph.addEdge('S', 'U');

graph.addEdge('P', 'X');
graph.addEdge('U', 'X');

graph.addEdge('P', 'Q');
graph.addEdge('U', 'V');

graph.addEdge('X', 'Q');
graph.addEdge('X', 'Y');
graph.addEdge('X', 'V');

graph.addEdge('Q', 'R');
graph.addEdge('Y', 'R');

graph.addEdge('Y', 'W');
graph.addEdge('V', 'W');

graph.addEdge('R', 'T');
graph.addEdge('W', 'T');

console.log(graph.depthFirstSearchRecursive('S'));
console.log(graph.depthFirstSearchIterative('S'));