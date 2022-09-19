/*
 * @Author: mangwu                                                             *
 * @File: 8.4.1.2.0.1.js                                                       *
 * @Date: 2022-09-19 13:35:03                                                  *
 * @LastModifiedDate: 2022-09-19 15:26:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 构造函数模式
function PersonType(name) {
  this.name = name;
}
PersonType.prototype.sayName = function () {
  console.log(this.name);
};
var person = new PersonType("mangwu");
person.sayName(); // "mangwu"

console.log(person instanceof PersonType); // true
console.log(person instanceof Object); // true
// 基本类声明

class PersonClass {
  // 等价于 PersonType 构造函数
  constructor(name) {
    this.name = name;
  }
  // 等价于 PersonType.prototype.sayName
  sayName() {
    console.log(this.name);
  }
}
person = new PersonClass("mangwu");
person.sayName(); // mangwu;
console.log(person instanceof PersonClass); // true
console.log(person instanceof Object); // true

console.log(typeof PersonClass); // function
console.log(typeof PersonClass.prototype.sayName); // function

console.log(Object.getOwnPropertyDescriptors(PersonType));
console.log(Object.getOwnPropertyDescriptors(PersonClass));


try {
  console.log(PersonClass.arguments);
} catch (error) {
  console.log(error.toString());
}

try {
  console.log(PersonClass.caller);
} catch (error) {
  console.log(error.toString());
}

// 构造函数加闭包实现的类的的等价写法
let PersonType2 = (function () {
  "use strict";
  const PersonType2 = function (name) {
    // 确保通过关键字new调用该方法
    if (typeof new.target === "undefined") {
      // throw new Error("必须通过new关键字调用构造函数");
      throw new TypeError(
        "Class constructor PersonClass cannot be invoked without 'new'"
      );
    }
    this.name = name;
  };
  Object.defineProperty(PersonType2.prototype, "sayName", {
    value: function () {
      // 确保不会通过new调用该方法
      if (typeof new.target !== "undefined") {
        throw new Error("不可使用关键字new调用该方法");
      }
      console.log(this.name);
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
  return PersonType2;
})();

// let instance = PersonClass("mangwu");
let instance = new PersonType("mangwu");
const a = new instance.sayName(); // 构造函数的原型方法没有规范，所以可以使用new调用方法
console.log(a);
