/*
 * @Author: mangwu                                                             *
 * @File: 6.2 DoublyLinkedList.js                                                              *
 * @Date: 2023-07-18 14:54:05                                                  *
 * @LastModifiedDate: 2023-07-18 16:33:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const {
  Node,
  LinkedNodeList,
  defaultEquals,
} = require("./6.1.1 LinkedNodeList.js");

class DoublyNode extends Node {
  constructor(value = null, next = null, prev = null) {
    super(value, next);
    this.prev = prev;
  }
}

class DoublyLinkedNodeList extends LinkedNodeList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = null;
  }
  /**
   * @description 将节点插入双向链表的尾部
   * @param {DoublyNode} node
   * @returns {DoublyLinkedNodeList} this，方便链式调用
   */
  push(node) {
    this.nodeClear(node);
    if (this.isEmpty()) {
      // 空链表
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.count++;
    return this;
  }
  /**
   * @description 移除节点的上一个和下一个引用
   * @param {DoublyNode} node
   */
  nodeClear(node) {
    node.next = null;
    node.prev = null;
  }
  /**
   * @description 在双向链表中的指定位置插入节点
   * @param {DoublyNode} node
   * @param {number} pos
   * @returns {DoublyLinkedNodeList | undefined} this，方便链式调用
   */
  insert(node, pos) {
    if (pos === 0) {
      // 判断是否是头节点
      if (this.isEmpty()) return this.push(node);
      this.nodeClear(node);
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
      this.count++;
      return this;
    } else if (pos === this.count) {
      // 判断是否是尾节点
      return this.push(node);
    } else if (pos > 0 && pos < this.count) {
      // 进行插入
      const target = this.getNodeAt(pos);
      node.prev = target.prev;
      node.next = target;
      node.prev.next = node;
      target.prev = node;
      this.count++;
      return this;
    }
    return undefined;
  }
  /**
   * @description 移除尾部节点
   * @returns {DoublyNode | undefined} 被移除的尾部节点
   */
  removeTail() {
    if (this.count === 1) {
      const res = this.head;
      this.head = null;
      this.tail = null;
      this.count--;
      return res;
    } else if (!this.isEmpty()) {
      const res = this.tail;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      res.prev = null;
      this.count--;
      return res;
    }
    return undefined;
  }
  /**
   * @description 移除头部节点
   * @returns {DoublyNode | undefined} 返回的移除头部节点
   */
  removeHead() {
    if (this.count === 1) {
      const res = this.head;
      this.head = null;
      this.tail = null;
      this.count--;
      return res;
    }
    return super.removeHead();
  }
  /**
   * @description 双向链表移除指定位置的节点
   * @param {number} pos 位置索引，范围为[0, count)
   * @returns {DoublyNode | undefined}
   */
  removeAt(pos) {
    if (pos === 0) {
      // 判断是否是头节点
      return this.removeHead();
    } else if (pos === this.count - 1) {
      // 判断是否是尾节点
      return this.removeTail();
    } else if (pos > 0 && pos < this.count - 1) {
      const target = this.getNodeAt(pos);
      target.prev.next = target.next;
      target.next.prev = target.prev;
      this.nodeClear(target);
      this.count--;
      return target;
    }
    return undefined;
  }
  /**
   * @description 移除链表中与ele“相等”的节点
   * @param {any} ele 移除的元素，可能是节点，也可能是值，因为它要使用equalsFn进行比较
   * @returns {DoublyNode | undefined} 被移除的节点
   */
  remove(ele) {
    const pos = this.indexOf(ele);
    return this.removeAt(pos);
  }
  /**
   * @description 清空双向链表
   */
  clear() {
    super.clear();
    let cur = this.tail;
    this.tail = null;
    while (cur) {
      const temp = cur.prev;
      cur.prev = null;
      cur = temp;
    }
  }
  /**
   * @description 把 DoublyLinkedNodeList 对象转换成一个字符串
   * @returns {string}
   */
  toString() {
    let res = ["DoublyLinkedNodeList {"];
    let node = this.head;
    while (node) {
      res.push("DoublyNode {");
      res.push(node.value);
      res.push("}");
      if (node.next) {
        res.push("<=>");
      }
      node = node.next;
    }
    res.push("}");
    return res.join(" ");
  }
}

module.exports = { DoublyNode, DoublyLinkedNodeList };
