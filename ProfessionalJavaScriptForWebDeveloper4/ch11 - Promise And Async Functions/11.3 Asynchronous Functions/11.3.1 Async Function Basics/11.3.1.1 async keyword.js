/*
 * @Author: mangwu                                                             *
 * @File: 11.3.1.1 async keyword.js                                            *
 * @Date: 2022-10-28 22:36:33                                                  *
 * @LastModifiedDate: 2022-10-29 18:13:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// async关键字用于声明异步函数

async function foo() {}
let bar = async function () {};
let baz = async () => {};
class Qux {
  async que() {}
}
console.log(foo);

// 异步函数仍然具有普通函数的正常行为
async function logOne() {
  console.log(1);
}
logOne();
console.log(2);

// 异步函数的返回值会被Promise.resolve进行包装

async function getThree() {
  console.log(1);
  return 3;
}
let a = getThree();
console.log(a);
a.then((res) => console.log(res));
console.log(2);

async function getThree2() {
  console.log(1);
  return Promise.resolve(3);
}
let b = getThree();
console.log(b);
b.then((res) => console.log(res));
console.log(2);

// 一些异步函数返回值类型不同的例子

// 返回一个原始值
async function primaryType() {
  return "foo"; // 会被Promise.resolve()进行包装
}
let p1 = primaryType();
console.log(p1);
p1.then((res) => console.log(res));

// 返回一个没有使用thenable接口的对象
async function objType() {
  return ["bar"]; // 会被Promise.resolve()进行包装
}
let p2 = objType();
console.log(p2);
p2.then((res) => console.log(res));

// 返回一个实现了thenable接口的非期约对象
async function thenableObj() {
  const thenable = {
    then(callback) {
      callback("baz");
    },
  };
  return thenable;
}
let the = thenableObj();
console.log(the);
the.then((res) => console.log(res));

// 返回一个期约
async function promise() {
  return Promise.resolve("qux");
}
let p3 = promise();
console.log(p3);
p3.then((res) => console.log(res));

// 抛出错误
async function throwError() {
  console.log(1);
  throw 3;
}
let t1 = throwError();
console.log(t1);
t1.catch(console.log);
console.log(2);

async function throwError2() {
  console.log(1);
  return Promise.reject(3);
}
let t2 = throwError2();
console.log(t2);
t2.catch(console.log);
console.log(2);


async function throwError3() {
  console.log(1);
  Promise.reject(3);
}
let t3 = throwError3();
console.log(t3);
t3.catch(console.log);
console.log(2);
