/*
 * @Author: mangwu                                                             *
 * @File: 9.1.0 mdn- Proxy.js                                                  *
 * @Date: 2022-09-22 17:12:58                                                  *
 * @LastModifiedDate: 2022-09-22 17:39:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 创建空代理对象

const target = {
  message1: "hello",
  message2: "everyone",
};

const proxy = new Proxy(target, {});
console.log(proxy);
console.log(proxy.message1);
console.log(proxy.message2);

proxy.message2 = "world";
console.log(target);
console.log(target.message1);
console.log(target.message2);

console.log(proxy === target);

const handler2 = {
  get(t, prop, receiver) {
    console.log(t === target);
    console.log(prop);
    console.log(receiver);
    return "不管访问什么属性都被返回的值";
  },
};

const proxy2 = new Proxy(target, handler2);
console.log(proxy2);
console.log(proxy2.message1);
console.log(proxy2.message2);
