/*
 * @Author: mangwu                                                             *
 * @File: 11.2.3.3 Promise.prototype.catch().js                                *
 * @Date: 2022-10-23 22:26:24                                                  *
 * @LastModifiedDate: 2022-10-23 22:32:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 语法糖，用于给期约添加拒绝处理程序

let p = Promise.reject("reason");
let onRejected = function (e) {
  console.log(e);
  setTimeout(console.log, 0, "rejected");
};

// 两种添加拒绝处理程序的方式是一样的
p.then(null, onRejected); // rejected
p.catch(onRejected); // rejected

// 返回一个Promise实例

let p1 = new Promise(() => {});
let p2 = p1.catch();
setTimeout(console.log, 0, p1);
setTimeout(console.log, 0, p2);
setTimeout(console.log, 0, p1 === p2);
