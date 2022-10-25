/*
 * @Author: mangwu                                                             *
 * @File: 11.2.4.1 Promise Chaining.js                                         *
 * @Date: 2022-10-25 16:48:55                                                  *
 * @LastModifiedDate: 2022-10-25 17:26:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 期约连锁，连缀调用Promise的API
let p = new Promise((resolve, _reject) => {
  console.log("first");
  setTimeout(() => resolve("DATA"), 500);
});

p.then((res) => {
  console.log("second:", res);
  return `dispose or wrap '${res}'`;
})
  .then((res) => {
    console.log("third:", res);
    return `dispose or wrap '${res}'`;
  })
  .then((res) => {
    console.log("fourth:", res);
    return `dispose or wrap '${res}'`;
  });

// 串行化异步任务
let p2 = new Promise((resolve) => {
  console.log("p2 executor");
  setTimeout(resolve, 500, "p2 data");
});

p2.then((res) => {
  console.log(res);
  return new Promise((resolve) => {
    console.log("p3 executor");
    setTimeout(resolve, 500, "p3 data");
  });
})
  .then((res) => {
    console.log(res);
    return new Promise((resolve) => {
      console.log("p4 executor");
      setTimeout(resolve, 500, "p4 data");
    });
  })
  .then((res) => {
    console.log(res);
    return new Promise((resolve) => {
      console.log("p5 executor");
      setTimeout(resolve, 500, "p5 data");
    });
  });

// 将生成期约的代码写在工厂函数中
/**
 * @description 生成Promise的工厂函数
 * @param {string} pStr 执行器打印字符串
 * @param {string} pdata 当前期约的内部值
 * @param {string} preData 上一个期约的内布置
 * @returns
 */
function delayedResolve(pStr, pdata, preData = "初始期约") {
  console.log(preData);
  return new Promise((resolve, _reject) => {
    console.log(pStr);
    setTimeout(resolve, 1000, pdata);
  });
}

delayedResolve("p1 executor", "p1 data")
  .then((res) => delayedResolve("p2 executor", "p2 data", res))
  .then((res) => delayedResolve("p3 executor", "p3 data", res))
  .then((res) => delayedResolve("p4 executor", "p4 data", res));
