/*
 * @Author: mangwu                                                             *
 * @File: 11.3.1.2 await keyword.js                                            *
 * @Date: 2022-10-29 18:29:02                                                  *
 * @LastModifiedDate: 2022-10-30 02:16:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// await

async function foo() {
  let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
  console.log(await p);
  console.log(1);
}
foo();
console.log(2);

async function foo2() {
  let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
  p.then((res) => console.log(res));
  console.log(1);
}
foo2();

// 单独使用，在表达式中使用都可以
async function printFoo() {
  console.log(await Promise.resolve("foo"));
}
printFoo();

async function returnBar() {
  return await Promise.resolve("bar");
}
let a = returnBar();
console.log(a);
a.then(console.log);

// 异步打印
async function printBaz() {
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  console.log("baz");
}
printBaz();

// await期待一个实现thenable接口的对象，但是常规的值也可以

// 等待一个原始值
async function primaryType() {
  console.log(await "foo");
}
primaryType();
// 等待一个没有实现thenable接口的对象
async function obj() {
  console.log(await ["bar"]);
}
obj();
// 等待一个实现了thenable接口的非期约对象
async function thenableObj() {
  console.log(
    await {
      then(callback) {
        callback("baz");
      },
    }
  );
}
thenableObj();

// 等待一个期约
async function promiseType() {
  console.log(await Promise.resolve("qux"));
}
promiseType();

// 抛出错误
async function throwError() {
  console.log(1);
  await (() => {
    throw 3;
  })();
}

let t1 = throwError();
console.log(t1);
t1.catch(console.log);
console.log(2);

async function throwError2() {
  console.log(1);
  await Promise.reject(3);
  console.log(4);
}
let t2 = throwError2();
console.log(t2);
t2.catch(console.log);
console.log(2);

// 立即定义执行异步函数
async function normalAFunc() {
  console.log(await Promise.resolve(3));
}
normalAFunc();
(async function () {
  console.log(await Promise.resolve(3));
})();

(async function () {
  for (let i = 0; i < 3; i++) {
    console.log(await Promise.resolve(3));
  }
  function syncFn() {
    return await Promise.resolve("bar");
  }
})();
