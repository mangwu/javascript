/*
 * @Author: mangwu                                                             *
 * @File: 09-signRightShift-op.js                                              *
 * @Date: 2022-05-27 15:02:54                                                  *
 * @LastModifiedDate: 2022-05-27 15:04:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有符号右移,左侧补位为符号位
// 负数右移最终值-1
// 正数右移最终值0

let num = Math.floor(Math.random() * Math.pow(2, 31));

console.log(num >> 31, -num >> 31);
