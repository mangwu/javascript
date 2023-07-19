/*
 * @Author: mangwu                                                             *
 * @File: use CircularLinkedNodeList.js                                        *
 * @Date: 2023-07-19 10:37:39                                                  *
 * @LastModifiedDate: 2023-07-19 14:22:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const { Node } = require("./6.1.1 LinkedNodeList.js");
const { CircularLinkedNodeList } = require("./6.3.1 CircularLinkedNodeList.js");
const circularNodeList = new CircularLinkedNodeList(
  (inner, outer) => inner.value === outer
);
circularNodeList
  .push(new Node(1))
  .push(new Node(2))
  .push(new Node(3))
  .push(new Node(4));
console.log("-------初始化了一个链表--------");
console.log("长度：", circularNodeList.count);
console.log(circularNodeList.toString());
console.log("-------插入新的节点---------");
circularNodeList
  .insert(new Node(5), 1)
  .insert(new Node(0), 0)
  .insert(new Node(6), 6);
console.log(circularNodeList.toString());
console.log("-------移除值为4的节点---------");
console.log(circularNodeList.remove(4));
console.log(circularNodeList.toString());
console.log("-------移除位置索引为4的节点---------");
console.log(circularNodeList.removeAt(4));
console.log(circularNodeList.toString());
console.log("-------获取位置索引为2的节点---------");
console.log(circularNodeList.getNodeAt(2));
console.log("-------获取值为6的节点的位置---------");
console.log(circularNodeList.indexOf(6));
console.log("-------按顺序打印每个节点----------");
let cur = circularNodeList.getHead();
while (cur) {
  console.log(cur);
  if (cur.next === circularNodeList.getHead()) {
    break;
  }
  cur = cur.next;
}
console.log("-------清除全部节点----------");
circularNodeList.clear();
console.log(circularNodeList.toString());
