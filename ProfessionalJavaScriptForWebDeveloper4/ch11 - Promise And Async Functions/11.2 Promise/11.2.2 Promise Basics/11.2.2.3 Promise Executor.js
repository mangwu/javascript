/*
 * @Author: mangwu                                                             *
 * @File: 11.2.2.3 Promise.js                                                  *
 * @Date: 2022-10-21 12:42:35                                                  *
 * @LastModifiedDate: 2022-10-21 14:53:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 通过执行函数控制期约状态

let p1 = new Promise((resolve, reject) => resolve());
console.log(p1);
setTimeout(console.log, 0, p1);
// 下述报错
// let p2 = new Promise((resolve, reject) => reject());
// console.log(p2);
// setTimeout(console.log, 0, p2);

// 观察顺序
let p3 = new Promise(() => setTimeout(console.log, 0, "executor"));
console.log(p3); // Promise { <pending> }
setTimeout(console.log, 0, "promise initialized");

// 推迟切换形态
let p4 = new Promise((resolve, reject) => setTimeout(resolve, 1000));
setTimeout(console.log, 0, p4);
setTimeout(console.log, 1000, p4);

// 不可撤销的状态转换
let p5 = new Promise((resolve, reject) => {
  resolve();
  reject(); // 默认被忽略
  console.log("----");
});
console.log(p5);

// 避免期约一直在等待状态
let p6 = new Promise((resolve, reject) => {
  setTimeout(reject, 10000); // 10秒后调用reject拒绝函数
  // 进行请求
  /** 请求的异步代码有10秒的请求时间，请求成功就执行resolve */
});
setTimeout(console.log, 0, p6);
setTimeout(console.log, 10001, p6);
