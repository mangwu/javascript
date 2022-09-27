/*
 * @Author: mangwu                                                             *
 * @File: 9.1.9.2 inner slot.js                                                *
 * @Date: 2022-09-27 18:36:32                                                  *
 * @LastModifiedDate: 2022-09-27 18:38:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 内部插槽导致一些代理无法访问到原始对象上的数据/状态
// 如Date
const target = new Date();
const proxy = new Proxy(target, {});

console.log(proxy instanceof Date); // true
try {
  proxy.getDate(); // 无法获取
} catch (error) {
  console.log(error.toString());
}
