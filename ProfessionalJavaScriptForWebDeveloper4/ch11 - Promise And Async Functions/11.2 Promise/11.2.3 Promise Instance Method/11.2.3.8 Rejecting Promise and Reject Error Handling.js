/*
 * @Author: mangwu                                                             *
 * @File: 11.2.3.8 Rejecting Promise and Reject Error Handling.js              *
 * @Date: 2022-10-24 22:43:34                                                  *
 * @LastModifiedDate: 2022-10-24 23:41:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 拒绝期约
let p1 = new Promise((resolve, reject) => reject(Error("foo")));
let p2 = new Promise((resolve, reject) => {
  throw new Error("foo");
});
let p3 = Promise.resolve().then(
  () => new Promise((resolve, reject) => reject(new Error("foo")))
);
let p4 = Promise.resolve().then(() => {
  throw new Error("foo");
});

let p5 = Promise.reject(new Error("foo"));
setTimeout(console.log, 0, p1);
setTimeout(console.log, 0, p2);
setTimeout(console.log, 0, p3);
setTimeout(console.log, 0, p4);
setTimeout(console.log, 0, p5);

// 同步抛出错误
throw Error("foo");
console.log("bar"); // 不会执行

// 异步抛出错误
Promise.reject(Error("foo"));
console.log(bar); // 会执行
// Uncaught (in promise) Error: foo

// 拒绝错误处理
Promise.reject(Error("foo")).catch((e) => console.log(e));

// 错误的捕获方式
try {
  Promise.reject(Error("foo"));
} catch (error) {}

// 在执行函数中使用try catch
let p = new Promise((resolve, reject) => {
  try {
    throw new Error("foo");
  } catch (error) {
    console.log(error);
  }
  resolve();
});
setTimeout(console.log, 0, p); // Promise {<fulfilled>: undefined}

// 同步错误处理和异步错误处理
console.log("开始同步错误处理");
try {
  throw new Error("foo");
} catch (error) {
  console.log("捕获错误:", error.toString());
}
console.log("结束同步错误处理");

new Promise((resolve, reject) => {
  console.log("开始异步拒绝错误处理");
  reject(new Error("foo"));
})
  .catch((reason) => {
    console.log("捕获异步错误：", reason.toString());
  })
  .then(() => {
    console.log("结束异步拒绝错误处理");
  });
