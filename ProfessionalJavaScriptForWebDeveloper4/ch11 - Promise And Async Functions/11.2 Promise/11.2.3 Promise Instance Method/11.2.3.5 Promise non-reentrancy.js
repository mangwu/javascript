/*
 * @Author: mangwu                                                             *
 * @File: 11.2.3.5 Promise non-reentrancy.js                                   *
 * @Date: 2022-10-24 20:29:54                                                  *
 * @LastModifiedDate: 2022-10-24 21:09:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 非重入特性，then，catch等异步方法都是非重入函数
// 即不能在执行一半后再被安全执行

// 创建解决的期约
let p = Promise.resolve();

// 添加解决处理程序
p.then(() => console.log("onResolved handler"));

/// 添加onFinally处理程序
p.finally(() => console.log("onFinally handler"));
// 同步输出
console.log("then() returns");

let synchronousResolve = null;

let p1 = new Promise((resolve) => {
  synchronousResolve = function () {
    console.log("1: invoking resolve()");
    resolve();
    console.log("2: resolve return");
  };
});

p1.then(() => console.log("4:then() handler executes"));

synchronousResolve();
console.log("3: synchronousResolve() returns");

// catch finally的处理程序同样适用

let pa = Promise.resolve();
let pb = Promise.reject();
let pc = Promise.reject();
let pd = Promise.resolve();

// 进入落地状态时调用对应的处理程序
pa.then(() => console.log("5: pa.then() onResolved"));
pb.then(null, () => console.log("6: pb.then() onRejected"));
pc.catch(() => console.log("7: pc.catch onRejected"));
pd.finally(() => console.log("8: pd.finally onFinally"));

console.log("1: pa.then() returns");
console.log("2: pb.then() returns");
console.log("3: pc.catch() returns");
console.log("4: pd.finally() returns");
