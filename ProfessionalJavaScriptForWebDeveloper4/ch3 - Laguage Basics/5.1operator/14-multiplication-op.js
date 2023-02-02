/*
 * @Author: mangwu                                                             *
 * @File: 14-.js                                                               *
 * @Date: 2022-05-30 15:34:29                                                  *
 * @LastModifiedDate: 2022-05-30 15:40:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 乘法操作符
// 将两个操作数转换为数值后进行乘操作
// 注意Infinity，NaN，0之间的相乘结果

console.log(Math.pow(10, 308), Math.pow(10, 308) * 10);
console.log(Infinity * 0);
console.log(NaN * 0);
console.log(Infinity * -45);
console.log(Infinity * -Infinity);

// 转换原则
console.log(true * "123");
console.log(null * "123");
console.log(undefined * "123");
console.log("" * "123");
console.log("0b1011" * 1);
console.log("0x2f" * 1);
console.log("2.50" * 1);
console.log("123a" * 1);

let o = {
  valueOf() {
    return true;
  },
  toString() {
    return "0x10";
  },
};
console.log(o * 1);
