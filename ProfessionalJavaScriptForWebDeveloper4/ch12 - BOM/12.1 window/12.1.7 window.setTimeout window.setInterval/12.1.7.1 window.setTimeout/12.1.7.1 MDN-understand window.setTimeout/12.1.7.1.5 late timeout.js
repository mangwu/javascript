/*
 * @Author: mangwu                                                             *
 * @File: 12.1.7.1.5 late timeout.js                                           *
 * @Date: 2022-11-15 22:15:19                                                  *
 * @LastModifiedDate: 2022-11-15 22:39:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const last = new Date().getMilliseconds();
setTimeout(() => {
  console.log("实际延迟时间：", new Date().getMilliseconds() - last);
}, 0);
let sum = 0;
for (let i = 0; i < 1000000; i++) {
  sum += i;
}
