/*
 * @Author: mangwu                                                             *
 * @File: Set.js                                                               *
 * @Date: 2023-07-19 16:40:28                                                  *
 * @LastModifiedDate: 2023-07-21 14:47:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

class MySet {
  constructor() {
    this.items = {};
    this.count = 0;
  }
  has(ele) {
    return Object.prototype.hasOwnProperty.call(this.items, ele);
  }
  add(ele) {
    if (this.has(ele)) return this;
    this.items[ele] = ele;
    this.count++;
    return this;
  }
  delete(ele) {
    if (this.has(ele)) {
      delete this.items[ele];
      this.count--;
      return true;
    }
    return false;
  }
  clear() {
    this.items = {};
    this.count = 0;
  }
  size() {
    return this.count;
  }
  values() {
    return Object.values(this.items);
  }
  [Symbol.iterator]() {
    return this.values()[Symbol.iterator]();
  }
}

module.exports = MySet;
