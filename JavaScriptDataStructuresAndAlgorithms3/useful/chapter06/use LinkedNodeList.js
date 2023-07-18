/*
 * @Author: mangwu                                                             *
 * @File: use LinkedNodeList.js                                                *
 * @Date: 2023-07-18 13:43:16                                                  *
 * @LastModifiedDate: 2023-07-18 13:45:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const { LinkedNodeList, Node } = require("./6.1.1 LinkedNodeList.js");
const nodeList = new LinkedNodeList((inner, outer) => inner.value === outer);
nodeList
  .push(new Node(1))
  .push(new Node(2))
  .push(new Node(3))
  .push(new Node(4));
console.log("-------初始化了一个链表--------");
console.log("长度：", nodeList.count);
console.log(nodeList.toString());
console.log("-------插入新的节点---------");
nodeList.insert(new Node(5), 1).insert(new Node(0), 0).insert(new Node(6), 6);
console.log(nodeList.toString());
console.log("-------移除值为4的节点---------");
console.log(nodeList.remove(4));
console.log(nodeList.toString());
console.log("-------移除位置索引为4的节点---------");
console.log(nodeList.removeAt(4));
console.log(nodeList.toString());
console.log("-------获取位置索引为2的节点---------");
console.log(nodeList.getNodeAt(2));
console.log("-------获取值为6的节点的位置---------");
console.log(nodeList.indexOf(6));
console.log("-------清除全部节点----------");
nodeList.clear();
console.log(nodeList.toString());
