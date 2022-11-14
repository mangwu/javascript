/*
 * @Author: mangwu                                                             *
 * @File: 12.1.7.1.2 window.setTimeout is a asynchronous function.js           *
 * @Date: 2022-11-14 16:34:53                                                  *
 * @LastModifiedDate: 2022-11-14 16:35:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 异步函数setTimeout
setTimeout(() => {
  console.log(5);
}, 5000);
setTimeout(() => {
  console.log(2);
}, 2000);
setTimeout(() => {
  console.log(1);
}, 1000);
