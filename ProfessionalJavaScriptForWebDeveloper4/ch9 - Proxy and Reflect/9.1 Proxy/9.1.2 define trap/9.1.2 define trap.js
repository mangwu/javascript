/*
 * @Author: mangwu                                                             *
 * @File: 9.1.2 define trap.js                                                 *
 * @Date: 2022-09-23 15:05:57                                                  *
 * @LastModifiedDate: 2022-09-23 15:22:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 定义捕获器
const target = {
  message: "hello, world",
};

const handler = {
  // get捕获器
  get() {
    return "handler override";
  },
};

const proxy = new Proxy(target, handler);

console.log(target.message);
console.log(proxy.message);

console.log(Object.create(target).message);
console.log(Object.create(proxy).message);

