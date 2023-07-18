/*
 * @Author: mangwu                                                             *
 * @File: use DoublyLinkedNodeList.js                                           *
 * @Date: 2023-07-18 16:19:25                                                  *
 * @LastModifiedDate: 2023-07-18 16:31:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const {
  DoublyLinkedNodeList,
  DoublyNode,
} = require("./6.2 DoublyLinkedNodeList.js");
const doublyNodeList = new DoublyLinkedNodeList(
  (inner, outer) => inner.value === outer
);
doublyNodeList
  .push(new DoublyNode(1))
  .push(new DoublyNode(2))
  .push(new DoublyNode(3))
  .push(new DoublyNode(4));
console.log("-------初始化了一个双向链表--------");
console.log("长度：", doublyNodeList.count);
console.log(doublyNodeList.toString());
console.log("-------插入新的节点---------");
doublyNodeList
  .insert(new DoublyNode(5), 1)
  .insert(new DoublyNode(0), 0)
  .insert(new DoublyNode(6), 6);
console.log(doublyNodeList.toString());
console.log("-------移除值为4的节点---------");
console.log(doublyNodeList.remove(4));
console.log(doublyNodeList.toString());
console.log("-------移除位置索引为4的节点---------");
console.log(doublyNodeList.removeAt(4));
console.log(doublyNodeList.toString());
console.log("-------获取位置索引为2的节点---------");
console.log(doublyNodeList.getNodeAt(2));
console.log("-------获取值为6的节点的位置---------");
console.log(doublyNodeList.indexOf(6));
console.log("-------清除全部节点----------");
doublyNodeList.clear();
console.log(doublyNodeList.toString());
