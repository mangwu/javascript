/*
 * @Author: mangwu                                                             *
 * @File: 8.2.4.8.3 native object prototype.js                                 *
 * @Date: 2022-09-16 14:24:00                                                  *
 * @LastModifiedDate: 2022-09-16 14:29:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 原生对象原型

console.log(String.prototype.startsWith);
console.log(Array.prototype.push);
String.prototype.isPalindrome = function () {
  for (let i = 0; i < this.length / 2; i++) {
    if (this[i] !== this[this.length - i - 1]) {
      return false;
    }
  }
  return true;
};
console.log("12a3a21".isPalindrome());
console.log("abssbaa".isPalindrome());
