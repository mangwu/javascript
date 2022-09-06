/*
 * @Author: mangwu                                                             *
 * @File: 7.3.3.3.js                                                           *
 * @Date: 2022-09-06 16:02:50                                                  *
 * @LastModifiedDate: 2022-09-06 16:45:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 递归算法
function* nTimes(n) {
  if (n > 0) {
    yield* nTimes(n - 1);
    yield n - 1;
  }
}
for (const item of nTimes(5)) {
  console.log(item);
}

// 随机图
class Node {
  constructor(id, neighbors = new Set()) {
    this.id = id;
    this.neighbors = neighbors;
  }
  connect(node) {
    if (node !== this) {
      this.neighbors.add(node);
      node.neighbors.add(this);
    }
  }
}
class RandomGraph {
  constructor(size) {
    this.size = size;
    this.nodes = new Set();
    // 创建节点
    for (let i = 0; i < size; i++) {
      this.nodes.add(new Node(i));
    }
    // 随机连接节点
    this.generateRandomGraph();
  }
  generateRandomGraph() {
    // 清空原始连接
    for (const node of this.nodes) {
      node.neighbors.clear();
    }
    // 随机连接点
    const threshold = 1 / this.size; // 两个点是否连接的固定值
    for (const nodea of this.nodes) {
      for (const nodeb of this.nodes) {
        if (Math.random() < threshold) {
          nodea.connect(nodeb);
        }
      }
    }
  }
  toString() {
    // 打印成字符串的方法
    const prints = [];
    for (const node of this.nodes) {
      const ids = [...node.neighbors].map((n) => n.id).join(",");
      prints.push(`${node.id}:${ids}`);
    }
    return prints.join("\n") + "\n";
  }
  isConnected() {
    const visited = new Set();
    function* traverse(nodes) {
      for (const node of nodes) {
        if (!visited.has(node)) {
          // 没有就进行递归
          yield node;
          yield* traverse(node.neighbors);
        }
      }
    }
    // 获取第一个节点
    const firstNode = this.nodes[Symbol.iterator]().next().value;
    // 使用递归将已遍历到的节点入visited
    for (const node of traverse([firstNode])) {
      visited.add(node);
    }
    return visited.size === this.nodes.size;
  }
}
const g = new RandomGraph(6);
console.log(g.toString(), g.isConnected());
g.generateRandomGraph();
console.log(g.toString(), g.isConnected());
g.generateRandomGraph();
console.log(g.toString(), g.isConnected());
