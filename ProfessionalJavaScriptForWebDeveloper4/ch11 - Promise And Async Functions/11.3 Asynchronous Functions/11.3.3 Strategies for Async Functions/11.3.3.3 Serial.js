/*
 * @Author: mangwu                                                             *
 * @File: 11.3.3.3 Serial.js                                                   *
 * @Date: 2022-10-31 01:39:29                                                  *
 * @LastModifiedDate: 2022-10-31 01:44:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 串行期约连锁 使用await和async优化

function addTwo(x) {
  return x + 2;
}

function addThree(x) {
  return x + 3;
}

function addFive(x) {
  return x + 5;
}

async function addTen(x) {
  for (const fn of [addTwo, addThree, addFive]) {
    x = await fn(x);
  }
  return x;
}
addTen(36).then(console.log);

function compose(...fns) {
  return (x) =>
    fns.reduce((promise, fn) => promise.then(fn), Promise.resolve(x));
}

let addFifteen = compose(addFive, addTwo, addThree, addFive);
addFifteen(22).then(console.log);
