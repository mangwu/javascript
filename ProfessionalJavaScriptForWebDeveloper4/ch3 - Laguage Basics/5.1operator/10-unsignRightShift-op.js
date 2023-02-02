/*
 * @Author: mangwu                                                             *
 * @File: 10-unsignRightShift-op.js                                            *
 * @Date: 2022-05-27 16:44:32                                                  *
 * @LastModifiedDate: 2022-05-30 10:43:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 无符号右移
// 无符号右移会移动符号位，且左侧补0
// 符号无符号右移会变为无符号数（正数）
console.log(-1 >>> 0 === -1 >>> 32);
console.log(-1 >>> 1);
