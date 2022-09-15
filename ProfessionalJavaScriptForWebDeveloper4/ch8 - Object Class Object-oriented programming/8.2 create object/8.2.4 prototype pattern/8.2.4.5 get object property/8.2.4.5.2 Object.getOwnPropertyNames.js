/*
 * @Author: mangwu                                                             *
 * @File: 8.2.4.5.2 Object.getOwnPropertyNames.js                              *
 * @Date: 2022-09-15 15:32:40                                                  *
 * @LastModifiedDate: 2022-09-15 15:55:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 获取对象的自有非符号属性构成的字符串数组
let sym = Symbol("custom");
const obj = {};
Object.defineProperties(obj, {
  12: {
    value: "12",
    enumerable: false,
  },
  name: {
    value: "mangwu",
    enumerable: false,
  },
  age: {
    value: 22,
    enumerable: true,
  },
  job: {
    value: "software",
    enumerable: false,
  },
  0: {
    enumerable: true,
    value: "0",
  },
  [3]: {
    enumerable: false,
    value: "3",
  },
  7: {
    enumerable: true,
    value: 7,
  },
  [sym]: {
    enumerable: false,
    value: sym,
  },
  [10]: {
    value: 10,
    enumerable: true,
  },
});

console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertyDescriptors(obj)); // 会获取自有属性的特征（包括符号属性）
// 获取自有不可枚举的非符号属性
const enumOwnPro = Object.keys(obj);
const enumOwnProSet = new Set(enumOwnPro);
const allOwnPro = Object.getOwnPropertyNames(obj);
const nonEnumOwnPro = allOwnPro.filter((v) => !enumOwnProSet.has(v));
console.log(nonEnumOwnPro);