/*
 * @Author: mangwu                                                             *
 * @File: 11.23.6 Promise.js                                                   *
 * @Date: 2022-10-24 21:43:39                                                  *
 * @LastModifiedDate: 2022-10-24 21:46:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 临近处理程序的顺序
let p1 = Promise.resolve();
let p2 = Promise.reject();

p1.then(() => console.log(1));
p1.then(() => setTimeout(console.log, 0, 4));

p2.catch(() => console.log(2));
p2.catch(() => setTimeout(console.log, 0, 5));

p1.finally(() => console.log(3));
p1.finally(() => setTimeout(console.log, 0, 6));
