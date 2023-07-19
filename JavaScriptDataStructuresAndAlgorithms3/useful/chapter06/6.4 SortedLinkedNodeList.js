/*
 * @Author: mangwu                                                             *
 * @File: 6.4 SortedLinkedNodeList.js                                          *
 * @Date: 2023-07-19 14:23:24                                                  *
 * @LastModifiedDate: 2023-07-19 15:30:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const { LinkedNodeList, defaultEquals } = require("./6.1.1 LinkedNodeList.js");
/**
 * @description 默认比较函数
 * @param {any} a
 * @param {any} b
 * @returns {number}
 */
function defaultCompare(a, b) {
  if (a == b) return 0;
  return a - b;
}
class SortedLinkedNodeList extends LinkedNodeList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }
  /**
   * @description 向有序链表中插入一个新节点
   * @param {Node} node 插入的节点
   * @param {number} pos 覆写单向链表的参数
   * @returns {SortedLinkedNodeList | undefined} this，便于链式调用
   */
  insert(node, pos) {
    const idx = this.getSortedNodeIndex(node);
    return super.insert(node, idx);
  }
  /**
   * @description 获取节点在有序链表中的位置
   * @param {Node} node
   * @returns {number}
   */
  getSortedNodeIndex(node) {
    let cur = this.head;
    let idx = 0;
    while (cur && idx < this.size()) {
      if (this.compareFn(cur, node) >= 0) return idx;
      cur = cur.next;
      idx++;
    }
    return idx;
  }
}

module.exports = { SortedLinkedNodeList, defaultCompare };
