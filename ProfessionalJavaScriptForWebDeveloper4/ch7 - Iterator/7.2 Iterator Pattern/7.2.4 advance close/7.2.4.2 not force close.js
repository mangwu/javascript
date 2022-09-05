/*
 * @Author: mangwu                                                             *
 * @File: 7.2.4.2 not close.js                                                 *
 * @Date: 2022-09-05 14:47:56                                                  *
 * @LastModifiedDate: 2022-09-05 14:53:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 非强制关闭
const arr = [4, 2, 1, 5, 6];
const iter = arr.values();
for (const item of iter) {
  console.log(item);
  if (item < 2) {
    break;
  }
}
for (const item of iter) {
  console.log(item);
}

class Foo {
  constructor(limit) {
    this.limit = limit;
  }
  [Symbol.iterator]() {
    let count = 0;
    let limit = this.limit;
    return {
      next() {
        if (count < limit) {
          return { value: count++, done: false };
        }
        return { value: count, done: true };
      },
      return() {
        console.log("closed");
        return { done: true };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  }
  values() {
    return this[Symbol.iterator]();
  }
}
console.log("--自定义迭代器--");
const foo = new Foo(5);
const iter2 = foo.values();
for (const item of iter2) {
  console.log(item);
  if (item > 1) {
    break;
  }
}
for (const item of iter2) {
  console.log(item);
}
