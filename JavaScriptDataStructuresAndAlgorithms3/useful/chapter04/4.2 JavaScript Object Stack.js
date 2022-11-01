/*
 * @Author: mangwu                                                             *
 * @File: 4.2 JavaScript Object Stack.js                                       *
 * @Date: 2022-11-01 13:34:12                                                  *
 * @LastModifiedDate: 2022-11-01 14:52:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// JavaScript对象栈数据结构
class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }
  push(...eles) {
    for (const ele of eles) {
      this.items[this.count++] = ele;
    }
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const res = this.items[--this.count];
    delete this.items[this.count];
    return res;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  clear() {
    this.items = {};
    this.count = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString += `,${this.items[i]}`;
    }
    return objString;
  }
}

const stack = new Stack();
stack.push(1, 5, 6, 2, 4, 3);
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
stack.push(1);
console.log(stack.size());
console.log(stack.toString());
stack.clear();
console.log(stack.isEmpty());
