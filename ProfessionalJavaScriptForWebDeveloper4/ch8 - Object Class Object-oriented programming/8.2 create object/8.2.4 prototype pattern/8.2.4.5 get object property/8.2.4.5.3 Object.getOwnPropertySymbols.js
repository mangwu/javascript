/*
 * @Author: mangwu                                                             *
 * @File: 8.2.4.5.3 Object.getOwnPropertySymbols.js                            *
 * @Date: 2022-09-15 17:26:51                                                  *
 * @LastModifiedDate: 2022-09-15 17:34:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 获取所有的自有符号属性
let sym1 = Symbol("sym1");
let sym2 = Symbol("sym2");

console.log(Object.getOwnPropertySymbols(sym1));
console.log(Object.getOwnPropertySymbols("123456"));

const obj = {};
Object.defineProperties(obj, {
  [sym1]: {
    enumerable: true,
    value: "sym1",
  },
  [sym2]: {
    enumerable: false,
    value: "sym1",
  },
});
console.log(obj);
console.log(Object.getOwnPropertySymbols(obj));
