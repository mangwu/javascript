/*
 * @Author: mangwu                                                             *
 * @File: use DoublyCircularLinkedNodeList.js                                  *
 * @Date: 2023-07-19 11:29:42                                                  *
 * @LastModifiedDate: 2023-07-19 14:23:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const { DoublyNode } = require("./6.2 DoublyLinkedNodeList.js");
const {
  DoublyCircularLinkedNodeList,
} = require("./6.3.2 DoublyCircularLinkedNodeList.js");
const doublyCircularLinkedNodeList = new DoublyCircularLinkedNodeList(
  (inner, outer) => inner.value === outer
);
doublyCircularLinkedNodeList
  .push(new DoublyNode(1))
  .push(new DoublyNode(2))
  .push(new DoublyNode(3))
  .push(new DoublyNode(4));
console.log("-------初始化了一个双向链表--------");
console.log("长度：", doublyCircularLinkedNodeList.count);
console.log(doublyCircularLinkedNodeList.toString());
console.log("-------插入新的节点---------");
doublyCircularLinkedNodeList
  .insert(new DoublyNode(5), 1)
  .insert(new DoublyNode(0), 0)
  .insert(new DoublyNode(6), 6);
console.log(doublyCircularLinkedNodeList.toString());
console.log("-------移除值为4的节点---------");
console.log(doublyCircularLinkedNodeList.remove(4));
console.log(doublyCircularLinkedNodeList.toString());
console.log("-------移除位置索引为4的节点---------");
console.log(doublyCircularLinkedNodeList.removeAt(4));
console.log(doublyCircularLinkedNodeList.toString());
console.log("-------获取位置索引为2的节点---------");
console.log(doublyCircularLinkedNodeList.getNodeAt(2));
console.log("-------获取值为6的节点的位置---------");
console.log(doublyCircularLinkedNodeList.indexOf(6));
console.log("-------按顺序打印每个节点----------");
let cur = doublyCircularLinkedNodeList.getHead();
while (cur) {
  console.log(cur);
  if (cur.next === doublyCircularLinkedNodeList.getHead()) {
    break;
  }
  cur = cur.next;
}
console.log("-------清除全部节点----------");
doublyCircularLinkedNodeList.clear();
console.log(doublyCircularLinkedNodeList.toString());
