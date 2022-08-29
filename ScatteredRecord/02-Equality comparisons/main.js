/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-26 16:58:13                                                  *
 * @LastModifiedDate: 2022-08-29 17:27:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 四种比较算法
// 三种比较方式
// 1. 全等 === 先看类型，再同类型比较 +0 === -0 遇到NaN直接返回false
console.log("===");
var num = 0;
var obj = new String("0");
var str = "0";
var b = false;
console.log(obj === obj);
console.log(num === obj);
console.log(num === str);
console.log(num === b);
console.log(null === undefined);
console.log(obj === null);
console.log(obj === undefined);
console.log(new Int32Array([1])[0] === new Int8Array([1])[0]);

// 2. 不严格相等 == 又称松散比较，可以进行类型转换
console.log("==");
console.log(+0 == -0); // 同类型比较
console.log(NaN == NaN); // 同类型比较
console.log(Symbol.call == Symbol.call); // 同类型比较

console.log(null == undefined); // null和undefined特殊处理
console.log(null == {});
console.log(null == "");

console.log(
  {
    valueOf() {
      return 1;
    },
  } == 1
); // 对象先转换为原始值 再进行原始值比较
console.log({} == "[object Object]");
console.log(
  true ==
    {
      valueOf() {
        return 1;
      },
    }
); // 布尔值转换为数字再比较
console.log("123.4" == 123.4); // 字符串与数字
console.log("123.4" == 123n); // 字符串与BigInt
console.log(0n == -0); // 数字与BigInt
