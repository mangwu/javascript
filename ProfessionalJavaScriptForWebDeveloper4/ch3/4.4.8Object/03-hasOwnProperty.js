/*
 * @Author: mangwu                                                             *
 * @File: 03-hasOwnProperty.js                                                 *
 * @Date: 2022-05-23 17:16:37                                                  *
 * @LastModifiedDate: 2022-05-23 17:24:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// hasOwnProperty只检查自定义属性，不检查来自原型链上的属性
const o = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: "property1",
  1: "property2",
};
console.log(o.hasOwnProperty(Symbol.isConcatSpreadable)); // true
console.log(o.hasOwnProperty(0)); // true
console.log(o.hasOwnProperty(Symbol.iterator)); // false
console.log(o.hasOwnProperty("toString")); // false
console.log(o.hasOwnProperty("hasOwnProperty")); // false

// in操作符
for (const name in o) {
  if (o.hasOwnProperty(name)) {
    console.log("own property:", name, o[name]);
  } else {
    console.log("prototype property:", name, o[name]);
  }
}
