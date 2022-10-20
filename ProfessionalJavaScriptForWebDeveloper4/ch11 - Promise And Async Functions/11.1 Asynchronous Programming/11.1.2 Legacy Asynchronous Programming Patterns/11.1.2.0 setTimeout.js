/*
 * @Author: mangwu                                                             *
 * @File: 11.1.2.0 setTimeout.js                                               *
 * @Date: 2022-10-20 11:02:41                                                  *
 * @LastModifiedDate: 2022-10-20 11:30:21                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// setTimeout是一个异步函数
function double(value) {
  setTimeout(() => setTimeout(console.log, 0, value * 2), 1000);
}

double(3); // 大约1000ms后执行

function asyncGetSomething(requestParameters, callback) {
  setTimeout(() => {
    // 通过requestParameters异步操作获取到一些结果
    let res = requestParameters * 2;
    // 将结果
    callback(res);
  }, 1000);
}

function double(value, callback) {
  setTimeout(() => callback(value * 2), 1000);
}

function asyncGetSomething(requestParameters, callback) {
  setTimeout(() => {
    // 通过requestParameters异步操作获取到一些结果 这里只是简单模拟
    let res = requestParameters * 2;
    // 将结果传递给回调函数
    callback(res);
  }, 1000);
}