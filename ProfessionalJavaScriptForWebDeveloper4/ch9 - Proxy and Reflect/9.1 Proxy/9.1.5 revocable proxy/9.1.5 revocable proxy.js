/*
 * @Author: mangwu                                                             *
 * @File: 9.1.5 revocable proxy.js                                             *
 * @Date: 2022-09-23 20:49:35                                                  *
 * @LastModifiedDate: 2022-09-23 20:52:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 可撤销代理

const target = {
  foo: "bar",
};

const handler = {
  get() {
    return "intercepted";
  },
};

const { proxy, revoke } = Proxy.revocable(target, handler);

console.log(proxy.foo);
console.log(target.foo);

// 撤销代理
revoke();

console.log(proxy);
try {
  console.log(proxy.message);
} catch (error) {
  console.log(error.message);
}
