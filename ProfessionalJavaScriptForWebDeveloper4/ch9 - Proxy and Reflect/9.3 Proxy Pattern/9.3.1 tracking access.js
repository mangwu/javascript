/*
 * @Author: mangwu                                                             *
 * @File: 9.3.1 tracking access.js                                             *
 * @Date: 2022-09-28 15:39:44                                                  *
 * @LastModifiedDate: 2022-09-28 15:44:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 跟踪属性访问

const target = {
  age: 22,
  name: "mangwu",
};
target.__proto__.sayHello = function () {
  console.log(`Hello, I'm ${this.name}`);
};

const proxy = new Proxy(target, {
  set() {
    console.log(
      `target ${arguments[0]} is setting ${arguments[1]} = ${arguments[2]}`
    );
    return Reflect.set(...arguments);
  },
  get() {
    console.log(
      `target ${arguments[0]} is getting ${arguments[1]} property value`
    );
    return Reflect.get(...arguments);
  },
});
proxy.age;
proxy.name = "wumang";
proxy.sayHello();
