/*
 * @Author: mangwu                                                             *
 * @File: useGraph.js                                                          *
 * @Date: 2023-08-23 14:41:05                                                  *
 * @LastModifiedDate: 2023-08-25 16:37:32                                      *
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
