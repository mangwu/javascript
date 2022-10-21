/*
 * @Author: mangwu                                                             *
 * @File: 11.2.2.5 Promise.reject.js                                           *
 * @Date: 2022-10-21 17:21:59                                                  *
 * @LastModifiedDate: 2022-10-21 17:39:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Promise.reject()静态方法实例化一个处于拒绝状态的期约对象

// let p1 = Promise.reject();
// let p2 = new Promise((resolve, reject) => reject());
// console.log(p1);
// console.log(p2);

// 第一个参数接受拒绝的期约的理由
let p = Promise.reject("reason");
console.log(p);
let c = p.then(null, (e) => {
  console.log(e);
})
