/*
 * @Author: mangwu                                                             *
 * @File: 6.2.2.6 array_queue_function.js                                      *
 * @Date: 2022-07-20 17:24:22                                                  *
 * @LastModifiedDate: 2022-07-20 17:33:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 队列方法
const arr = [];
arr.push(1, undefined);
console.log(arr.shift(), arr);
console.log(arr.shift(), arr);
console.log(arr.shift(), arr);

// 反向队列
const arr2 = [];
console.log(arr2.unshift(1, 2), arr2);
console.log(arr2.pop());
console.log(arr2.pop());

