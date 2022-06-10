/*
 * @Author: mangwu                                                             *
 * @File: 01-dynamicProperty.js                                                *
 * @Date: 2022-06-10 14:54:06                                                  *
 * @LastModifiedDate: 2022-06-10 14:58:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 原始值与引用值
// 动态属性
// 只有引用值能定义动态属性，而原始值不可以
const o = new Object();
const person = "mangwu";
o.age = 23;
person.age = 23;
console.log(o.age, person.age);

// 使用包装函数创造的类似原始值的实例本质上是对象（引用值）
const person2 = new String("mangwu");
person2.age = 23;
console.log(person2.age, typeof person2);
