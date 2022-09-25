/*
 * @Author: mangwu                                                             *
 * @File: 9.1.6.13.js                                                          *
 * @Date: 2022-09-25 20:21:52                                                  *
 * @LastModifiedDate: 2022-09-25 21:17:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

console.log(Reflect.setPrototypeOf({}, Object.prototype));
console.log(Reflect.setPrototypeOf({}, null)); // 纯净对象
let target = {};
Object.preventExtensions(target);
console.log(Reflect.setPrototypeOf(target, null)); // 不可扩展对象无法设置原型

target = {};
let proto = Object.create(target); // proto是以target为原型的对象
console.log(Reflect.setPrototypeOf(target, proto)); // 会形成原型链环
