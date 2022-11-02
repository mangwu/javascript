/*
 * @Author: mangwu                                                             *
 * @File: 5.2.1 Deque.js                                                       *
 * @Date: 2022-11-02 16:16:59                                                  *
 * @LastModifiedDate: 2022-11-02 16:55:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

class Deque {
  constructor() {
    this.front = -1;
    this.back = 0;
    this.items = {};
  }
  addFront(...eles) {
    for (const ele of eles) {
      this.items[this.front--] = ele;
    }
  }
  addBack(...eles) {
    for (const ele of eles) {
      this.items[this.back++] = ele;
    }
  }
  size() {
    return this.back - this.front - 1;
  }
  isEmpty() {
    return this.size() === 0;
  }
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    let res = this.items[++this.front];
    delete this.items[this.front];
    return res;
  }
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    let res = this.items[--this.back];
    delete this.items[this.back];
    return res;
  }
  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.front + 1];
  }
  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.back - 1];
  }
  clear() {
    this.items = {};
    this.front = -1;
    this.back = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let n = this.size();
    let str = `${this.peekFront()}`;
    for (let i = 1; i < n; i++) {
      str += `,${this.items[this.front + i + 1]}`;
    }
    return str;
  }
}

module.exports = { Deque };
