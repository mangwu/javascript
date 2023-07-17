/*
 * @Author: mangwu                                                             *
 * @File: 5.3.2 p.js                                                           *
 * @Date: 2023-07-17 10:28:59                                                  *
 * @LastModifiedDate: 2023-07-17 10:32:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const { Deque } = require("./5.2.1 Deque.js");
/**
 * @description 回文检查器
 * @param {string} str 被检查的字符串
 * @return {boolean}
 */
var palindromeChecker = function (str) {
  const deque = new Deque();
  for (const ch of str) {
    deque.addBack(ch);
  }
  while (deque.size() > 1) {
    const firstChar = deque.removeFront();
    const lastChar = deque.removeBack();
    if (firstChar !== lastChar) {
      return false;
    }
  }
  return true;
};
console.log(palindromeChecker("asjcgsahc"));
console.log(palindromeChecker("madam"));
console.log(palindromeChecker("acsahsbbshasca"));

