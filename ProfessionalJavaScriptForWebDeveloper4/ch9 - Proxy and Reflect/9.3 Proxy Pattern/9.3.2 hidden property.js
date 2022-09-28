/*
 * @Author: mangwu                                                             *
 * @File: 9.3.2 hidden property.js                                             *
 * @Date: 2022-09-28 15:56:04                                                  *
 * @LastModifiedDate: 2022-09-28 15:59:08                                      *
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
  bar: "bar",
  baz: "baz",
};
const hiddenProp = ["foo", "bar"];

const proxy = new Proxy(target, {
  get() {
    if (hiddenProp.includes(arguments[1])) {
      return undefined;
    }
    return Reflect.get(...arguments);
  },
  has() {
    if (hiddenProp.includes(arguments[1])) {
      return false;
    }
    return Reflect.has(...arguments);
  },
});

// get
console.log(proxy.foo);
console.log(proxy.bar);
console.log(proxy.baz);
// has
console.log("foo" in proxy);
console.log("bar" in proxy);
console.log("baz" in proxy);



