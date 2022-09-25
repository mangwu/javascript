/*
 * @Author: mangwu                                                             *
 * @File: 9.1.6.11 Reflect.prventExtensible().js                               *
 * @Date: 2022-09-24 23:06:10                                                  *
 * @LastModifiedDate: 2022-09-24 23:08:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 设置为不可扩展对象

const target = {};
console.log(Reflect.isExtensible(target));
console.log(Reflect.preventExtensions(target));
console.log(Reflect.isExtensible(target));

const target2 = {};
console.log(Object.isExtensible(target2));
console.log(Object.preventExtensions(target2));
console.log(Object.isExtensible(target2));

try {
  console.log(Reflect.preventExtensions("123"));
} catch (error) {
  console.log(error.toString());
}
console.log(Object.preventExtensions("123"));
