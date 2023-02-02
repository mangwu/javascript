/*
 * @Author: mangwu                                                             *
 * @File: 08-@@ierator.js                                                      *
 * @Date: 2022-03-02 21:30:38                                                  *
 * @LastModifiedDate: 2022-03-02 21:55:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 符号属性--迭代器

class Foo {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
  }
}
const foo = new Foo();

console.log(foo[Symbol.iterator]);

for (const i of foo) {
  console.log(i);
}

// 显式调用
class Bar {
  constructor(max) {
    this.idx = 0;
    this.max = max;
  }
  *[Symbol.iterator]() {
    while (this.idx < this.max) {
      yield this.idx++;
    }
  }
}
const bar = new Bar(3);
console.log(bar[Symbol.iterator]().next());
console.log(bar[Symbol.iterator]().next());
console.log(bar[Symbol.iterator]().next());
console.log(bar[Symbol.iterator]().next());

