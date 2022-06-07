/*
 * @Author: mangwu                                                             *
 * @File: 04-not-op.js                                                         *
 * @Date: 2022-05-24 22:29:57                                                  *
 * @LastModifiedDate: 2022-05-25 20:15:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 按位非
let num = 123;
console.log(~num);

// 相当于取负数然后减去1
let num2 = 123;
console.log(-num2 - 1);

let num3 = Math.floor(Math.random() * Math.pow(2, 31));
console.log(num3);
console.log(~num3 == -num3 - 1);
