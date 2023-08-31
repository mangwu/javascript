/*
 * @Author: mangwu                                                             *
 * @File: MST.js                                                               *
 * @Date: 2023-08-31 10:18:19                                                  *
 * @LastModifiedDate: 2023-08-31 11:17:08                                      *
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
  [2, 0, 1, 2, 4, 0],
  [4, 1, 0, 0, 2, 0],
  [0, 2, 0, 0, 3, 4],
  [0, 4, 2, 3, 0, 2],
  [0, 0, 0, 4, 2, 0],
];
const INF = Number.MAX_SAFE_INTEGER;

const prim = (graph) => {
  const parent = [];
  const key = [];
  const visited = [];
  const n = graph.length;
  for (let i = 0; i < n; i++) {
    key[i] = INF;
    visited[i] = false;
  }
  key[0] = 0;
  parent[0] = -1;
  for (let i = 0; i < n - 1; i++) {
    const u = minKey(key, visited);
    visited[u] = true;
    for (let v = 0; v < n; v++) {
      if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) {
        parent[v] = u;
        key[v] = graph[u][v];
      }
    }
    console.log(`key:`, key);
    console.log(`parent:`, parent);
  }
  return parent;
};

function minKey(key, visited) {
  let min = INF;
  let minIndex = -1;
  for (let i = 0; i < key.length; i++) {
    if (visited[i] === false && key[i] <= min) {
      min = key[i];
      minIndex = i;
    }
  }
  return minIndex;
}
prim(graph);
