/*
 * @Author: mangwu                                                             *
 * @File: 11.2.4.3 Promise Composition.js                                      *
 * @Date: 2022-10-26 13:07:03                                                  *
 * @LastModifiedDate: 2022-10-26 15:14:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Promise.All() 创建一个由参数组成的新期约，
// 这个新期约会再一组期约全部解决后再解决

let p1 = Promise.all([Promise.resolve(), Promise.resolve()]);
console.log(p1);
setTimeout(console.log, 0, p1);
// 可迭代元素可以不是期约
// 但是它会作为期约的内部值传递给Promise.resolve()转换为期约
let p2 = Promise.all([1, 2]);
console.log(p2);
setTimeout(console.log, 0, p2);

// 空的可迭代对象等价于Promise.resolve()
let p3 = Promise.all([]);
console.log(p3);
setTimeout(console.log, 0, p3);
// 必须给Promise.all传递一个可迭代对象，否则会报错
let p4 = Promise.all();
p4.catch((reason) => {
  console.log(reason.toString());
});

// 合成的期约等待的时间是包含的最后一个期约的解决时间
let pa = Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1: resolved");
      resolve();
    }, 589);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2: resolved");
      resolve();
    }, 345);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3: resolved");
      resolve();
    }, 456);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("4: resolved");
      resolve();
    }, 590);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("5: resolved");
      resolve();
    }, 589);
  }),
]);
pa.then(() => {
  console.log("pa: resolved");
});

// 永远待定的期约
let p_pending = Promise.all([Promise.resolve("k"), new Promise(() => {})]);
setTimeout(() => {
  console.log(p_pending);
}, 0);

// 一个拒绝的期约会导致合成期约处于拒绝状态
let p_reject = Promise.all([
  new Promise((_resolve, reject) =>
    setTimeout(
      (reason) => {
        console.log("1: rejected");
        reject(reason);
      },
      1001,
      "reason1"
    )
  ),
  Promise.resolve("resolve"),
  Promise.resolve("resolve"),
  new Promise((_resolve, reject) =>
    setTimeout(
      (reason) => {
        console.log("2: rejected");
        reject(reason);
      },
      1000,
      "reason2"
    )
  ),
  new Promise((_resolve, reject) =>
    setTimeout(
      (reason) => {
        console.log("3: rejected");
        reject(reason);
      },
      1000,
      "reason3"
    )
  ),
]);

p_reject.catch((reason) => {
  console.log(reason);
});
setTimeout(() => {
  console.log(p_reject);
}, 1000);

// 合成的期约的内部值
let p_resolved = Promise.all([
  Promise.resolve(5),
  Promise.resolve(),
  Promise.resolve(1),
]);
p_resolved.then((res) => {
  console.log("内部值：", res);
});
