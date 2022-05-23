/*
 * @Author: mangwu                                                             *
 * @File: 02-constructor.js                                                    *
 * @Date: 2022-05-23 16:26:05                                                  *
 * @LastModifiedDate: 2022-05-23 16:37:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 对象constructor属性返回对象的构造方法，它就是对构造函数本身的引用

const o = {};
console.log(o.constructor, o.constructor == Object, Object);

const a = [];
console.log(a.constructor, a.constructor == Array, Array);

const n = Number(3);

console.log(n.constructor, n.constructor == Number, Number);
