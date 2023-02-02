/*
 * @Author: mangwu                                                             *
 * @File: 05-@@asyncIterator.js                                                *
 * @Date: 2022-02-28 23:30:18                                                  *
 * @LastModifiedDate: 2022-03-01 00:00:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 异步迭代器属性
class Foo {
  /**
   * @description 定义异步迭代器的生成器
   */
  async *[Symbol.asyncIterator]() {}
}
let foo = new Foo();
console.log(foo[Symbol.asyncIterator]);

/**
 * @description 一个被遍历的从0到N的迭代器类
 * @class IteratorFromZeroToN
 */
class IteratorFromZeroToN {
  constructor(max) {
    this.max = max;
    this.asyncId = 0;
  }
  /**
   * @generator asyncIterator 异步生成器
   */
  async *[Symbol.asyncIterator]() {
    while (this.asyncId <= this.max) {
      yield new Promise((resolve) => resolve(this.asyncId++));
    }
  }
}

async function asyncCount() {
  let zeroToFive = new IteratorFromZeroToN(5);
  for await (const x of zeroToFive) {
    console.log(x);
  }
}
asyncCount();
console.log("非异步执行语句先于异步执行语句执行");

let zeroToOne = new IteratorFromZeroToN(1);
console.log(
  zeroToOne[Symbol.asyncIterator]()
    .next()
    .then((value) => console.log(value))
    .catch((err) => {
      console.log(err, "异步迭代器执行next()失败");
    })
);
