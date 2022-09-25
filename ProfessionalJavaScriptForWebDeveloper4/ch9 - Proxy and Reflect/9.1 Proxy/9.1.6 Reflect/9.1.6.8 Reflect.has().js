/*
 * @Author: mangwu                                                             *
 * @File: 9.1.6.8 Reflect.has().js                                             *
 * @Date: 2022-09-24 21:47:33                                                  *
 * @LastModifiedDate: 2022-09-24 22:02:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 和in操作符类似

const a = { foo: "a" };
const b = { __proto__: a };
const c = { __proto__: b };

console.log(Reflect.has(c, "foo"));
