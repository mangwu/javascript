/*
 * @Author: mangwu                                                             *
 * @File: 10.2 function names.js                                               *
 * @Date: 2022-09-30 14:50:28                                                  *
 * @LastModifiedDate: 2022-09-30 15:09:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 函数名称，广义上就是保存指向函数指针的变量名称

function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(1, 2));

let anotherSum = sum;
console.log(anotherSum(2, 3));

sum = null;

console.log(anotherSum(4, 3));


// ES6的函数名称：函数对象本身的