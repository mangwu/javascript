/*
 * @Author: mangwu                                                             *
 * @File: 16-modulus-op.js                                                     *
 * @Date: 2022-05-30 16:33:08                                                  *
 * @LastModifiedDate: 2022-05-30 16:46:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


// 取模运算，本质上是乘性操作符
// 先转换为数值类型，再考虑Infinity 0 NaN 数值范围的问题

console.log(1 % 0); // NaN
console.log(Infinity % 200); // NaN
console.log(6 % Infinity); // 6
console.log(NaN % Infinity); // NaN
console.log(Math.pow(10, 309) % 10); // NaN



