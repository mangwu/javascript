/*
 * @Author: mangwu                                                             *
 * @File: 13-logicOr-op.js                                                     *
 * @Date: 2022-05-30 14:12:34                                                  *
 * @LastModifiedDate: 2022-05-30 14:14:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 逻辑或 短路原则
// 第一个操作数转换为true就返回第一个操作数
// 第一个操作数转换为false就返回第二个操作数

let o = {};
let rez = o || undeclaredVar; // 不会报错
console.log(rez); 
