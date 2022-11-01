/*
 * @Author: mangwu                                                             *
 * @File: 4.1.1 stack.js                                                       *
 * @Date: 2022-11-01 11:20:19                                                  *
 * @LastModifiedDate: 2022-11-01 11:23:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

class Stack {
  constructor() {
    this.items = [];
  }
  push(...eles) {
    this.items.push(...eles);
  }
  pop() {
    return this.items.pop();
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.items[this.size() - 1];
  }
  clear() {
    this.items = [];
  }
}
