/*
 * @Author: mangwu                                                             *
 * @File: 08-leftshift-op.js                                                   *
 * @Date: 2022-05-25 22:13:38                                                  *
 * @LastModifiedDate: 2022-05-25 22:17:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 左移
// 左移不溢出的最大位为被左移数的最高位距离符号位中0的个数
// 对于32位整数范围内的任何数，它左移的位数以32位为一个周期，左移32位会变为原始数值
let k = Math.floor(Math.random() * Math.pow(2, 31));
const num = Math.floor(Math.random() * 2) ? k : -k;

console.log(num << 32 == num);
console.log(num << 33 == num * 2);
console.log(num << 34 == num * 4);

