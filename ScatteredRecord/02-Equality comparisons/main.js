/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-26 16:58:13                                                  *
 * @LastModifiedDate: 2022-08-26 17:06:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 四种比较算法
// 三种比较方式
// 1. 全等 ===
var num = 0;
var obj = new String("0");
var str = "0";
var b = false;
console.log(obj === obj);
console.log(num === obj);
console.log(num === str);
console.log(num === b);
console.log(null === undefined);
console.log(obj === null);
console.log(obj === undefined);
console.log(new Int32Array([1])[0] === new Int8Array([1])[0]);
