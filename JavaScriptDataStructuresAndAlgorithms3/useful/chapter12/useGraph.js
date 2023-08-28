/*
 * @Author: mangwu                                                             *
 * @File: useGraph.js                                                          *
 * @Date: 2023-08-23 14:41:05                                                  *
 * @LastModifiedDate: 2023-08-28 15:00:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const {
  Graph,
  breadthFirstSearch,
  simpleBreadthFirstSearch,
  superSimpleBreadthFirstSearch,
  minDistanceFromStartV,
  depthFirstSearch,
  depthFirstSearchWithStack,
  DFS,
} = require("./Graph.js");

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("C", "B");
graph.addEdge("D", "E");
graph.addEdge("A", "F");
graph.addEdge("E", "B");
graph.addEdge("B", "F");
graph.addEdge("D", "F");

console.log(graph.toString());
breadthFirstSearch(graph, "A", (cur) => console.log(`Visited vertex: ${cur}`));
console.log("------simpleBreadthFirstSearch-------");
simpleBreadthFirstSearch(graph, "A", (cur) =>
  console.log(`Visited vertex: ${cur}`)
);
console.log("------superSimpleBreadthFirstSearch-------");
superSimpleBreadthFirstSearch(graph, "A", (cur) =>
  console.log(`Visited vertex: ${cur}`)
);
console.log("------minDistanceFromStartV-------");
minDistanceFromStartV(graph, "C", (cur, distance, prodecessors) => {
  let res = cur;
  let n = cur;
  while (prodecessors[n]) {
    res = prodecessors[n] + " => " + res;
    n = prodecessors[n];
  }
  console.log(
    `The shortest path distance between C and ${cur} is ${distance[cur]}`
  );
  console.log(`One of the shortest path is: ${res}`);
});
console.log("------depthFirstSearch-------");
depthFirstSearch(graph, "A", (cur) => console.log(`Visited vertex: ${cur}`));
console.log("------depthFirstSearchWithStack-------");
depthFirstSearchWithStack(graph, "A", (cur) =>
  console.log(`Visited vertex: ${cur}`)
);
console.log("------DFS-------");
console.log(DFS(graph));
console.log("--------DFS applies in DAG--------");
const graph2 = new Graph(true);
graph2.addVertex("A");
graph2.addVertex("B");
graph2.addVertex("C");
graph2.addVertex("D");
graph2.addVertex("E");
graph2.addVertex("F");

graph2.addEdge("A", "C");
graph2.addEdge("A", "D");
graph2.addEdge("B", "D");
graph2.addEdge("B", "E");
graph2.addEdge("C", "F");
graph2.addEdge("F", "E");

const res = DFS(graph2);
console.log(graph2);
console.log(res.finished);
const fTimes = [...Object.entries(res.finished)]
  .sort((a, b) => b[1] - a[1])
  .map((v) => v[0]);
console.log(fTimes.join(" - "));
