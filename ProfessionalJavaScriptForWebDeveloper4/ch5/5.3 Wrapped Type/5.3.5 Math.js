/*
 * @Author: mangwu                                                             *
 * @File: 5.3.5 Math.js                                                        *
 * @Date: 2022-07-13 16:54:16                                                  *
 * @LastModifiedDate: 2022-07-13 17:38:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


// 单例内置对象Math，保存数学公式、信息、计算的地方，提供辅助计算的属性和方法
console.log(Math.E);
console.log(Math.LN10, Math.log(10));
console.log(Math.LN2, Math.log(2));
console.log(Math.LOG2E, Math.log2(Math.E));
console.log(Math.LOG10E, Math.log10(Math.E));
console.log(Math.PI);
console.log(Math.SQRT1_2, Math.sqrt(1 / 2));
console.log(Math.SQRT2, Math.sqrt(2));

// max() min()
console.log(Math.max(4,2,8,9));
console.log(Math.min(4,2,8,9));
let values = [5,8,9,6,3,1,2,4,12,54,23,6,5,85,47,5,2,6]
console.log(Math.max(...values));
console.log(Math.min(...values));
console.log(Math.min.apply(null, values));
console.log(Math.max.apply(null, values));
console.log(Math.max()); // -Infinity
console.log(Math.min()); // Infinity



