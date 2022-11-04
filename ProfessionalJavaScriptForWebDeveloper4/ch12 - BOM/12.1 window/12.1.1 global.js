/*
 * @Author: mangwu                                                             *
 * @File: 12.1.1 global.js                                                     *
 * @Date: 2022-11-04 11:23:35                                                  *
 * @LastModifiedDate: 2022-11-04 14:10:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 浏览器中的window对象复用为ECMAScript的Global对象

// 以下代码在浏览器中执行
var age = 22;
var sayAge = () => alert(this.age);
alert(window.age); // 22
sayAge(); // 22
window.sayAge(); // 22

// 通过对象访问不存在的属性不会抛出异常，但是直接访问不存在的全局变量会抛出异常

let m = k; // 抛出异常
m = window.k; // undefined
