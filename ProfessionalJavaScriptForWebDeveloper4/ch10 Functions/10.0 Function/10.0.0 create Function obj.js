/*
 * @Author: mangwu                                                             *
 * @File: 10.0.0 create Function obj.js                                        *
 * @Date: 2022-09-29 09:51:36                                                  *
 * @LastModifiedDate: 2022-09-29 10:05:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 创建函数对象有四种方式

// 1. 函数声明
function sum(num1, num2) {
  return num1 + num2;
}

// 2. 函数表达式
let sum = function (num1, num2) {
  return num1 + num2;
};

// 3. 箭头表达式
let sum = (num1, num2) => {
  return num1 + num2;
};

// 4. Function 构造函数
let sum = new Function("num1", "num2", "return num1 + num2");
