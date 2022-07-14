/*
 * @Author: mangwu                                                             *
 * @File: 5.3.2 Number.js                                                      *
 * @Date: 2022-07-04 22:35:12                                                  *
 * @LastModifiedDate: 2022-07-04 23:35:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Number包装类型

const num = 1225.35688;
const numObj = new Number(num);
// 继承的方法被重写
console.log(numObj.valueOf(), numObj.toLocaleString(), numObj.toString(16));

// toFixed方法
const num2 = 12.25;
console.log(num2.toFixed(), num2.toFixed(1), num2.toFixed(2), num2.toFixed(3));

// toExponential()方法
const num3 = 15387814524.215;
console.log(
  num3.toExponential(),
  num3.toExponential(1),
  num3.toExponential(2),
  num3.toExponential(3),
  num3.toExponential(15)
);

// toPrecision()
const num4 = 555;
console.log(
  num4.toPrecision(),
  num4.toPrecision(1),
  num4.toPrecision(2),
  num4.toPrecision(3),
  num4.toPrecision(4),
  num4.toPrecision(5)
);

// Number.isInteger()

console.log(Number.isInteger(5.0), Number.isInteger(5.00001));

// Number.isSafeInteger()

console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
