/*
 * @Author: mangwu                                                             *
 * @File: useGraph.js                                                          *
 * @Date: 2023-08-23 14:41:05                                                  *
 * @LastModifiedDate: 2023-08-23 14:43:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const { Graph } = require("./Graph.js");

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