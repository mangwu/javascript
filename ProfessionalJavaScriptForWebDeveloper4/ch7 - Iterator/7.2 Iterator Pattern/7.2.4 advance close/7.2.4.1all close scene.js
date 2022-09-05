/*
 * @Author: mangwu                                                             *
 * @File: 7.2.4.1all close scene.js                                            *
 * @Date: 2022-09-05 14:25:06                                                  *
 * @LastModifiedDate: 2022-09-05 14:40:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 提前关闭场景
// 1. for of循环的break continue return throw
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
}
console.log("---数组解构---");
const foo = new Foo(3);
const [a, b, c] = foo;
console.log(a, b, c);
console.log("---break语句---");

for (const i of foo) {
  if (i > 1) break;
  console.log(i);
}
console.log("---抛出错误---");

try {
  for (let i of foo) {
    if (i > 1) {
      throw "iterator result i cannot bigger than 1";
    }
    console.log(i);
  }
} catch (error) {
  console.log(error);
}
