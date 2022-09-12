/*
 * @Author: mangwu                                                             *
 * @File: 8.1.8.4 destructruing in arguments.js                                *
 * @Date: 2022-09-12 22:47:44                                                  *
 * @LastModifiedDate: 2022-09-12 22:49:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 函数参数的解构赋值
function introduceSelf({ name, age }) {
  console.log(`Hello, I'm ${name}. I'm ${age} years old`);
}
const person = {
  name: "mangwu",
  age: 22,
};
introduceSelf(person);
