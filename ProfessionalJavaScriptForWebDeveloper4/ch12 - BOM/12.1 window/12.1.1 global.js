/*
 * @Author: mangwu                                                             *
 * @File: 12.1.1 global.js                                                     *
 * @Date: 2022-11-04 11:23:35                                                  *
 * @LastModifiedDate: 2022-11-04 11:24:48                                      *
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