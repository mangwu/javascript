/*
 * @Author: mangwu                                                             *
 * @File: 11.2.3.1 Promise.prototype.then().js                                 *
 * @Date: 2022-10-22 01:47:50                                                  *
 * @LastModifiedDate: 2022-10-23 19:13:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Thenable接口
class MyThenable {
  then() {}
}

// Promise.prototype.then

// Promise进入兑现状态时的处理程序
function onResolved(id) {
  setTimeout(console.log, 0, id, "resolved");
}
// Promise进入拒绝状态时的处理程序
function onRejected(id) {
  setTimeout(console.log, 0, id, "rejected");
}
// 3秒后进入兑现状态
let p1 = new Promise((resolve, reject) => setTimeout(resolve, 3000));
// 3秒后进入拒绝状态
let p2 = new Promise((resolve, reject) => setTimeout(reject, 3000));

p1.then(
  () => onResolved("p1"),
  () => onRejected("p1")
);
p2.then(
  () => onResolved("p2"),
  () => onRejected("p2")
);

// 3秒后进入兑现状态
let p3 = new Promise((resolve, reject) => setTimeout(resolve, 3000));
// 3秒后进入拒绝状态
let p4 = new Promise((resolve, reject) => setTimeout(reject, 3000));
// 会被忽略，不推荐
p3.then("auisdhc");
// 不传递onResolved处理程序的规范写法
p4.then(null, () => onRejected("p4"));

// p.then()的返回值
// 4秒后进入兑现状态
let p5 = new Promise((resolve, reject) => setTimeout(resolve, 4000));
let reP5 = p5.then(() => {
  // onResolved
  console.log("p5 resolved");
  // 返回p5作为p5.then返回值(Promise兑现)包装的值
  return "p5";
});
setTimeout(console.log, 4000, reP5);

// 3秒后进入兑现状态
let p6 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve("foo");
  }, 500)
);
// 不传递任何处理程序
let p7 = p6.then();
setTimeout(() => {
  console.log(p6);
  console.log(p7);
  console.log(p6 === p7);
}, 500);
// 返回的Promise兑现内部值都是undefined的例子
let p8 = p6.then(() => undefined);
let p9 = p6.then(() => {});
let p10 = p6.then(() => Promise.resolve());
setTimeout(() => {
  console.log(p8);
  console.log(p9);
  console.log(p10);
}, 500);

// 在处理程序中抛出异常
const p11 = Promise.resolve("foo");
let p12 = p11.then(() => {
  throw "baz";
});
setTimeout(() => {
  console.log(p12);
}, 0);
let p13 = p11.then(() => Error("qux"));
setTimeout(() => {
  console.log(p13);
}, 0);

// p.then()的返回值
// 4秒后进入兑现状态
let p5_ = new Promise((resolve, reject) => setTimeout(reject, 4000));
let reP5_ = p5_.then(null, () => {
  // onRjected
  console.log("p5 rejected");
  // 返回p5_作为p5_.then返回值(Promise兑现)包装的值
  return "p5_";
});
setTimeout(console.log, 4000, reP5_);

// 3秒后进入兑现状态
let p6_ = new Promise((resolve, reject) =>
  setTimeout(() => {
    reject("foo");
  }, 500)
);
// 不传递任何处理程序
let p7_ = p6_.then();
setTimeout(() => {
  console.log(p6_);
  console.log(p7_);
  console.log(p6_ === p7_);
}, 500);
// 返回的Promise兑现内部值都是undefined的例子
let p8_ = p6_.then(null, () => undefined);
let p9_ = p6_.then(null, () => {});
let p10_ = p6_.then(null, () => Promise.resolve());
setTimeout(() => {
  console.log(p8_);
  console.log(p9_);
  console.log(p10_);
}, 500);

// 在处理程序中抛出异常
const p11_ = Promise.reject("foo");
let p12_ = p11_.then(null, () => {
  throw "baz";
});
setTimeout(() => {
  console.log(p12_);
}, 0);
let p13_ = p11_.then(null, () => Error("qux"));
setTimeout(() => {
  console.log(p13_);
}, 0);
