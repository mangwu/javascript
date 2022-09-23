/*
 * @Author: mangwu                                                             *
 * @File: 9.1.4 trap invariant.js                                              *
 * @Date: 2022-09-23 16:45:42                                                  *
 * @LastModifiedDate: 2022-09-23 16:49:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 捕获不定式

const target = {};
// 不可配置不可写的属性，value值是固定的
Object.defineProperty(target, "message", {
  value: "hello, world",
  configurable: false,
  enumerable: true,
  writable: false,
});
const proxy = new Proxy(target, {
  // 显然不遵循get的捕获器不定式
  get() {
    return "world";
  },
});

try {
  proxy.message;
} catch (error) {
  console.log(error.toString());
}
