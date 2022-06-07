/*
 * @Author: mangwu                                                             *
 * @File: 19.js                                                                *
 * @Date: 2022-05-31 21:55:50                                                  *
 * @LastModifiedDate: 2022-05-31 22:00:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 减法操作符
// 先将操作数转换为数值，再进行减法操作

console.log(-Infinity - Infinity);
console.log(-Infinity - -Infinity);
console.log(-0 - 0);

console.log("123" - true);
let o = {
  valueOf() {
    return "123";
  },
  toString() {
    return "789";
  },
};
console.log(o - null);
