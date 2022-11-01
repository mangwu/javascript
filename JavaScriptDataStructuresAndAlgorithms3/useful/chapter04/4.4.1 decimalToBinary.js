/*
 * @Author: mangwu                                                             *
 * @File: 4.4.1.js                                                             *
 * @Date: 2022-11-01 21:11:42                                                  *
 * @LastModifiedDate: 2022-11-01 21:38:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 使用栈解决十进制到二级制的问题
const { Stack } = require("./4.2.2 private property");

function decimalToBinary(decNum) {
  const stack = new Stack();
  while (decNum) {
    let rest = decNum % 2;
    decNum = Math.floor(decNum / 2);
    stack.push(rest);
  }
  let binaryStr = "";
  while (!stack.isEmpty()) {
    binaryStr += stack.pop();
  }
  return binaryStr;
}

// console.log(decimalToBinary(15));
// console.log(decimalToBinary(1554));

// let a = 15
// let b = 1554;
// console.log(a.toString(2));
// console.log(b.toString(2));

function baseConverter(decNum, base = 10) {
  const stack = new Stack();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (base < 2 || base > 36) {
    // 不满足条件
    return "";
  }
  while (decNum) {
    let rem = decNum % base;
    stack.push(rem);
    decNum = Math.floor(decNum / base);
  }
  let baseStr = "";
  while (!stack.isEmpty()) {
    baseStr += digits[stack.pop()];
  }
  return baseStr;
}
let num = 99999;
console.log(baseConverter(99999, 2), num.toString(2));
console.log(baseConverter(99999, 4), num.toString(4));
console.log(baseConverter(99999, 8), num.toString(8));
console.log(baseConverter(99999, 10), num.toString(10));
console.log(baseConverter(99999, 16), num.toString(16));
console.log(baseConverter(99999, 20), num.toString(20));
console.log(baseConverter(99999, 32), num.toString(32));
console.log(baseConverter(99999, 36), num.toString(36));

