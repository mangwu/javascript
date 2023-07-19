/*
 * @Author: mangwu                                                             *
 * @File: use SortedLinkedNodeList.js                                          *
 * @Date: 2023-07-19 15:08:03                                                  *
 * @LastModifiedDate: 2023-07-19 15:16:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const { SortedLinkedNodeList } = require("./6.4 SortedLinkedNodeList.js");
const { Node } = require("./6.1.1 LinkedNodeList.js");

const sortedLinkedNodeList = new SortedLinkedNodeList(
  (inner, outer) => inner.value === outer,
  (a, b) => a.value - b.value
);
sortedLinkedNodeList
  .insert(new Node(8))
  .insert(new Node(4))
  .insert(new Node(1))
  .insert(new Node(2));
console.log("-------初始化了一个链表--------");
console.log("长度：", sortedLinkedNodeList.count);
console.log(sortedLinkedNodeList.toString());
console.log("-------插入新的节点---------");
sortedLinkedNodeList
  .insert(new Node(5))
  .insert(new Node(0))
  .insert(new Node(6))
  .insert(new Node(9))
  .insert(new Node(3));
console.log(sortedLinkedNodeList.toString());
console.log("-------移除值为4的节点---------");
console.log(sortedLinkedNodeList.remove(4));
console.log(sortedLinkedNodeList.remove(4));
console.log(sortedLinkedNodeList.toString());
console.log("-------移除位置索引为4的节点---------");
console.log(sortedLinkedNodeList.removeAt(4));
console.log(sortedLinkedNodeList.toString());
console.log("-------获取位置索引为2的节点---------");
console.log(sortedLinkedNodeList.getNodeAt(2));
console.log("-------获取值为6的节点的位置---------");
console.log(sortedLinkedNodeList.indexOf(6));
console.log("-------按顺序打印每个节点----------");
let cur = sortedLinkedNodeList.getHead();
while (cur) {
  console.log(cur);
  if (cur.next === sortedLinkedNodeList.getHead()) {
    break;
  }
  cur = cur.next;
}
console.log("-------清除全部节点----------");
sortedLinkedNodeList.clear();
console.log(sortedLinkedNodeList.toString());
