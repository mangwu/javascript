/*
 * @Author: mangwu                                                             *
 * @File: 9.1.3.1 trap parameter.js                                            *
 * @Date: 2022-09-23 15:41:10                                                  *
 * @LastModifiedDate: 2022-09-23 15:45:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const target = {
  foo: "foo",
};
const handler = {
  get(trapTarget, prop, receiver) {
    console.log(trapTarget === target);
    console.log(prop);
    console.log(receiver === proxy);
  },
};
const proxy = new Proxy(target, handler);
proxy.foo;

const handler2 = {
  get(trapTarget, prop, receiver) {
    return trapTarget[prop];
  },
};

const proxy2 = new Proxy(target, handler2);
console.log(proxy2.foo);
console.log(target.foo);

