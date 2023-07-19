/*
 * @Author: mangwu                                                             *
 * @File: 6.5 StackLinkedNodeList.js                                           *
 * @Date: 2023-07-19 15:47:00                                                  *
 * @LastModifiedDate: 2023-07-19 16:18:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const { DoublyLinkedNodeList } = require("./6.2 DoublyLinkedNodeList");
const { DoublyNode } = require("./6.2 DoublyLinkedNodeList.js");

class StackLinkedNodeList {
  constructor() {
    this.stack = new DoublyLinkedNodeList();
  }
  /**
   * @description 向栈中传入节点
   * @param  {...any} args 多个DuoblyNode节点的值
   */
  push(...args) {
    for (const arg of args) {
      this.stack.push(new DoublyNode(arg));
    }
  }
  pop() {
    return this.stack.removeAt(this.size() - 1)?.value;
  }
  peek() {
    return this.stack.getNodeAt(this.size() - 1)?.value;
  }
  size() {
    return this.stack.size();
  }
  clear() {
    this.stack.clear();
  }
  toString() {
    return this.stack.toString();
  }
}

module.exports = { StackLinkedNodeList };
