/*
 * @Author: mangwu                                                             *
 * @File: 5.3.5 Math.js                                                        *
 * @Date: 2022-07-13 16:54:16                                                  *
 * @LastModifiedDate: 2022-07-14 15:29:52                                      *
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
console.log(Math.max(4, 2, 8, 9));
console.log(Math.min(4, 2, 8, 9));
let values = [5, 8, 9, 6, 3, 1, 2, 4, 12, 54, 23, 6, 5, 85, 47, 5, 2, 6];
console.log(Math.max(...values));
console.log(Math.min(...values));
console.log(Math.min.apply(null, values));
console.log(Math.max.apply(null, values));
console.log(Math.max()); // -Infinity
console.log(Math.min()); // Infinity

// ceil()
console.log(Math.ceil(2.3));
console.log(Math.ceil(0.5));
console.log(Math.ceil(-0.5));
console.log(Math.ceil(-3.5));
console.log(Math.ceil(-5));

// floor()
console.log(Math.floor(2.3));
console.log(Math.floor(0.5));
console.log(Math.floor(-0.5));
console.log(Math.floor(-3.5));
console.log(Math.floor(-5));

// round()
console.log(Math.round(2.3));
console.log(Math.round(0.5));
console.log(Math.round(-0.5));
console.log(Math.round(-3.4));
console.log(Math.round(-5.6));

// fround()
console.log(Math.fround(1.5), Math.fround(1.5) == 1.5);
console.log(Math.fround(1.337), Math.fround(1.337) == 1.337);
console.log(Math.fround(2 ** 150), 2 ** 150);
console.log(
  Math.fround(0.1 + 0.2),
  Math.fround(0.3),
  Math.fround(0.1 + 0.2) == Math.fround(0.3),
  0.1 + 0.2 == 0.3
);

// random()
/**
 * @description 生成[fromVal, endVal]范围内的随机整数
 * @param {number} fromVal 开始数字
 * @param {number} endVal 结束数字
 * @returns {number}
 */
const getRandomSpecaifedRangeInt = (fromVal = 0, endVal = 1) => {
  const m = endVal - fromVal + 1;
  return Math.floor(Math.random() * m) + fromVal;
};
let random = getRandomSpecaifedRangeInt(25, 50);
// while (random !== 36) {
//   random = getRandomSpecaifedRangeInt(25, 50);
//   console.log(random);
// }

// 其它数学方法
console.log(Math.hypot(3, -4));
console.log(Math.clz32(123));
console.log(Math.sign(0));
console.log(Math.sign(-0));
console.log(Math.sign(-1));
console.log(Math.sign(1));
console.log(Math.trunc(1.2645));
console.log(Math.trunc(-1.2645));
console.log(Math.sqrt(-1.2645));
console.log(Math.cbrt(-8));
console.log(Math.asin(-1) == -Math.PI / 2);
