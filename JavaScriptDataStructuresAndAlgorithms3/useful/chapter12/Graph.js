/*
 * @Author: mangwu                                                             *
 * @File: Graph.js                                                             *
 * @Date: 2023-08-22 16:26:43                                                  *
 * @LastModifiedDate: 2023-08-28 11:09:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// A(0) B(1) C(2) D(3) E(4) F(5)
const adjacencyList = [[5], [3], [5], [], [2, 5], [0, 1, 3]];
const adjacencyListWithWeight = [
  [[5, 5]],
  [[3, 8]],
  [[5, 3]],
  [],
  [
    [2, 7],
    [5, 6],
  ],
  [
    [0, 4],
    [1, 2],
    [3, 10],
  ],
];
const {
  LinkedNodeList,
  Node,
} = require("../chapter06/6.1.1 LinkedNodeList.js");

class GraphNode extends Node {
  constructor(value = null, children = [], next = null) {
    super(value, next);
    this.children = children;
  }
}

class GraphLinkedNodeList extends LinkedNodeList {
  toString() {
    // 按照层级关系进行打印
    const res = ["GraphLinkedNodeList {\n"];
    let node = this.getHead();
    while (node) {
      let cur = `  GraphNode { ${node.value} } => [`;
      const len = node.children.length;
      for (let i = 0; i < len; i++) {
        const item = node.children[i];
        cur += `GraphNode { ${item.value} }`;
        if (i !== len - 1) cur += ", ";
      }
      cur += "]\n";
      res.push(cur);
      node = node.next;
    }
    res.push("}");
    return res.join("");
  }
}

const D = new GraphNode("D");
const B = new GraphNode("B", [D]);
const F = new GraphNode("F");
const A = new GraphNode("A", [F]);
const C = new GraphNode("C", [F]);
const E = new GraphNode("E", [C, F]);
F.children = [A, B, D];
const adjacencyNodeList = new GraphLinkedNodeList();
adjacencyNodeList.push(A).push(B).push(C).push(D).push(E).push(F);
// console.log(adjacencyNodeList.toString());
const { Queue } = require("../chapter05/5.1.1 Queue.js");
class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Map();
  }
  addVertex(v) {
    if (!this.adjList.has(v)) {
      this.adjList.set(v, []);
      this.vertices.push(v);
    }
  }
  addEdge(v, w) {
    if (!this.adjList.has(v)) this.addVertex(v);
    if (!this.adjList.has(w)) this.addVertex(w);
    this.adjList.get(v).push(w);
    // 不是有向图就也为w添加邻接关系
    if (!this.isDirected) this.adjList.get(w).push(v);
  }
  size() {
    return this.vertices.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  getVertices() {
    return this.vertices;
  }
  getAdjList() {
    return this.adjList;
  }
  toString() {
    const vertices = this.getVertices();
    const adjList = this.getAdjList();
    let res = [];
    for (const vertex of vertices) {
      const cur = adjList.get(vertex);
      res.push(`${vertex.toString()} -> ${cur.join(" ")}`);
    }
    return res.join("\n");
  }
}
const COLORS = {
  get WHITE() {
    return 0;
  },
  get GREY() {
    return 1;
  },
  get BLACK() {
    return 2;
  },
};
// 记录节点的访问情况
const initializeColor = (vertices) => {
  const colors = {};
  for (const vertex of vertices) {
    colors[vertex] = COLORS.WHITE;
  }
  return colors;
};

function breadthFirstSearch(graph, startVertex, callback) {
  const queue = new Queue();
  const colors = initializeColor(graph.getVertices());
  queue.enqueue(startVertex);
  colors[startVertex] = COLORS.GREY;
  while (!queue.isEmpty()) {
    const cur = queue.dequeue();
    const neighbors = graph.getAdjList().get(cur);
    for (const neighbor of neighbors) {
      if (colors[neighbor] === COLORS.WHITE) {
        colors[neighbor] = COLORS.GREY;
        queue.enqueue(neighbor);
      }
    }
    colors[cur] = COLORS.BLACK;
    if (callback) callback(cur);
  }
}

function simpleBreadthFirstSearch(graph, startVertex, callback) {
  const queue = new Queue();
  queue.enqueue(startVertex);
  const visited = new Set();
  visited.add(startVertex);
  while (!queue.isEmpty()) {
    const cur = queue.dequeue();
    const neighbors = graph.getAdjList().get(cur);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.enqueue(neighbor);
      }
    }
    if (callback) callback(cur);
  }
}

function superSimpleBreadthFirstSearch(graph, startVertex, callback) {
  let queue = [];
  queue.push(startVertex);
  const visited = new Set();
  visited.add(startVertex);
  while (queue.length) {
    const next = [];
    for (const cur of queue) {
      const neighbors = graph.getAdjList().get(cur);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          next.push(neighbor);
        }
      }
      if (callback) callback(cur);
    }
    queue = next;
  }
}

function minDistanceFromStartV(graph, startVertex, callback = null) {
  const queue = new Queue();
  const colors = initializeColor(graph.getVertices());
  const distance = {};
  distance[startVertex] = 0;
  queue.enqueue(startVertex);
  colors[startVertex] = COLORS.GREY;
  const predecessors = {};
  while (!queue.isEmpty()) {
    const cur = queue.dequeue();
    const neighbors = graph.getAdjList().get(cur);
    for (const neighbor of neighbors) {
      if (colors[neighbor] === COLORS.WHITE) {
        queue.enqueue(neighbor);
        predecessors[neighbor] = cur;
        colors[neighbor] = COLORS.GREY;
        distance[neighbor] = distance[cur] + 1;
      }
    }
    colors[cur] = COLORS.BLACK;
    if (callback) callback(cur, distance, predecessors);
  }
  return { distance, predecessors };
}

function depthFirstSearch(graph, startVertex, callback = null) {
  const vertices = graph.getVertices();
  const colors = initializeColor(vertices);
  const adjacencyList = graph.getAdjList();
  const dfs = (vertex) => {
    colors[vertex] = COLORS.GREY;
    if (callback) callback(vertex);
    const neighbors = adjacencyList.get(vertex);
    for (const neighbor of neighbors) {
      if (colors[neighbor] === COLORS.WHITE) dfs(neighbor);
    }
    colors[vertex] = COLORS.BLACK;
  };
  dfs(startVertex);
}
function depthFirstSearchWithStack(graph, startVertex, callback = null) {
  const vertices = graph.getVertices();
  const colors = initializeColor(vertices);
  const adjacencyList = graph.getAdjList();
  const stack = [startVertex];
  colors[startVertex] = COLORS.GREY;
  while (stack.length) {
    const curVertex = stack.pop();
    if (callback) callback(curVertex);
    const neighbors = adjacencyList.get(curVertex);
    for (const neighbor of neighbors) {
      if (colors[neighbor] === COLORS.WHITE) {
        stack.push(neighbor);
        colors[neighbor] = COLORS.GREY;
      }
    }
    colors[curVertex] = COLORS.BLACK;
  }
}
function DFS(graph) {
  const vertices = graph.getVertices();
  const colors = initializeColor(vertices);
  const adjacencyList = graph.getAdjList();
  const discovery = {}; // 发现时间
  const finished = {}; // 完成探索时间
  const predecessors = {}; // 前溯顶点
  let time = 0;
  const dfsVisit = (vertex) => {
    colors[vertex] = COLORS.GREY;
    discovery[vertex] = ++time;
    const neighbors = adjacencyList.get(vertex);
    for (const neighbor of neighbors) {
      if (colors[neighbor] === COLORS.WHITE) {
        predecessors[neighbor] = vertex;
        dfsVisit(neighbor);
      }
    }
    colors[vertex] = COLORS.BLACK;
    finished[vertex] = ++time;
  };
  for (const vertex of vertices) {
    if (colors[vertex] == COLORS.WHITE) dfsVisit(vertex);
  }
  return { discovery, finished, predecessors };
}
module.exports = {
  Graph,
  breadthFirstSearch,
  simpleBreadthFirstSearch,
  superSimpleBreadthFirstSearch,
  minDistanceFromStartV,
  depthFirstSearch,
  depthFirstSearchWithStack,
  DFS,
};
