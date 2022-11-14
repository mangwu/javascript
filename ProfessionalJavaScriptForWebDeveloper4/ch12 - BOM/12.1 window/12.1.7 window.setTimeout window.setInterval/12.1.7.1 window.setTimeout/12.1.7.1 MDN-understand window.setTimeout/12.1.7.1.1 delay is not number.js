/*
 * @Author: mangwu                                                             *
 * @File: 12.1.7.1.1 delay is not number.js                                    *
 * @Date: 2022-11-14 16:18:50                                                  *
 * @LastModifiedDate: 2022-11-14 16:23:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 延迟值并非数字

// 数字字符串的情况
setTimeout(() => {
  console.log("Delay for 1 second.");
}, "1000");


setTimeout(() => {
  console.log("Delay for 1 second.");
}, "1 second");