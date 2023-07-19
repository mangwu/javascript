/*
 * @Author: mangwu                                                             *
 * @File: 6.4 DoublyCircularLinkedNodeList.js                                  *
 * @Date: 2023-07-19 10:47:27                                                  *
 * @LastModifiedDate: 2023-07-19 13:26:31                                      *
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
const { defaultEquals } = require("./6.1.1 LinkedNodeList.js");
class DoublyCircularLinkedNodeList extends DoublyLinkedNodeList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }
  /**
   * @description 将节点插入双向链表的尾部
   * @param {DoublyNode} node
   * @returns {DoublyCircularLinkedNodeList} this，方便链式调用
   */
  push(node) {
    super.push(node);
    this.connectHeadWithTail();
    return this;
  }
  /**
   * @description 在双向链表中的指定位置插入节点
   * @param {DoublyNode} node
   * @param {number} pos
   * @returns {DoublyCircularLinkedNodeList | undefined} this，方便链式调用
   */
  insert(node, pos) {
    const res = super.insert(node, pos);
    if (res) this.connectHeadWithTail();
    return res;
  }
  /**
   * @description 移除尾部节点
   * @returns {DoublyNode | undefined} 被移除的尾部节点
   */
  removeTail() {
    const res = super.removeTail();
    if (res) {
      this.nodeClear(res);
      this.connectHeadWithTail();
    }
    return res;
  }
  /**
   * @description 连接首尾
   */
  connectHeadWithTail() {
    this.head.prev = this.tail;
    this.tail.next = this.head;
  }
  /**
   * @description 移除头部节点
   * @returns {DoublyNode | undefined} 返回的移除头部节点
   */
  removeHead() {
    const res = super.removeHead();
    if (res) {
      this.nodeClear(res);
      this.connectHeadWithTail();
    }
    return res;
  }
  /**
   * @description 清空双向链表
   */
  clear() {
    this.head && (this.head.prev = null);
    this.tail && (this.tail.next = null);
    super.clear();
  }
  /**
   * @description 把 DoublyCircularLinkedNodeList 对象转换成一个字符串
   * @returns {string}
   */
  toString() {
    let res = ["DoublyCircularLinkedNodeList {"];
    let node = this.head;
    while (node) {
      res.push("DoublyNode {");
      res.push(node.value);
      res.push("}");
      if (node.next === this.head) {
        res.push("<=> head");
        break;
      } else {
        res.push("<=>");
      }
      node = node.next;
    }
    res.push("}");
    return res.join(" ");
  }
}

module.exports = { DoublyCircularLinkedNodeList };
