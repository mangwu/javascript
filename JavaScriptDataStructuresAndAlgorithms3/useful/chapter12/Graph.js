/*
 * @Author: mangwu                                                             *
 * @File: Graph.js                                                             *
 * @Date: 2023-08-22 16:26:43                                                  *
 * @LastModifiedDate: 2023-08-23 14:40:57                                      *
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

module.exports = { Graph };
