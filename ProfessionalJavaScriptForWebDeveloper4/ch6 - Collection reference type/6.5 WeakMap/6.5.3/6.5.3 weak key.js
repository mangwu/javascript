/*
 * @Author: mangwu                                                             *
 * @File: 6.5.3 weak key.js                                                    *
 * @Date: 2022-08-31 14:26:52                                                  *
 * @LastModifiedDate: 2022-08-31 14:31:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 弱键
const container = {
  key1: {},
  key2: {},
};

const map = new Map().set(container.key1, "value1");
const weakMap = new WeakMap().set(container.key2, "value2");

console.log(map);
console.log(weakMap.has(container.key2));

// 清除key在container中的引用
container.key1 = null;
container.key2 = null;

console.log(map);
// 此时key2被垃圾回收，weakMap是空的