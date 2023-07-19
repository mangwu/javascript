/*
 * @Author: mangwu                                                             *
 * @File: 6.3 CircularLinkedNodeList .js                                                              *
 * @Date: 2023-07-18 17:00:26                                                  *
 * @LastModifiedDate: 2023-07-19 11:12:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const {
  LinkedNodeList,
  Node,
  defaultEquals,
} = require("./6.1.1 LinkedNodeList.js");

class CircularLinkedNodeList extends LinkedNodeList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }
  /**
   * @description 向链表尾部添加一个新元素，新元素的next会引用head
   * @param {Node} node
   * @returns {CircularLinkedNodeList} this 方便链式调用
   */
  push(node) {
    node.next = super.push(node).head;
    return this;
  }
  /**
   * @description 向链表的特定位置插入一个新节点
   * @param {Node} node 插入的节点
   * @param {number} pos 插入节点应该在链表中的位置
   * @returns {LinkedNodeList | undefined} this，便于链式调用，注意可能因为pos有误插入失败而返回undefined
   */
  insert(node, pos) {
    if (pos === 0) {
      // 插入位置是否是首节点位置
      node.next = this.head;
      this.head = node;
      this.count++;
      const last = this.getNodeAt(this.count - 1); // 处理尾部节点引用
      last.next = this.head;
      return this;
    } else if (pos === this.count) {
      // 插入的位置是尾部节点
      this.push(node);
      return this;
    } else if (pos > 0 && pos < this.count) {
      this.count++;
      const preNode = this.getNodeAt(pos - 1);
      node.next = preNode.next;
      preNode.next = node;
      return this;
    }
    return undefined;
  }
  /**
   * @description 移除首节点，返回首节点或undefined
   * @returns {Node | undefined}
   */
  removeHead() {
    const res = super.removeHead();
    const last = this.getNodeAt(this.count - 1);
    if (last) last.next = this.head;
    return res;
  }
  /**
   * @description 从链表的特定位置移除一个节点
   * @param {number} pos 要移除节点的位置
   * @returns {Node | undefined} 移除的节点，如果pos有误会返回undefined
   */
  removeAt(pos) {
    if (pos === 0) {
      // 移除位置是首节点位置
      return this.removeHead();
    } else if (this.count === 1) {
      // 链表长度是1
      const res = this.head;
      this.head = null;
      this.count--;
      return res;
    } else if (pos > 0 && pos < this.count) {
      const preNode = this.getNodeAt(pos - 1);
      const node = this.getNodeAt(pos);
      preNode.next = node.next;
      node.next = null;
      this.count--;
      return node;
    }
    return undefined;
  }
  /**
   * @description 返回一个元素的位置
   * @param {any} ele 查找的元素，可能是节点，也可能是值，因为它要使用equalsFn进行比较
   * @returns {number} pos
   */
  indexOf(ele) {
    let cur = this.head;
    let idx = 0;
    while (cur && idx < this.size()) {
      if (this.equalsFn(cur, ele)) return idx;
      cur = cur.next;
      idx++;
    }
    return -1;
  }
  /**
   * @description 移除一个元素
   * @param {any} ele 移除的元素，可能是节点，也可能是值，因为它要使用equalsFn进行比较
   * @returns {Node | undefined}
   */
  remove(ele) {
    const idx = this.indexOf(ele);
    return this.removeAt(idx);
  }
  /**
   * @description 移除首节点，返回首节点或undefined
   * @returns {Node | undefined}
   */
  removeHead() {
    if (!this.isEmpty()) {
      const head = this.head;
      this.head = head.next;
      head.next = null;
      this.count--;
      return head;
    }
    return undefined;
  }
  /**
   * @description 把LinkedNodeList 对象转换成一个字符串
   * @returns {string}
   */
  toString() {
    let res = ["CircularLinkedNodeList {"];
    let node = this.head;
    while (node) {
      res.push("Node {");
      res.push(node.value);
      res.push("}");
      if (node.next === this.head) {
        res.push("=> head");
        break;
      } else {
        res.push("=>");
      }
      node = node.next;
    }
    res.push("}");
    return res.join(" ");
  }
}

module.exports = { CircularLinkedNodeList };
