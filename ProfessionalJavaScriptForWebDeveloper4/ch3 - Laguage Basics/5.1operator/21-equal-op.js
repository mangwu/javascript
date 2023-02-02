/*
 * @Author: mangwu                                                             *
 * @File: 21-equal-op.js                                                       *
 * @Date: 2022-06-07 10:02:58                                                  *
 * @LastModifiedDate: 2022-06-07 10:39:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 相等操作符
// 分为进行类型转换的相等操作符与不进行类型转换的全等操作符

// 相等操作符，进行类型转换
let b = {
  valueOf() {
    return "1";
  },
};
const a = {
  valueOf() {
    return b;
  },
};
console.log(NaN == a);
console.log(NaN != a);
console.log(NaN == NaN);
console.log(true == a);
console.log(true == b);
console.log(false == a);
console.log(true == "0b1");
console.log(a == b);
// 两个特殊字面量
console.log(undefined == null);
console.log(undefined == false);

// 全等操作符
console.log(NaN !== NaN);
console.log(NaN === NaN);
console.log(undefined !== null);
console.log("0b1" === 1);
console.log("55" === 55);
let obj1 = {};
obj2 = obj1;
console.log(obj1 === obj2);
