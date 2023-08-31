/*
 * @Author: mangwu                                                             *
 * @File: MST.js                                                               *
 * @Date: 2023-08-31 10:18:19                                                  *
 * @LastModifiedDate: 2023-08-31 15:29:04                                      *
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
  [2, 0, 1, 2, 1, 0],
  [4, 1, 0, 0, 2, 0],
  [0, 2, 0, 0, 3, 4],
  [0, 1, 2, 3, 0, 2],
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
console.log(prim(graph));

const kruskal = (graph) => {
  const n = graph.length;
  const parent = [];
  let ne = 0;
  let a, b, u, v;
  // 邻接矩阵的复制,方便修改
  const cost = graph.map((v) => v.map((v2) => (v2 === 0 ? INF : v2)));
  while (ne < n - 1) {
    for (let i = 0, min = INF; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (cost[i][j] !== 0 && cost[i][j] < min) {
          min = cost[i][j];
          a = u = i;
          b = v = j;
        }
      }
    }
    console.log("--------");
    console.log(a, b, u, v);
    console.log("cost", cost[a][b]);
    u = find(u, parent);
    v = find(v, parent);
    console.log(a, b, u, v);
    if (u !== v && union(a, b, parent)) ne++;
    cost[a][b] = cost[b][a] = INF;
    console.log(parent);
    console.log("--------");
  }

  return parent;
};

const find = (i, parent) => {
  while (parent[i]) i = parent[i];
  return i;
};
const union = (i, j, parent) => {
  if (i !== j) {
    parent[j] = i;
    return true;
  }
  return false;
};

console.log(kruskal(graph));
