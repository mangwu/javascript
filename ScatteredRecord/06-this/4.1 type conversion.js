/*
 * @Author: mangwu                                                             *
 * @File: 4.1 type.js                                                          *
 * @Date: 2022-10-02 21:28:10                                                  *
 * @LastModifiedDate: 2022-10-03 20:32:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 类型转换

// 非严格模式下，this值会进行类型转换，一定是对象
// 严格模式下，this值不会进行类型转换，传入的是什么就是什么
function logThis() {
  console.log(this);
}
function logStrictlyThis() {
  "use strict";
  console.log(this);
}

logThis.apply("5", []);
logThis.apply(Symbol("123"), []);
logThis.apply(undefined, []);

logStrictlyThis.apply("7", []);
logStrictlyThis.apply(Symbol("123"), []);
logStrictlyThis.apply(undefined, []);
