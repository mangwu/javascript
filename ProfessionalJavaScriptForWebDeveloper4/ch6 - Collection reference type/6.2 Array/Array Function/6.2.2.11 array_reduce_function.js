/*
 * @Author: mangwu                                                             *
 * @File: 6.2.2.11 array_reduce_function.js                                    *
 * @Date: 2022-07-26 10:15:20                                                  *
 * @LastModifiedDate: 2022-07-26 10:19:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 归并方法

// reduce()
const arr = [1, 2, 5, 8, 6, 3, 4, 2];
console.log(arr.reduce((pre, cur) => pre + cur));
console.log(arr.reduce((pre, cur) => pre - cur, 100));

// reduceRight()
console.log(arr.reduceRight((pre, cur) => pre + cur));
console.log(arr.reduceRight((pre, cur) => pre - cur, 100));
