/*
 * @Author: mangwu                                                             *
 * @File: 7.2.3.js                                                             *
 * @Date: 2022-09-05 11:20:50                                                  *
 * @LastModifiedDate: 2022-09-05 13:45:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 对象本身作为迭代器
class Foo {
  constructor(limit) {
    this.limit = limit;
    this.count = 0;
  }
  next() {
    if (this.count < this.limit) {
      return { done: false, value: this.count++ };
    } else {
      return { done: true, value: undefined };
    }
  }
  [Symbol.iterator]() {
    return this;
  }
}
const foo = new Foo(5);
for (const item of foo) {
  console.log(item);
}
for (const item of foo) {
  console.log(item);
}


