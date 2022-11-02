/*
 * @Author: mangwu                                                             *
 * @File: 5.1.1 Queue.js                                                       *
 * @Date: 2022-11-02 15:48:41                                                  *
 * @LastModifiedDate: 2022-11-02 16:11:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

class Queue {
  constructor() {
    this.count = 0; // 队列长度
    this.lowestCount = 0; // 追踪第一个元素
    this.items = {};
  }
  enqueue(...eles) {
    // 入队
    for (const ele of eles) {
      this.items[this.count + this.lowestCount] = ele;
      this.count++;
    }
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  dequeue() {
    // 出队
    if (this.isEmpty()) {
      return undefined;
    }
    const res = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    this.count--;
    return res;
  }
  peek() {
    // 队首元素
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let str = `${this.peek()}`;
    for (let i = 1; i < this.count; i++) {
      str += `,${this.items[this.lowestCount + i]}`;
    }
    return str;
  }
}

module.exports = { Queue };

