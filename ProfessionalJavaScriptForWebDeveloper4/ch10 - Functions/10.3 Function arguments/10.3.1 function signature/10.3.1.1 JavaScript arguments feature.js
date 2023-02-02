/*
 * @Author: mangwu                                                             *
 * @File: 10.3.1.1 JavaScript arguments feature.js                             *
 * @Date: 2022-10-05 22:37:06                                                  *
 * @LastModifiedDate: 2022-10-05 22:39:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// JavaScript没有函数签名

// 传递函数参数不用关心传入参数的个数，也不用关心参数的类型

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum());
console.log(sum(1));
console.log(sum(1, 2));
console.log(sum("1", "2", 3));
