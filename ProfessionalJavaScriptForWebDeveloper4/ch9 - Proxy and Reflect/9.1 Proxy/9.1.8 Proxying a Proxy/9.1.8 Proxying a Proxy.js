/*
 * @Author: mangwu                                                             *
 * @File: 9.1.8 Proxying a Proxy.js                                            *
 * @Date: 2022-09-26 22:19:00                                                  *
 * @LastModifiedDate: 2022-09-26 22:53:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 间接代理
const target = { foo: "bar" };

const firstProxy = new Proxy(target, {
  get() {
    console.log("frist proxy");
    return Reflect.get(...arguments);
  },
});

const secondProxy = new Proxy(firstProxy, {
  get() {
    console.log("second proxy");
    return Reflect.get(...arguments);
  },
});

console.log(secondProxy.foo);
console.log(firstProxy.foo);
