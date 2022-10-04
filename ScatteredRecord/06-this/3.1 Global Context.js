/*
 * @Author: mangwu                                                             *
 * @File: this value.js                                                        *
 * @Date: 2022-10-02 16:27:59                                                  *
 * @LastModifiedDate: 2022-10-02 23:03:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 严格模式和非严格模式下，全局作用域this都是指向全局对象的

"use strict";

console.log(this);
console.log(global);
console.log(globalThis);
// // 浏览器环境
// console.log(this == window);
// console.log(globalThis == window);
// node环境
console.log(this === global);
console.log(globalThis === this);
console.log(globalThis === global);


