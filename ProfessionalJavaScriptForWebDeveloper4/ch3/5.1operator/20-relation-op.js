/*
 * @Author: mangwu                                                             *
 * @File: 20-relation-op.js                                                    *
 * @Date: 2022-05-31 22:46:57                                                  *
 * @LastModifiedDate: 2022-05-31 22:49:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 关系操作符，优先(两个都是字符串除外)转换为数值后进行比较
// 字符串比较按照编码一一比较的原则

console.log("B" < "b");
console.log("23" < "3");
console.log(null < "3"); // 转换为数值
console.log(true > "0"); // 转换为数值
console.log("a" > 3); // 转换为NaN，NaN和任何值比较返回false
