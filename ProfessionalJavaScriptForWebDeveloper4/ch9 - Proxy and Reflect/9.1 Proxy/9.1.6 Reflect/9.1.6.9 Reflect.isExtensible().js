/*
 * @Author: mangwu                                                             *
 * @File: 9.1.6.9 Reflect.isExtensible().js                                    *
 * @Date: 2022-09-24 22:10:01                                                  *
 * @LastModifiedDate: 2022-09-24 22:12:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 对象是否可扩展

const empty = {};
console.log(Reflect.isExtensible(empty));
Reflect.preventExtensions(empty); // 使对象不可扩展
console.log(Reflect.isExtensible(empty));

const frozen = Object.freeze({});
const sealed = Object.seal({});
console.log(Reflect.isExtensible(frozen));
console.log(Reflect.isExtensible(sealed));

