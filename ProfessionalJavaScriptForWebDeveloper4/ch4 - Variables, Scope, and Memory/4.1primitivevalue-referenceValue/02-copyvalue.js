/*
 * @Author: mangwu                                                             *
 * @File: 02-copyvalue-.js                                                     *
 * @Date: 2022-06-10 15:53:56                                                  *
 * @LastModifiedDate: 2022-06-10 15:56:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 复制值
// 原始值通过变量复制值，两个变量的原始值相互独立

// 引用值通过变量赋值值，只是赋值了指针，指针都指向存储在堆内存中的对象

let obj1 = {
  name: "manwu",
  age: 23,
};
// 通过变量复制
const obj2 = obj1;
obj2.name = "wumang";

console.log(obj1); // 指向同一个对象，所以打印出obj的name属性也是变化后的
