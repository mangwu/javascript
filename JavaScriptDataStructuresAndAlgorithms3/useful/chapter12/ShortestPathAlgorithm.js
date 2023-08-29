/*
 * @Author: mangwu                                                             *
 * @File: ShortestPathAlgorithm.js                                             *
 * @Date: 2023-08-29 10:58:58                                                  *
 * @LastModifiedDate: 2023-08-29 16:15:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 1, 2, 4, 0],
  [0, 0, 0, 0, 2, 0],
  [0, 0, 0, 0, 0, 4],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0],
];

const INF = Number.MAX_SAFE_INTEGER;

/**
 * @description dijkstra最短路径算法
 * @param {number[][]} graph 图的邻接矩阵
 * @param {number} src 开始节点
 * @returns {Object}
 */
const dijkstra = (graph, src) => {
  const distance = [];
  const visited = [];
  const n = graph.length;
  for (let i = 0; i < n; i++) {
    // 初始化所有距离都是最大的
    distance[i] = INF;
    visited[i] = false;
  }
  distance[src] = 0; // 源顶点到自己的距离为0
  for (let i = 0; i < n - 1; i++) {
    // 获取当前距离src最短且没有访问过的节点
    const vertex = minDistance(distance, visited);
    // 更新src到它的邻接节点的最短距离
    visited[vertex] = true; // src到当前节点的最短距离不一定确定
    for (let v = 0; v < n; v++) {
      // 遍历当前节点的的邻接节点
      if (
        !visited[v] &&
        graph[vertex][v] &&
        distance[vertex] !== INF &&
        distance[vertex] + graph[vertex][v] < distance[v] // 比当前距离小
      ) {
        distance[v] = distance[vertex] + graph[vertex][v];
      }
    }
    console.log(distance);
  }
  return distance;
};
function minDistance(distance, visited) {
  let min = INF;
  let minIndex = -1;
  for (let i = 0; i < distance.length; i++) {
    if (visited[i] === false && distance[i] <= min) {
      min = distance[i];
      minIndex = i;
    }
  }
  return minIndex;
}
console.log(dijkstra(graph, 0));

const floydWarshall = (graph) => {
  const n = graph.length; // 邻接矩阵
  const distance = [];
  // 初始化distance，相邻节点默认为graph[i][j]，不相邻节点为无限大，同一节点为00
  for (let i = 0; i < n; i++) {
    distance[i] = []; // 从节点i触发到其它节点的最小路径初始化
    for (let j = 0; j < n; j++) {
      if (i === j) distance[i][j] = 0;
      else if (graph[i][j]) distance[i][j] = graph[i][j];
      else distance[i][j] = Infinity;
    }
  }
  // 计算从所有源到所有顶点的最短路径
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // 对于一个从节点i到节点j之间的最短距离，
        // 它需要遍历所有节点k，从i到k，再从k到j之间的最短距离之和
        if (distance[i][k] + distance[k][j] < distance[i][j]) {
          distance[i][j] = distance[i][k] + distance[k][j];
        }
      }
    }
  }
  return distance;
};
console.log(floydWarshall(graph));
