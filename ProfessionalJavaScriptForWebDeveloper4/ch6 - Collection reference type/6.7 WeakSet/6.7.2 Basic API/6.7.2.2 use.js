/*
 * @Author: mangwu                                                             *
 * @File: 6.7.2.2 use.js                                                       *
 * @Date: 2022-09-02 10:58:37                                                  *
 * @LastModifiedDate: 2022-09-02 10:59:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 基本API
let obj1 = {};
let obj2 = {};
let obj3 = {};

const ws = new WeakSet([obj1, obj2, obj3]);
console.log(ws.has(obj1));
console.log(ws.add(obj1));
console.log(ws.delete(obj2));
console.log(ws.has(obj2));
