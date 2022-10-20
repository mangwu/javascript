/*
 * @Author: mangwu                                                             *
 * @File: 11.2.2.0 Promise.js                                                  *
 * @Date: 2022-10-20 23:46:30                                                  *
 * @LastModifiedDate: 2022-10-20 23:49:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Promise引用类型

let promise = new Promise(() => {});
setTimeout(console.log, 0, promise);