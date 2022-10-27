/*
 * @Author: mangwu                                                             *
 * @File: 11.2.4.3.3 Function Composition.js                                   *
 * @Date: 2022-10-27 13:39:55                                                  *
 * @LastModifiedDate: 2022-10-27 14:43:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 后续期约使用之前的期约的返回值来串联期约很像函数合成

function addTwo(x) {
  return x + 2;
}
function addThree(x) {
  return x + 3;
}
function addFive(x) {
  return x + 5;
}

// 合成函数
function addTen(x) {
  return addFive(addTwo(addThree(x)));
}
console.log(addTen(7)); // 17

// 转化为期约形式，假设每个函数都是复杂的操作
function addTen(x) {
  return Promise.resolve(x).then(addTwo).then(addThree).then(addFive);
}

addTen(8).then(console.log); // 18

// 通用函数，合成函数时使用reduce()高阶函数生成一个串联的函数
function compose(...fns) {
  return (x) =>
    fns.reduce((promise, fn) => promise.then(fn), Promise.resolve(x));
}

let addFifteen = compose(addFive, addTwo, addThree, addFive);
addFifteen(45).then(console.log); // 60

